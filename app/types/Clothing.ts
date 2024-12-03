import { GenderModel } from "./Gender";
import { SeasonModel } from "./Season";
import { SizeModel } from "./Size";

export type ClothingModel = {
  id: number;
  name: string;
  size: SizeModel;
  color: string;
  material: string;
  type: string;
  brand: string;
  price: number;
  stock: number;
  image: string;
  releaseDate: string;
  gender: GenderModel;
  season: SeasonModel;
};
