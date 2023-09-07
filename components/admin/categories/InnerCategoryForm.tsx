"use client";
import { ErrorMessage, Form, FormikProps, FormikValues } from "formik";
import React, { Dispatch, SetStateAction } from "react";

import Modal from "@/components/shared/modals/modal";
import Input from "@/components/shared/forms/Input";
import Loading from "react-loading";
import { Category } from "@/libs/model/category";
import { useRouter } from "next/navigation";
type categoryformProps = FormikProps<any> & {
  cate?: Category;
};
const InnerCategoryForm = ({ isSubmitting, cate }: categoryformProps) => {
  const router = useRouter();
  return (
    <>
      <div className=" w-3/6  p-4 lg:p-7">
        <Form className=" bg-dark-600  text-right    mt-4 rounded-lg p-4">
          <div className="  flex flex-col  justify-center w-full">
            <div className=" w-full">
              <Input
                label="عنوان دسته بندی"
                type="text"
                name="title"
                id="title"
                className=" w-full outline-none bg-gray-600 rounded-lg px-3 py-4 text-white"
              />
              <ErrorMessage
                name="title"
                component="p"
                className="   text-red-600 text-sm rounded-lg my-2"
              />
            </div>

            <div className="mt-5">
              <button
                type="submit"
                className=" w-full  flex justify-center items-center rounded-lg bg-gradient-to-r from-blue-750 to-blue-250 text-white px-3 py-3"
              >
                {isSubmitting ? (
                  <Loading type="bars" color="#fff" width={30} height={30} />
                ) : (
                  <span>{cate ? "ویرایش دسته بندی" : "ایجاد دسته بندی"}</span>
                )}
              </button>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
};

export default InnerCategoryForm;
