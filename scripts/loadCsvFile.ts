import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { db } from "@/database";
import { parse } from "@fast-csv/parse";
import fs from "fs/promises";

async function getCsvString(filePath: string) {
  return await fs.readFile(filePath, "utf8");
}

function changeStringToArray(str: string) {
  if (str.trim() === "") {
    return [];
  }
  return str
    .trim()
    .split(",")
    .filter((eachStr) => eachStr !== "");
}
function changeStringToNumber(options: {
  str: string;
  allowUndefined: false;
  replaceDecimal?: boolean;
}): number;

function changeStringToNumber(options: {
  str: string;
  allowUndefined: true;
  replaceDecimal?: boolean;
}): number | undefined;

function changeStringToNumber({
  str,
  allowUndefined,
  replaceDecimal = false
}: {
  str: string;
  allowUndefined: boolean;
  replaceDecimal?: boolean;
}) {
  if (str.trim() === "" && allowUndefined) {
    return undefined;
  }
  if (str) {
    return replaceDecimal ? Number(str.replace(".", "")) : Number(str);
  }
  throw new Error(`The ${str} should not be undefined`);
}

async function handleCategory() {
  const csvString = await getCsvString(
    "/Users/elle/Elle/code/garden-world/category.csv"
  );

  const categoryCsvRows: {
    type: string;
    slug: string;
    label: string;
    navIndex: number;
    parentSlug?: string;
  }[] = [];

  await new Promise<void>((resolve) => {
    const categoryData = parse({ headers: true })
      .on("error", (error) => {
        throw error;
      })
      .on("data", (row) => categoryCsvRows.push(row))
      .on("end", (rowCount: number) => {
        console.log(`Parsed ${rowCount} rows`);
        resolve();
      });

    categoryData.write(csvString);
    categoryData.end();
  });

  await db.transaction().execute(async (txn) => {
    const categoryParialDbCols: { id: bigint; slug: string }[] = [];
    for (const categoryRow of categoryCsvRows) {
      const parentCategory = categoryParialDbCols.find(
        (row) => categoryRow.parentSlug === row.slug
      );
      if (categoryRow.parentSlug && !parentCategory) {
        throw new Error(`error happening on ${categoryRow.slug}`);
      }

      const udpatedCategory = { ...categoryRow, parentId: parentCategory?.id };
      delete udpatedCategory.parentSlug;

      const categoryDbRow = await txn
        .insertInto("category")
        .values(udpatedCategory)
        .returning(["id", "slug"])
        .executeTakeFirstOrThrow();

      categoryParialDbCols.push(categoryDbRow);
    }
  });
}

async function handleAnnouncement() {
  const csvString = await getCsvString(
    "/Users/elle/Elle/code/garden-world/announcement.csv"
  );
  const announcementCsvRows: Record<"text" | "location", string>[] = [];

  await new Promise<void>((resolve) => {
    const announcementData = parse({ headers: true })
      .on("error", (error) => {
        throw error;
      })
      .on("data", (row) => announcementCsvRows.push(row))
      .on("end", (rowCount: number) => {
        console.log(`Parsed ${rowCount} rows`);
        resolve();
      });

    announcementData.write(csvString);
    announcementData.end();
  });

  for (const announcementRow of announcementCsvRows) {
    await db.transaction().execute(async (txn) => {
      await txn
        .insertInto("announcement")
        .values(announcementRow)
        .executeTakeFirstOrThrow();
    });
  }
}

async function handleProduct() {
  const csvString = await getCsvString(
    "/Users/elle/Elle/code/garden-world/product.csv"
  );
  const productCsvRows: {
    slug: string;
    label: string;
    imagesUrls: string;
    videoIds: string;
    originalPrice: string;
    salesPrice: string;
    categorySlug: string;
    sku: string;
    stockAmount: string;
    amountPerPack: string;
    collection: string;
    englishDescription: string;
    chineseDescription: string;
    instructionImageUrls: string;
    additionalInfo: string;
  }[] = [];

  await new Promise<void>((resolve) => {
    const productData = parse({ headers: true })
      .on("error", (error) => {
        throw error;
      })
      .on("data", (row) => productCsvRows.push(row))
      .on("end", (rowCount: number) => {
        console.log(`Parsed ${rowCount} rows`);
        resolve();
      });

    productData.write(csvString);
    productData.end();
  });

  await db.transaction().execute(async (txn) => {
    for (const productRow of productCsvRows) {
      const reformAdditionalInfo = productRow.additionalInfo
        .trim()
        .split(";")
        .reduce<Record<string, string>>((reformedInfo, originalInfo) => {
          const infoSlice = originalInfo.split(":");
          reformedInfo[infoSlice[0].trim()] = infoSlice[1].trim();
          return reformedInfo;
        }, {});

      const { id: categoryId } = await txn
        .selectFrom("category")
        .select("id")
        .where("slug", "=", productRow.categorySlug)
        .executeTakeFirstOrThrow();

      const collectionArray = changeStringToArray(productRow.collection);

      const collections =
        collectionArray.length > 0
          ? await txn
              .selectFrom("category")
              .selectAll()
              .where("slug", "in", collectionArray)
              .execute()
          : [];

      if (collectionArray.length !== collections.length) {
        // console.log(collectionArray.length, collections.length);
        throw new Error(
          `Should have all collections but not, product.collection is ${collectionArray.join(
            ","
          )}, and collections are ${collections.join(",")}`
        );
      }

      const udpatedProduct = {
        ...productRow,
        imagesUrls: changeStringToArray(productRow.imagesUrls),
        videoIds: changeStringToArray(productRow.videoIds),
        categoryId,
        originalPrice: changeStringToNumber({
          str: productRow.originalPrice,
          allowUndefined: false,
          replaceDecimal: true
        }),
        salesPrice: changeStringToNumber({
          str: productRow.salesPrice,
          allowUndefined: true,
          replaceDecimal: true
        }),
        stockAmount: changeStringToNumber({
          str: productRow.stockAmount,
          allowUndefined: false
        }),
        amountPerPack: changeStringToNumber({
          str: productRow.amountPerPack,
          allowUndefined: true
        }),
        instructionImageUrls: changeStringToArray(
          productRow.instructionImageUrls
        ),
        additionalInfo: reformAdditionalInfo
      };
      // @ts-expect-error
      delete udpatedProduct.categorySlug;
      // @ts-expect-error
      delete udpatedProduct.collection;

      const productDbRow = await txn
        .insertInto("product")
        .values(udpatedProduct)
        .returning(["id", "slug"])
        .executeTakeFirstOrThrow();

      if (collections.length > 0) {
        const productCollectionRows = collections.map((collection) => ({
          productId: productDbRow.id,
          collectionId: collection.id
        }));
        await txn
          .insertInto("productCollection")
          .values(productCollectionRows)
          .execute();
      }
    }
  });
}

async function main() {
  const { file, table } = await yargs(hideBin(process.argv))
    .option("f", {
      alias: "file",
      demandOption: true,
      describe: "csv file",
      type: "string"
    })
    .option("t", {
      alias: "table",
      demandOption: true,
      describe: "db table",
      type: "string"
    }).argv;

  switch (file) {
    case "category.csv":
      await handleCategory();
      break;
    case "product.csv":
      await handleProduct();
      break;
    case "announcement.csv":
      await handleAnnouncement();
      break;
    default:
      return;
  }
}

main().catch(console.error);
