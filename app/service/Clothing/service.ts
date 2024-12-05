import { ClothingModel } from "~/types/Clothing";
import { IClothingService } from "./types";

export class ClothingService implements IClothingService {
  private storageKey = "clothingItems";

  async save(data: Omit<ClothingModel, "id">): Promise<void> {
    const storedItems = JSON.parse(
      localStorage.getItem(this.storageKey) || "[]"
    );
    const updatedItems = [...storedItems, { ...data, id: Date.now() }];
    localStorage.setItem(this.storageKey, JSON.stringify(updatedItems));
  }

  async getAll(): Promise<ClothingModel[]> {
    return JSON.parse(localStorage.getItem(this.storageKey) || "[]");
  }

  async delete(id: number): Promise<void> {
    const storedItems = JSON.parse(
      localStorage.getItem(this.storageKey) || "[]"
    );
    const updatedItems = storedItems.filter(
      (item: ClothingModel) => item.id !== id
    );
    localStorage.setItem(this.storageKey, JSON.stringify(updatedItems));
  }

  async update(id: number, data: Omit<ClothingModel, "id">): Promise<void> {
    const storedItems = JSON.parse(
      localStorage.getItem(this.storageKey) || "[]"
    );
    const updatedItems = storedItems.map((item: ClothingModel) =>
      item.id === id ? { ...item, ...data } : item
    );
    localStorage.setItem(this.storageKey, JSON.stringify(updatedItems));
  }
}
