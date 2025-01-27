import type { InsertObject, Transaction } from "kysely";
import { db } from "@/database";
import type { Database } from "@/types";

main().catch(console.error);

// async function main() {
//   await db.transaction().execute(async (txn) => {
//     txn.deleteFrom("nodeKind").execute();
//     console.log("Node kinds erased.");

//     const artistId = await insertInto(txn, "nodeKind", {
//       name: "artist"
//     });
//     const releaseId = await insertInto(txn, "nodeKind", {
//       name: "release"
//     });

//     txn.deleteFrom("node").execute();
//     console.log("Nodes erased.");

//     const louisColeId = await insertInto(txn, "node", {
//       kindId: artistId,
//       name: "Louis Cole",
//       properties: JSON.stringify({
//         location: "Los Angeles, CA"
//       })
//     });
//     const genevieveArtadiId = await insertInto(txn, "node", {
//       kindId: artistId,
//       name: "Genevieve Artadi",
//       properties: JSON.stringify({
//         location: "Los Angeles, CA"
//       })
//     });
//     const knowerId = await insertInto(txn, "node", {
//       kindId: artistId,
//       name: "KNOWER"
//     });
//     console.log("Artists created.");

//     const knowerForeverId = await insertInto(txn, "node", {
//       kindId: releaseId,
//       name: "KNOWER FOREVER",
//       properties: JSON.stringify({
//         releasedOn: "2023-06-02"
//       })
//     });
//     const foreverForeverId = await insertInto(txn, "node", {
//       kindId: releaseId,
//       name: "Forever Forever",
//       properties: JSON.stringify({
//         releasedOn: "2023-03-17"
//       })
//     });
//     const qualityOverOpinionId = await insertInto(txn, "node", {
//       kindId: releaseId,
//       name: "Quality Over Opinion",
//       properties: JSON.stringify({
//         releasedOn: "2022-10-14"
//       })
//     });
//     const nothingId = await insertInto(txn, "node", {
//       kindId: releaseId,
//       name: "nothing",
//       properties: JSON.stringify({
//         releasedOn: "2024-08-09"
//       })
//     });
//     console.log("Releases created.");

//     txn.deleteFrom("edgeKind").execute();
//     console.log("Edge kinds erased.");

//     const memberOfId = await insertInto(txn, "edgeKind", {
//       name: "memberOf",
//       reverseName: "hasMember"
//     });
//     const hasReleaseId = await insertInto(txn, "edgeKind", {
//       name: "hasRelease",
//       reverseName: "releasedBy"
//     });

//     await insertInto(txn, "edge", {
//       kindId: memberOfId,
//       subjectId: louisColeId,
//       objectId: knowerId
//     });
//     await insertInto(txn, "edge", {
//       kindId: memberOfId,
//       subjectId: genevieveArtadiId,
//       objectId: knowerId
//     });
//     await insertInto(txn, "edge", {
//       kindId: hasReleaseId,
//       subjectId: knowerId,
//       objectId: knowerForeverId
//     });
//     await insertInto(txn, "edge", {
//       kindId: hasReleaseId,
//       subjectId: genevieveArtadiId,
//       objectId: foreverForeverId
//     });
//     await insertInto(txn, "edge", {
//       kindId: hasReleaseId,
//       subjectId: louisColeId,
//       objectId: qualityOverOpinionId
//     });
//     await insertInto(txn, "edge", {
//       kindId: hasReleaseId,
//       subjectId: louisColeId,
//       objectId: nothingId
//     });
//   });
//   console.log("Edges created.");
// }

async function insertInto<T extends keyof Database>(
  txn: Transaction<Database>,
  table: T,
  values: InsertObject<Database, T>
) {
  const { id: insertId } = await txn
    .insertInto(table)
    .values(values)
    .returning("id")
    .executeTakeFirstOrThrow();

  return insertId;
}

async function main() {
  await db.transaction().execute(async (txn) => {
    txn.deleteFrom("category").execute();
    console.log("Category table erased.");
    const vegetableId = await insertInto(txn, "category", {
      type: "nav-root",
      slug: "vegetable-seeds",
      label: "Vegetable Seeds",
      navIndex: 0
    });
    const bokChoyId = await insertInto(txn, "category", {
      type: "nav-menu",
      slug: "bok-choy",
      label: "Bok Choy 小青菜",
      parentId: vegetableId
    });

    const collectionsId = await insertInto(txn, "category", {
      type: "nav-root",
      slug: "collections",
      label: "Collections",
      navIndex: 3
    });

    const leafyGreenId = await insertInto(txn, "category", {
      type: "nav-menu",
      slug: "leafy-greens",
      label: "Leafy Greens 叶类",
      parentId: collectionsId
    });

    console.log("Categories created.");

    txn.deleteFrom("product").execute();
    console.log("Product table erased.");
    const bokChoyJadeStarId = await insertInto(txn, "product", {
      slug: "bok-choy-jade-star",
      label: "Bok Choy Jade Star",
      imagesUrls: ["/assets/Bok-Choy-Jade-star.jpg"],
      videoIds: ["QM4-1ApxSyA"],
      originalPrice: 249,
      salesPrice: 149,
      categoryId: bokChoyId,
      sku: "A083",
      stockAmount: 110,
      englishDescription:
        "Heat resistant Bok Choy, plant is upright and large, ~24 cm tall, ~30 cm wide. Round leaf is green and wavy, pale green petiole is wide and short. Single plant can grow ~16 leaves and weighs up to 800g. It could be grown for baby/young plant or a full size. ",
      chineseDescription:
        "耐热青梗菜，株型中大而直立，束腰。成株株高24cm，开展度30cm＊30cm；叶片绿色，卵圆形，叶缘不平呈波状，长24cm，宽15cm，叶柄绿白色、稍短（4.5cm）而宽（6.2cm)；单株叶片16，重可达800克秋季栽培20天可采收菜秧，冬春栽培则需50-60天。移栽株行距22cm＊25cm，适温季节30天即可采收大棵菜。",
      instructionImageUrls: ["/assets/bok-choy-jade-star-planting.jpg"],
      additionalInfo: {},
      amountPerPack: 1000
    });
    console.log("Product created.");

    txn.deleteFrom("productCollection").execute();
    console.log("ProductCollection table erased.");
    const leafyGreenCollection = await insertInto(txn, "productCollection", {
      productId: bokChoyJadeStarId,
      collectionId: leafyGreenId
    });
    console.log("ProductCollection created.");
  });
}
