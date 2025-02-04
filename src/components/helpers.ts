import { getCategories } from "@/queries/categoryQueries";
import { ALL_CATEGORIES, Category } from "./constants";

export const generateImgUrl = (imgName: string) => {
  return `https://pub-fdcdc3373c774f9c8c4a83d7ea14e670.r2.dev/${imgName}`;
};

export const generateVideoUrl = (videoId: string, srcType: "img" | "embed") => {
  return srcType === "img"
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : `https://www.youtube.com/embed/${videoId}?rel=0`;
};
