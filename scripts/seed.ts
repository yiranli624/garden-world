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
    const celtuceId = await insertInto(txn, "category", {
      type: "nav-menu",
      slug: "celtuce",
      label: "Celtuce 莴笋",
      parentId: vegetableId
    });
    console.log("Categories created.");
    // txn.deleteFrom("product").execute();
  });
}
