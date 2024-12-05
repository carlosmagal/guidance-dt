/* eslint-disable @typescript-eslint/no-explicit-any */
import CurrencyInput from "react-currency-input";

export type InputProps = {
  type: "text" | "password" | "select" | "number" | "date" | "currency";
  name: string;
  placeholder?: string;
  options?: string[];
  value?: any;
  onChange?: (e: any) => void;
};

const Input = ({
  type,
  name,
  placeholder,
  options,
  value,
  onChange,
}: InputProps) => {
  switch (type) {
    case "select":
      if (!options) {
        return <></>;
      }

      return (
        <select
          name={name}
          className="p-2 rounded-xl border w-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#e05937] placeholder-gray-500"
          onChange={onChange}
          value={value}
        >
          <option value="" disabled>
            {placeholder || "Selecione uma opção"}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      );

    case "currency":
      return (
        <CurrencyInput
          placeholder={placeholder}
          className="p-2 border rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#e05937] placeholder-gray-900"
          prefix="R$"
          decimalSeparator=","
          thousandSeparator="."
          onChange={(_: any, val: number) => {
            if (onChange) {
              onChange(val);
            }
          }}
          value={value}
        />
      );

    default:
      return (
        <input
          className="p-2 border rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#e05937] placeholder-gray-900"
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      );
  }
};

export default Input;
