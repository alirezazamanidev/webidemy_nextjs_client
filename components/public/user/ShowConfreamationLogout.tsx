"use client";

import React from "react";

import { Form, Formik } from "formik";
import Loading from "react-loading";
import Modal from "@/components/shared/modals/modal";
interface props {
  handleTrue: () => void;
  handleCancel: () => void;
}

export default function LogoutConfreamation({
  handleCancel,
  handleTrue,
}: props) {
  return (
    <>
      <Modal show={true} setShow={handleCancel}>
        <div className="p-4 w-full fixed z-20 top-0 bottom-0 right-1/2 translate-x-1/2 overflow-auto hideSB flex max-w-lg">
          <div className=" bg-dark-600 transition-colors rounded-2xl w-full flex flex-col justify-center items-center gap-4 p-4 lg:p-7 my-auto">
            <div className="w-full">
              <div>
                <p className="text-center select-none text-gray-300">
                  آیا مایل به خروج از حساب کاربری خود هستید؟
                </p>
                <Formik initialValues={{}} onSubmit={handleTrue}>
                  {({ isSubmitting }) => (
                    <Form className="grid gap-2 w-full mx-auto mt-4 lg:mt-7 grid-cols-2">
                      <button
                        onClick={handleCancel}
                        className="border-solid border-2 rounded-lg transition-all group border-cnBlue-20 text-white bg-cnBlue-20  border-blue-350  bg-blue-350 hover:text-gray-400 hover:bg-transparent   opacity-100 select-none px-4 py-2 text-sm lg:text-base"
                      >
                        انصراف
                      </button>
                      <div className="flex justify-center items-center">
                        <button
                          
                          type="submit"
                          className="border-solid border-2 rounded-lg transition-all group text-red-600 border-transparent hover:text-gray-500 opacity-100 text-sm lg:text-base select-none px-2 py-1"
                        >
                          {isSubmitting ? (
                            <Loading type="bubbles" height={40} width={40} />
                          ) : (
                            <span>خروج</span>
                          )}
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
