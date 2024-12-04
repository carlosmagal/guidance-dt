/* eslint-disable @typescript-eslint/no-explicit-any */
import { Field, ErrorMessage } from "formik";

import Input, { InputProps } from "../Input";

type FormFieldProps = InputProps & {
  label: string;
};

const FormField = ({
  label,
  type,
  name,
  placeholder,
  options,
}: FormFieldProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-gray-700 font-medium">
        {label}
      </label>
      <Field name={name}>
        {({ field }: any) => (
          <Input
            {...field}
            type={type}
            placeholder={placeholder}
            options={options}
          />
        )}
      </Field>
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm"
      />
    </div>
  );
};

export default FormField;
