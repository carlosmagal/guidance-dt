/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import Input from "../Input";

type ClothingDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ClothingDrawer({
  isOpen,
  onClose,
}: ClothingDrawerProps) {
  return (
    <div
      className={`fixed inset-0 z-50 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div
        className="fixed inset-0 bg-black bg-opacity-30"
        onClick={onClose}
      ></div>
      <div className="absolute right-0 bg-white h-full w-80 shadow-lg">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="p-4">
          <h2 className="text-lg font-semibold text-[#e05937]">
            Cadastrar Produto
          </h2>
          <form className="flex flex-col gap-4 mt-4">
            <Input type="text" name="name" placeholder="Nome do Produto" />
            <Input type="text" name="name" placeholder="Nome do Produto" />
            <Input type="text" name="name" placeholder="Nome do Produto" />
            <button
              type="submit"
              className="bg-[#e05937] text-white py-2 rounded-lg hover:scale-105 transition-transform"
            >
              Salvar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
