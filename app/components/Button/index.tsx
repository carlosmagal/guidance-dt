type ButtonProps = {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const Button = ({
  type = "button",
  children,
  onClick,
  className = "",
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-[#e05937] rounded-xl text-white py-2 hover:scale-105 duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
