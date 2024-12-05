import { ClothingModel } from "~/types/Clothing";

export interface IClothingService {
  save(data: Omit<ClothingModel, "id">): Promise<void>;
  getAll(): Promise<ClothingModel[]>;
  delete(id: number): Promise<void>;
  update(id: number, data: Omit<ClothingModel, "id">): Promise<void>;
}
