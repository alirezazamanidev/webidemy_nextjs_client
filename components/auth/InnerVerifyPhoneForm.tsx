"use client";
import { Form, FormikProps, FormikValues, ErrorMessage } from "formik";
import Loading from "react-loading";

import React, {  useEffect, useRef, useState } from "react";

let currentOtpIndex: number = 0;
export default function InneVerifyPhoneForm({
  setFieldValue,
  isSubmitting,
}: FormikProps<any>) {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const [activeotpIndex, setactiveotpIndex] = useState<number>(0);
  const [Statusdisabled, setStatusDisabled] = useState<boolean>(true);

  const inputRef = useRef<HTMLInputElement>(null);
  const handleOnchange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    const newOtp: string[] = [...otp];
    newOtp[currentOtpIndex] = value.substring(value.length - 1);
    if (!value) setactiveotpIndex(currentOtpIndex - 1);
    else setactiveotpIndex(currentOtpIndex + 1);
    setOtp(newOtp);
   

    const valueInput = newOtp.join("");
    setFieldValue("code", valueInput);
  };
  const handleKeyDown = (
    { key }: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    currentOtpIndex = index;
    if (key === "Backspace") setactiveotpIndex(currentOtpIndex - 1);
  };
  useEffect(() => {
   if(otp.join("").length===6)setStatusDisabled(false);
   else setStatusDisabled(true);
    
    inputRef.current?.focus();
  }, [activeotpIndex,otp]);

  return (
    <>
      <Form className=" w-full pb-11 sm:pb-200">
        <h2 className="font-bold text-xl lg:text-3xl text-center mt-6 sm:mt-8 text-gray-100 lg:mt-10 select-none">
          رمز یک بار مصرف ارسال شده را وارد کنید :
        </h2>
        <div className=" w-full dir-ltr mt-6 sm:mt-8 lg:mt-10">
          <div className=" dir-ltr flex justify-center items-center gap-4 sm:gap-6 w-full mt-6 sm:mt-8 lg:mt-10">
            {otp.map((_, index) => (
              <input
                ref={activeotpIndex === index ? inputRef : null}
                onChange={handleOnchange}
                onKeyDown={(e) => handleKeyDown(e, index)}
                value={otp[index]}
                key={index}
                type="number"
                className="sm:py-1 w-7 sm:w-10 lg:w-12 border-b-2 bg-transparent autofill:bg-transparent border-gray-500 focus:border-blue-250 dark:focus:border-cnDarkBlue-10 caret-white outline-none text-center text-base lg:text-xl transition-all disabled:text-gray-500 rounded-none spin-button-none text-white"
              />
            ))}
          </div>
          <ErrorMessage
            name="phone"
            component="div"
            className="  my-3 dir-rtl text-right mx-2  text-sm md:text-lg lg:text-xl  text-red-500"
          />
        </div>
        <button
          disabled={Statusdisabled}
          type="submit"
          className={` bg-gradient-to-r ${
            Statusdisabled
              ? " from-blue-850 to-blue-550 cursor-default  hover:ring-0 opacity-60 text-gray-400 "
              : " from-blue-750 cursor-pointer hover:ring-8 to-blue-250 opacity-100 text-white"
          }  relative select-none flex justify-center items-center transition-all rounded-lg px-5 md:px-7 py-3 md:py-4 gap-4 text-base lg:text-xl  ring-cnBlue-15/30   mt-8 sm:mt-10 lg:mt-12 w-full ${
            isSubmitting
              ? " from-blue-900 to-blue-600 hover:ring-0 cursor-wait opacity-75 "
              : "from-blue-750 to-blue-250   opacity-100"
          }   `}
        >
          {isSubmitting ? (
            <span className=" pt-0 ">
              <Loading
                type="bubbles"
                color="#fff"
                width={60}
                className=" flex justify-center   items-center "
                height={30}
              />
            </span>
          ) : (
            <span className="transition-allvisible opacity-100">ورود</span>
          )}
        </button>
      </Form>
    </>
  );
}
