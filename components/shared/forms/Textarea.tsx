"use client";
import { FC } from "react";

import { Field, ErrorMessage, FieldProps } from "formik";

interface TextAreaProps {
  name: string;
  lable?: string;
  rows?: number;
  cols?: number;
  placeholder?:string

  inputClassName?: string;
  lableClassName?: string;
  errorClassName?: string;
}

const Textarea: FC<TextAreaProps> = ({
  name,
  lable,
  rows = 5,
  cols = 5,
  placeholder,
  inputClassName,
  errorClassName,
  lableClassName,
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
            <textarea
              id={name}
              rows={rows}
              cols={cols}
              placeholder={placeholder}
              className={inputClassName}
              {...field}
            />
          )}
        </Field>

      
      </div>
    </>
  );
};

export default Textarea;
