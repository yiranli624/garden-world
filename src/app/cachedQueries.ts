import { unstable_cache } from "next/cache";
import { getAllProductsData, getProductData } from "@/queries/productQueries";
import { getCategoriesData } from "@/queries/categoryQueries";
import getAnnouncementsData from "@/queries/announcementQueries";

export const getAllProducts = unstable_cache(
  async () => {
    return await getAllProductsData();
  },

  [],
  { revalidate: 3600 }
);

export const getProduct = unstable_cache(
  async (productSlug: string) => {
    return await getProductData(productSlug);
  },

  [],
  { revalidate: 3600 }
);

export const getCategories = unstable_cache(
  async () => {
    return await getCategoriesData();
  },

  [],
  { revalidate: 3600 }
);

export const getAnnouncements = unstable_cache(
  async () => {
    return await getAnnouncementsData();
  },

  [],
  { revalidate: 3600 }
);
