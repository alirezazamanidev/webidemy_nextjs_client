"use client";
import { ErrorMessage, Form, FormikProps, FormikValues } from "formik";
import React from "react";

import Modal from "@/components/shared/modals/modal";
import Input from "@/components/shared/forms/Input";
import Loading from "react-loading";
import { Category } from "@/libs/model/category";
import { useRouter } from "next/navigation";
type categoryformProps = FormikProps<any> & {
  handleCancel: () => void;
  cate: Category;
};
const InnerCategoryForm = ({
  isSubmitting,
  cate,
  handleCancel,
}: categoryformProps) => {
  const router = useRouter();
  return (
    <>
      <Modal show={true} setShow={handleCancel}>
        <Form className=" w-6/12 bg-dark-600 px-5 py-7 rounded-lg  shadow-sm">
          <div>
            <h2 className=" text-2xl  text-right mb-5 text-gray-300">
              {cate ? "ویرایش دسته بندی" : "ایجاد دسته بندی جدید"}
            </h2>
          </div>

          <div>
            <Input
              placeholder="عنوان دسته را وارد کنید"
              name="title"
              type="text"
              className=" w-full py-4  rounded-md  px-3 bg-gray-600 text-gray-100 outline-none "
            />
            <ErrorMessage
              name="title"
              component="div"
              className=" text-base text-right my-3 text-red-700 "
            />
          </div>
          <div className="  mt-4 w-full flex items-center gap-4">
            <button
              className="  flex justify-center bg-gradient-to-r from-blue-750 to-blue-250
                  text-gray-50 px-14 py-3 text-lg rounded-lg "
              type="submit"
            >
              {isSubmitting ? (
                <span>
                  <Loading
                    type="bars"
                    color="#fff"
                    height={30}
                    width={30}
                    className=" scale-100"
                  />
                </span>
              ) : (
                <span>{cate ? "ویرایش دسته بندی" : "ایجاد دسته بندی"}</span>
              )}
            </button>
            <span
              onClick={() => {
                if (cate) {
                  router.push("/admin/categories");
                  handleCancel();
                } else {
                  handleCancel();

                }
              }}
              className=" cursor-pointer flex justify-center bg-gradient-to-r from-red-700 to-red-400
                  text-gray-50 px-14 py-3 text-lg rounded-lg "
            >
              انصراف
            </span>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default InnerCategoryForm;
