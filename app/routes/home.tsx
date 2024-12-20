/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import type { MetaFunction } from "@remix-run/node";
import { toast } from "react-toastify";

import Button from "~/components/Button";
import Card from "~/components/ClothingCard";
import Drawer from "~/components/Drawer";
import ClothingForm from "~/components/Form/ClothingForm";

import { ClothingModel } from "~/types/Clothing";

import { ServiceFactory } from "~/service/Clothing";

const clothingService = ServiceFactory.createClothingService();

export const meta: MetaFunction = () => {
  return [{ title: "Home" }];
};

export default function HomePage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [data, setData] = useState<ClothingModel[]>([]);
  const [updateData, setUpdateData] = useState<ClothingModel | undefined>(
    undefined
  );

  const handleEdit = (clothing: ClothingModel) => {
    setUpdateData(clothing);
    setIsDrawerOpen(true);
  };

  const handleDelete = async (id: number) => {
    await clothingService.delete(id);
    handleLoadData();
    toast.success("Roupa removida com sucesso!");
  };

  const handleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
    setUpdateData(undefined);
  };

  const handleLoadData = async () => {
    const items = await clothingService.getAll();

    setData(items);
  };

  useEffect(() => {
    handleLoadData();
  }, []);

  return (
    <section className="bg-gray-50 min-h-screen flex flex-col">
      <header className="bg-gray-100 shadow-md p-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#e05937]">Dashboard</h1>
        <Button
          type="button"
          className="bg-[#e05937] px-4 py-2 text-sm"
          onClick={handleDrawer}
        >
          Cadastrar Produto
        </Button>
      </header>

      <main className="flex-grow p-5">
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data.map((clothing) => (
            <Card
              key={clothing.id}
              clothing={clothing}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </main>

      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <h2 className="text-lg font-bold text-[#e05937] mb-4">
          Cadastrar Produto
        </h2>
        <ClothingForm
          updateData={updateData}
          onFinish={() => {
            setUpdateData(undefined);
            setIsDrawerOpen(false);
            handleLoadData();
          }}
        />
      </Drawer>
    </section>
  );
}
