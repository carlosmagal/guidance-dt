/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";

import CloseIcon from "../../assets/icons/close.svg";

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Drawer = ({ isOpen, onClose, children }: DrawerProps) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full bg-gray-100 shadow-lg transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } w-[50%]`}
    >
      <div className="relative h-full p-4">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          <img src={CloseIcon} alt="" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Drawer;
