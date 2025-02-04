import "server-only";
import { db } from "@/database";
import { Category, Product } from "@/types";

export type FullProduct = Product & {
  category: Category;
  collections: Category[];
};

export async function getProduct(productSlug: string): Promise<FullProduct> {
  const rawProduct = await db
    .selectFrom("product")
    .selectAll()
    .where("product.slug", "=", productSlug)
    .executeTakeFirstOrThrow();

  const productCategory = await db
    .selectFrom("category")
    .selectAll()
    .where("category.id", "=", rawProduct.categoryId)
    .executeTakeFirstOrThrow();

  const collectionIds = (
    await db
      .selectFrom("productCollection")
      .select("collectionId")
      .where("productId", "=", rawProduct.id)
      .execute()
  ).map((row) => row.collectionId);

  let productCollections: Category[] = [];
  if (collectionIds.length > 0) {
    productCollections = await db
      .selectFrom("category")
      .selectAll()
      .where("category.id", "in", collectionIds)
      .execute();
  }
  const chosenProduct = {
    ...rawProduct,
    category: productCategory,
    collections: productCollections
  };

  return chosenProduct;
}

export async function getAllProducts(): Promise<FullProduct[]> {
  const rawProducts = await db
    .selectFrom("product")
    .select("slug")
    .selectAll()
    .execute();

  return Promise.all(
    rawProducts.map(async (product) => {
      return await getProduct(product.slug);
    })
  );
}
