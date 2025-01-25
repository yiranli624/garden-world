import * as path from "path";
import { promises as fs } from "fs";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { Migrator, FileMigrationProvider } from "kysely";
import { format } from "date-fns";
import { db } from "../src/database.js";

const PROJECT_DIRECTORY = path.resolve(import.meta.dirname, "..");
const MIGRATION_FOLDER = path.join(PROJECT_DIRECTORY, "src/migrations");
const MIGRATION_TEMPLATE = `
import { Kysely } from "kysely";

// For help, see <https://kysely.dev/docs/migrations>

export async function up(db: Kysely<any>): Promise<void> {
  // await db.schema
  //   .createTable("foo")
  //   .addColumn("id", "integer", (col) => col.primaryKey())
  //   .addColumn("name", "text", (col) => col.notNull())
  //   .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  // await db.schema.dropTable("foo").execute();
}
`.trim();

main().catch(console.error);

async function main() {
  await yargs(hideBin(process.argv))
    .command(
      "migrate",
      "Apply all pending migrations",
      withMigrator(migrateToLatest),
    )
    .command(
      "rollback",
      "Undo the latest migration.",
      withMigrator(migrateDown),
    )
    .command(
      "generate",
      "Generate a new migration file",
      // @ts-expect-error This is correct.
      (yargs) => {
        return yargs
          .option("n", {
            alias: "name",
            describe: "The name to use",
          })
          .demandOption("name");
      },
      generateMigration,
    )
    .demandCommand(1, "Please provide a command.")
    .parse();
}

function withMigrator(
  fn: ({ migrator }: { migrator: Migrator }) => void | Promise<void>,
) {
  return async () => {
    const migrator = new Migrator({
      db,
      provider: new FileMigrationProvider({
        fs,
        path,
        migrationFolder: MIGRATION_FOLDER,
      }),
    });
    await fn({ migrator });
  };
}

async function migrateToLatest({ migrator }: { migrator: Migrator }) {
  const { error, results } = await migrator.migrateToLatest();

  if (results) {
    for (const result of results) {
      if (result.status === "Success") {
        console.log(
          `Migration "${result.migrationName}" was executed successfully.`,
        );
      } else if (result.status === "Error") {
        console.error(`Failed to execute migration "${result.migrationName}".`);
      }
    }
  }

  if (error) {
    console.error(error);
    process.exit(1);
  }
}

async function migrateDown({ migrator }: { migrator: Migrator }) {
  const { error, results } = await migrator.migrateDown();

  if (results) {
    for (const result of results) {
      if (result.status === "Success") {
        console.log(
          `Migration "${result.migrationName}" was undone successfully`,
        );
      } else if (result.status === "Error") {
        console.error(`Failed to undo migration "${result.migrationName}"`);
      }
    }
  }

  if (error) {
    console.error(error);
    process.exit(1);
  }
}

async function generateMigration(argv: { name: string }) {
  const normalizedName = argv.name
    .replace(/\..+$/u, "")
    .replace(/[ _]/gu, "-")
    .replace(/([a-z])([A-Z])/gu, (_wholeMatch, firstCapture, secondCapture) => {
      return `${firstCapture}-${secondCapture.toLowerCase()}`;
    })
    .replace(/-+/gu, "-")
    .toLowerCase();
  const timestamp = format(new Date(), "yyyyMMddHHmmss");
  const absoluteFilePath = path.join(
    MIGRATION_FOLDER,
    `${timestamp}-${normalizedName}.ts`,
  );
  const relativeFilePath = path.relative(PROJECT_DIRECTORY, absoluteFilePath);
  await fs.writeFile(absoluteFilePath, MIGRATION_TEMPLATE);
  console.log(`Generated migration ${relativeFilePath}.`);
}
