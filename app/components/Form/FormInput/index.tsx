/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import Input, { InputProps } from "~/components/Input";

type FormFieldProps = InputProps & {
  label: string;
  error?: string;
  touched: boolean;
};

const FormField = ({
  label,
  type,
  name,
  placeholder,
  options,
  value,
  onChange,
  error,
  touched,
}: FormFieldProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-gray-700 font-medium">
        {label}
      </label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        options={options}
        value={value}
        onChange={onChange}
      />

      {error && touched && (
        <span className="text-red-500 text-sm">{error}</span>
      )}
    </div>
  );
};

export default FormField;
