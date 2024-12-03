import { useState } from "react";
import type { MetaFunction } from "@remix-run/node";

import Button from "~/components/Button";
import Card from "~/components/ClothingCard";
import ClothingDrawer from "~/components/ClotingDrawer";

import { clothingItems } from "~/data/clothing";

export const meta: MetaFunction = () => {
  return [{ title: "Home" }];
};

export default function HomePage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleEdit = (id: number) => {
    console.log(id);
  };

  const handleDelete = (id: number) => {
    console.log(id);
  };

  const handleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

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
          {clothingItems.map((clothing) => (
            <Card
              key={clothing.id}
              clothing={clothing}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </main>

      <ClothingDrawer isOpen={isDrawerOpen} onClose={handleDrawer} />
    </section>
  );
}
