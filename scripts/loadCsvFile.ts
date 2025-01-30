import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { db } from "@/database";
import { parse } from "@fast-csv/parse";
import fs from "fs/promises";

async function getCsvString(filePath: string) {
  return await fs.readFile(filePath, "utf8");
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
        .executeTakeFirst();
      categoryDbRow && categoryParialDbCols.push(categoryDbRow);
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

  switch (table) {
    case "category":
      await handleCategory();
      break;
    case "product":
      break;
    case "productCollection":
      break;
    case "announcement":
      await handleAnnouncement();
      break;
    default:
      return;
  }
}

main().catch(console.error);
