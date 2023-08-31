"use client";

import React from "react";
import Modal from "../modals/modal";
import { BiErrorCircle } from "react-icons/bi";
import { Formik, Form } from "formik";
import Loading from "react-loading";
interface props {
  title: string;
  descreaption: string;
  handleTrue: () => void;
  handleCancel: () => void;
}

export default function DeleteConfreamation({
  title,
  descreaption,
  handleCancel,
  handleTrue,
}: props) {
  return (
    <>
      <Modal show={true} setShow={handleCancel}>
        <div className="bg-gray-800 ring ring-blue-750 inline-block  w-full rounded-lg overflow-hidden max-w-lg shadow p-4 lg:p-7 text-right ">
          <div className=" flex items-center ">
            <BiErrorCircle className=" text-red-800 text-3xl ml-2" />
            <h2 className=" text-gray-200 text-lg">{title}</h2>
          </div>
          <hr className=" text-gray-100 my-3" />
          <p className=" text-gray-100 text-sm max-w-sm"> {descreaption}</p>
          <hr className=" text-gray-300 my-3" />

          <Formik initialValues={{}} onSubmit={handleTrue}>
            {({ isSubmitting }) => (
              <Form>
                <div className=" flex items-center  mt-3">
                  <button
                    type="submit"
                    className=" text-white ml-2 bg-red-600 text-sm px-3 py-2 rounded-md"
                  >
                    {isSubmitting ? (
                      <span className=" flex justify-center items-center">
                        {" "}
                        <Loading className=" scale-75" width={30} height={25} />
                      </span>
                    ) : (
                      <span>حذف</span>
                    )}
                  </button>
                  <button
                    onClick={handleCancel}
                    className=" text-white bg-gray-600 text-sm px-3 py-2 rounded-md"
                  >
                    انصراف
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Modal>
    </>
  );
}
