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
export type Category = Selectable<CategoryTable>;
export type NewCategory = Insertable<CategoryTable>;
export type CategoryUpdate = Updateable<CategoryTable>;

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
export type Product = Selectable<ProductTable>;
export type NewProduct = Insertable<ProductTable>;
export type ProductUpdate = Updateable<ProductTable>;

export type ProductCollectionTable = {
  id: Generated<bigint>;
  productId: bigint;
  collectionId: bigint;
};
export type ProductCollection = Selectable<ProductCollectionTable>;
export type NewProductCollection = Insertable<ProductCollectionTable>;
export type ProductCollectionUpdate = Updateable<ProductCollectionTable>;

export type AnnouncementTable = {
  id: Generated<bigint>;
  text: string;
  location: string; // 'top' | 'product' | 'both'
};
export type Announcement = Selectable<AnnouncementTable>;
export type NewAnnouncement = Insertable<AnnouncementTable>;
export type AnnouncementUpdate = Updateable<AnnouncementTable>;
