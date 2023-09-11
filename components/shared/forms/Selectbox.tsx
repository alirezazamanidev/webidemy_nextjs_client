"use client";
import { FC, ChangeEvent } from "react";

import { Field, FieldProps } from "formik";

interface SelectboxOptionsInterFace {
  label?: string;
  value: string;
}
interface SelectboxProps {
  statusMultipe?: boolean;
  name: string;
  lable?: string;
  options: SelectboxOptionsInterFace[];
  onChange?: (e: ChangeEvent) => void;
  inputClassName?: string;
  lableClassName?: string;
  errorClassName?: string;
}

const Selectbox: FC<SelectboxProps> = ({
  name,
  statusMultipe = false,
  lable,
  options,
  inputClassName,
  errorClassName,
  lableClassName,
  onChange,
}) => {
  return (
    <>
      {lable && (
        <label htmlFor={name} className={lableClassName}>
          {lable}
        </label>
      )}
      <div className="flex flex-col items-start">
        <Field name={name} id={name}>
          {({ field, meta }: FieldProps) => (
            <select
            
              {...field}
              multiple={statusMultipe}
              onChange={onChange || field.onChange}
              name={name}
              className={inputClassName}
              id={name}
            >
              {options.map((option, index) => (
                <option
                  key={index}
                  value={option.value}
                  defaultValue={option.value}
                  className=" text-lg"
                >
                  {option.label}
                </option>
              ))}
            </select>
          )}
        </Field>

      
      </div>
    </>
  );
};

export default Selectbox;
