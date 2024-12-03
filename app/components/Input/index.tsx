type InputProps = {
  type: "text" | "password" | "select";
  name: string;
  placeholder?: string;
  options?: string[];
};

const Input = ({ type, name, placeholder, options }: InputProps) => {
  if (type === "select" && options) {
    return (
      <select
        name={name}
        className="p-2 mt-8 rounded-xl border w-full"
        defaultValue=""
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
  }

  return (
    <input
      className="p-2 border rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#e05937]"
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
};

export default Input;
