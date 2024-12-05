import { ClothingModel } from "~/types/Clothing";

import EditIcon from "~/assets/icons/edit.svg";
import DeleteIcon from "~/assets/icons/delete.svg";

type ClothingCardProps = {
  clothing: ClothingModel;
  onEdit: (id: ClothingModel) => void;
  onDelete: (id: number) => void;
};

const ClothingCard = ({ clothing, onEdit, onDelete }: ClothingCardProps) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg flex items-center gap-4">
      <img
        src={clothing.image}
        alt={clothing.name}
        className="w-20 h-20 object-cover rounded-lg"
      />
      <div className="flex-grow">
        <h3 className="text-lg font-bold text-gray-700">{clothing.name}</h3>
        <p className="text-gray-500 text-sm mt-1">{clothing.type}</p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onEdit(clothing)}
          className="text-blue-500 hover:text-blue-700"
        >
          <img src={EditIcon} alt="" />
        </button>
        <button
          onClick={() => onDelete(clothing.id)}
          className="text-red-500 hover:text-red-700"
        >
          <img src={DeleteIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default ClothingCard;
