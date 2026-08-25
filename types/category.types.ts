import { TImage, TResponseData } from "./global.types";

export type TCategory = {
  name: string;
  description: string;
  image: TImage;
} & TResponseData;
