import "server-only";
import { db } from "@/database";
import { Category } from "@/types";

export type FullCategory = Category & {
  parentCategory?: Category;
};

export async function getCategoriesData(): Promise<FullCategory[]> {
  const rawCategories = await db.selectFrom("category").selectAll().execute();

  const flatCategories = await Promise.all(
    rawCategories.map(async (category) => {
      let parentCategory;
      if (category.parentId) {
        parentCategory = await db
          .selectFrom("category")
          .selectAll()
          .where("category.id", "=", category.parentId)
          .executeTakeFirstOrThrow();
      }
      return { ...category, parentCategory: parentCategory };
    })
  );

  return flatCategories;
}
