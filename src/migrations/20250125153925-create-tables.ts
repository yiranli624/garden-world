import { Kysely, sql } from "kysely";

// For help, see <https://kysely.dev/docs/migrations>

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable("category")
    .addColumn("id", "serial", (col) => col.primaryKey().notNull())
    .addColumn("type", "text", (col) => col.notNull())
    .addColumn("slug", "text", (col) => col.notNull())
    .addColumn("label", "text", (col) => col.notNull())
    .addColumn("navIndex", "text")
    .addColumn("parentId", "integer", (col) =>
      col.references("category.id").onDelete("set null")
    )
    .execute();

  await db.schema
    .createTable("product")
    .addColumn("id", "serial", (col) => col.primaryKey().notNull())
    .addColumn("slug", "text", (col) => col.notNull())
    .addColumn("label", "text", (col) => col.notNull())
    .addColumn("imagesUrls", sql`text[]`, (col) => col.notNull())
    .addColumn("videoIds", sql`text[]`)
    .addColumn("originalPrice", "integer", (col) => col.notNull())
    .addColumn("salesPrice", "integer")
    .addColumn("categoryId", "integer", (col) =>
      col.references("category.id").onDelete("cascade").notNull()
    )
    .addColumn("sku", "integer")
    .addColumn("stockAmount", "integer")
    .addColumn("englishDescription", "text", (col) => col.notNull())
    .addColumn("chineseDescription", "text")
    .addColumn("instructionImageUrls", sql`text[]`, (col) => col.notNull())
    .addColumn("additionalInfo", "jsonb", (col) =>
      col.notNull().defaultTo("{}")
    )
    .addColumn("amountPerPack", "integer")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("product").execute();
  await db.schema.dropTable("category").execute();
}
