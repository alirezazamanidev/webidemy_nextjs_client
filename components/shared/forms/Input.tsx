import { Field, ErrorMessage, FieldProps } from "formik";
import { ChangeEvent } from "react";
interface props {
  label?: string;
  name: string;
  disabled?: boolean;
  id?:string;
  placeholder?: string;
  onChange?: (e: ChangeEvent) => void;

  className?: string;
  type?: string;
}
export default function Input({
  name,
  label,
  id,
  disabled,
  placeholder,
  className,
  onChange,
  type = "text",
}: props) {
  return (
    <div>
      <label
        className={`${
          !label ? " hidden" : " block"
        } text-gray-100  font-bold mb-3`}
      >
        {label}
      </label>
      <Field name={name} id={name}>
        {({ field, meta }: FieldProps) => (
          <input
            {...field}
            onChange={onChange || field.onChange}
            type={`${type}`}
            disabled={disabled}
            id={id}
            className={className}
            placeholder={placeholder}
          />
        )}
      </Field>
    </div>
  );
}
