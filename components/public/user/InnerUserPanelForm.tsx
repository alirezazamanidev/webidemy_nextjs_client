"use client";
import Input from "@/components/shared/forms/Input";
import Textarea from "@/components/shared/forms/Textarea";
import { ErrorMessage, Field, Form, FormikProps, useFormikContext } from "formik";
import Loading from "react-loading";

export default function InnerUserPanleForm({
  isSubmitting,
  errors,
  getFieldMeta
}: FormikProps<any>) {
  let hasErrors: boolean = Object.keys(errors).length !== 0 ? true : false;
  const { dirty } = useFormikContext();
  let disableBtnStatus=!dirty || hasErrors || isSubmitting;
  
   
  return (
    <>
      <Form className=" p-4 lg:p-7   space-y-4 w-full lg:w-1/2 ">
        <div>
          <label htmlFor="" className="  flex items-center gap-2 mb-3">
            <span className=" text-xl text-gray-100">نام و نام خانوادگی</span>
            <span className=" text-base text-red-500">(ضروری)</span>
          </label>
          <Input
            name="fullname"
            disabled={isSubmitting}
            className="bg-gray-700 placeholder:text-gray-200 placeholder:text-right placeholder:select-none caret-gray-300 py-2 px-3 text-base md:text-lg border-2 border-solid border-transparent text-gray-100 focus:border-gray-500 rounded-lg outline-none transition-all w-full  "
          />
          <ErrorMessage
            name="fullname"
            component="p"
            className=" text-lg text-red-500 my-2"
          />
        </div>
        <div>
          <label htmlFor="" className="  flex items-center gap-2 mb-3">
            <span className=" text-xl text-gray-100">شماره موبایل</span>
            <span className=" text-base text-red-500">(ضروری)</span>
          </label>
          <Input
            name="phone"
            disabled={true}
            className="bg-gray-700 dir-ltr placeholder:text-gray-400 placeholder:text-right placeholder:select-none caret-gray-300 py-2 px-3 text-base md:text-lg border-2 border-solid border-transparent focus:border-gray-500 rounded-lg outline-none transition-all w-full text-gray-100  opacity-60"
          />
          <ErrorMessage
            name="phone"
            component="p"
            className=" text-lg text-red-500 my-2"
          />
        </div>
        <div>
          <label htmlFor="" className="  flex items-center gap-2 mb-3">
            <span className=" text-xl text-gray-100">آدرس ایمیل</span>
          </label>
          <Input
            disabled={isSubmitting}
            name="email"
            className="bg-gray-700 dir-ltr placeholder:text-gray-400 placeholder:text-right placeholder:select-none caret-gray-300 py-2 px-3 text-base md:text-lg border-2 border-solid border-transparent disabled:cursor-default focus:border-gray-500 rounded-lg outline-none transition-all w-full disabled:opacity-50  opacity-60 text-gray-100"
          />
          <ErrorMessage
            name="email"
            component="p"
            className=" text-lg text-red-500 my-2"
          />
        </div>
        <div>
          <label htmlFor="" className="  flex items-center gap-2 mb-3">
            <span className=" text-xl font-bold text-gray-100"> نام کاربری</span>
            <span className=" text-sm text-red-500">(ضروری)</span>
          </label>
          <div className="relative after:absolute after:top-1/2 after:-translate-y-1/2 after:left-3 lg:after:left-4 after:content-['@'] after:text-xl lg:after:text-2xl after:text-gray-400">
            <Input
              disabled={isSubmitting}
              name="username"
              className="bg-gray-700 disabled:opacity-50 dir-ltr text-gray-100 placeholder:text-gray-400 placeholder:text-right placeholder:select-none caret-cnBlue-20 caret-gray-300 pr-3 pl-8 lg:pl-10 py-2 text-base md:text-lg border-2 border-solid border-transparent focus:border-gray-500 rounded-lg outline-none transition-all w-full  "
            />
          </div>
          <ErrorMessage
            name="username"
            component="p"
            className=" text-lg text-red-500 my-2"
          />
        </div>
        <div>
          <label htmlFor="" className="  flex items-center gap-2 mb-3">
            <span className=" text-xl text-gray-100"> بیوگرافی </span>
          </label>

          <Textarea
            name="biography"
            rows={3}
            disabled={isSubmitting}
            inputClassName="bg-gray-700 disabled:opacity-50  text-gray-100 placeholder:text-gray-400 placeholder:text-right placeholder:select-none caret-cnBlue-20 caret-gray-300 pr-3 pl-8 lg:pl-10 py-2 text-base md:text-lg border-2 border-solid border-transparent focus:border-gray-300 dark:focus:border-gray-500 rounded-lg outline-none transition-all w-full  "
          />
            <ErrorMessage
            name="biography"
            component="p"
            className=" text-lg text-red-500 my-2"
          />
        </div>

        <div className=" flex  items-center justify-center w-full">
          <button
            disabled={disableBtnStatus}
            type="submit"
            className=" border-solid disabled:opacity-50 border-2 rounded-lg transition-all group border-blue-350   text-white bg-blue-350 hover:text-blue-350 hover:bg-dark-600 my-4  disabled:hover:text-white disabled:bg-blue-350 opacity-100 px-4 py-2 text-sm lg:text-base "
          >
            {isSubmitting ? (
              <Loading type="bubbles" color="#fff" className="" width={40} height={40} />
            ) : (
              <span>ذخیره تغییرات</span>
            )}
          </button>
        </div>
      </Form>
    </>
  );
}
