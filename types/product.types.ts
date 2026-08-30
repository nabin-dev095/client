import { TBrand, TCategory } from "./category.types";
import { TImage, TResponseData } from "./global.types";

export interface TProduct extends TResponseData {
  name: string;
  category: TCategory;
  brand: TBrand;
  description: string;
  price: string;
  cover_image: TImage;
  images: TImage[];
}
