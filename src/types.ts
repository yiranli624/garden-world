import {
  ColumnType,
  Generated,
  Insertable,
  JSONColumnType,
  Selectable,
  Updateable
} from "kysely";

export type Database = {
  category: CategoryTable;
  product: ProductTable;
  productCollection: ProductCollectionTable;
  announcement: AnnouncementTable;
};

export type CategoryTable = {
  id: Generated<bigint>;
  type: string;
  slug: string;
  label: string;
  parentId: bigint | undefined;
  navIndex: number | undefined;
};

export type ProductTable = {
  id: Generated<bigint>;
  slug: string;
  label: string;
  imagesUrls: string[];
  videoIds: string[] | undefined;
  originalPrice: number;
  salesPrice: number | undefined;
  categoryId: bigint;
  sku: string;
  stockAmount: number;
  englishDescription: string;
  chineseDescription: string | undefined;
  instructionImageUrls: string[];
  additionalInfo: Record<string, unknown>; //anything json-able
  amountPerPack: number | undefined;
};

export type ProductCollectionTable = {
  id: Generated<bigint>;
  productId: bigint;
  collectionId: bigint;
};

export type AnnouncementTable = {
  id: Generated<bigint>;
  announcement: string;
  location: string; // 'top' | 'product' | 'both'
};
