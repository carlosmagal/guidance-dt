import { ClothingService } from "./service";
import { IClothingService } from "./types";

export const ServiceFactory = {
  createClothingService(): IClothingService {
    return new ClothingService();
  },
};
