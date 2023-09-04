"use client";
import { Form, FormikProps, FormikValues, ErrorMessage } from "formik";
import Input from "../shared/forms/Input";
import Loading from "react-loading";

export default function InnerLoginForm({
  isSubmitting,
}: FormikProps<any>) {
  return (
    <>
      <Form className=" w-full pb-11 sm:pb-200">
        <h2 className="font-bold text-xl lg:text-3xl text-center mt-6 sm:mt-8 text-gray-100 lg:mt-10 select-none">
          ورود به حساب وبیدمی
        </h2>
        <div className=" w-full dir-ltr mt-6 sm:mt-8 lg:mt-10">
          <div className=" w-full relative">
            <Input
              name="phone"
              className="w-full caret-gray-300 outline-none border-2 border-solid border-transparent transition-all  focus:border-gray-500 placeholder:text-gray-400 placeholder:select-none text-base lg:text-xl rounded-xl py-3 lg:py-5 placeholder:text-right pr-14 lg:pr-18 pl-4 lg:pl-6 text-gray-200  bg-gray-700 spin-button-none"
              placeholder="شماره موبایل"
              type="text"
            />

            <span className="flex justify-center items-center absolute top-1/2 -translate-y-1/2 border-solid transition-all border-gray-400 pl-3 lg:p-1 lg:pl-3 right-3 lg:right-4 border-l-3 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="transition-all h-5 lg:w-6 w-5 lg:h-6 fill-gray-400 text-gray-400"
              >
                <path
                  strokeLinejoin="round"
                 
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                ></path>
              </svg>
            </span>
          </div>
          <ErrorMessage
            name="phone"
            component="div"
            className="  my-3 dir-rtl text-right mx-2  text-sm md:text-lg lg:text-xl  text-red-500"
          />
        </div>
        <button
          type="submit"
          className={`  relative select-none flex justify-center items-center transition-all rounded-lg px-5 md:px-7 py-3 md:py-4 gap-4 text-base lg:text-xl hover:ring-8 ring-cnBlue-15/30   mt-8 sm:mt-10 lg:mt-12 w-full ${ isSubmitting ? " from-blue-900 to-blue-600 hover:ring-0 cursor-wait opacity-75 " :'from-blue-750 to-blue-250 cursor-pointer opacity-100'}  bg-gradient-to-r text-white`}
        >
          {isSubmitting ? (
            <span className=" pt-0 ">
              <Loading type='bubbles'  color="#fff" width={60} className=" flex justify-center   items-center " height={30} />
            </span>
          ) : (
            <span className="transition-allvisible opacity-100">
                ورود  
            </span>
          )}
        </button>
      </Form>
    </>
  );
}
