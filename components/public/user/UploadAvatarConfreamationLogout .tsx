"use client";

import React, { useState } from "react";
import Modal from "../../shared/modals/modal";
import * as yup from "yup";
import { useRef } from "react";
import Image from "next/image";
import { Form, Formik } from "formik";
import Loading from "react-loading";
interface props {
  handleCancel: () => void;
  handleTrue: (values: any) => void;
}

export default function UploadAvatarConfreamation({
  handleCancel,
  handleTrue,
}: props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [urlAvatarImage, setUrlAvatarImage] = useState<string>("");
  const uploadAvatarValidationSchema = yup.object().shape({
    // avatar: yup
    //   .mixed()
    //   .required("وارد کردن تصویر برای دوره الزامیست")
    //   .test(
    //     "fileFormat",
    //     "پسوند تصویر از پسوند های تصاویر نیست!",
    //     (value: any) => {
    //       return (
    //         value &&
    //         ["image/png", "image/jpg", "image/jpeg"].includes(value.type)
    //       );
    //     }
    //   ),
  });
  const getImageAvatar = (e: any) => {
    const imageFile = e.target.files[0];
    const urlImage = URL.createObjectURL(imageFile);
    setUrlAvatarImage(urlImage);
  };
  return (
    <>
      <Modal show={true} setShow={handleCancel}>
        <div className="p-4 w-full fixed z-20 top-0 bottom-0 right-1/2 translate-x-1/2 overflow-auto hideSB flex max-w-lg">
          <div className=" bg-dark-600 transition-colors rounded-2xl w-full flex flex-col justify-center items-center gap-4 p-4 lg:p-7 my-auto">
            <div className="w-full">
              <div>
                <Formik
                  initialValues={{ avatar: {} }}
                  validationSchema={uploadAvatarValidationSchema}
                  onSubmit={handleTrue}
                >
                  {({ isSubmitting, setFieldValue, errors }) => (
                    <Form>
                      {!urlAvatarImage ? (
                        <div className="w-full">
                          <div
                            onClick={() => inputRef.current?.click()}
                            className="w-full border-2 border-dashed  border-blue-350 transition-all rounded-lg overflow-hidden cursor-pointer "
                          >
                            <div className="flex justify-center items-center gap-2 h-36 md:h-48 flex-col">
                              <h3 className="text-xs text-gray-200 sm:text-sm font-bold transition-colors text-center">
                                برای آپلود، بر روی کادر
                              </h3>
                              <button className="flex justify-center items-center transition-all border-none text-blue-350 hover:text-gray-400 cursor-pointer text-xs md:text-sm">
                                <span>کلیک کنید</span>
                              </button>
                              <input
                                type="file"
                                hidden
                                onChange={(e: any) => {
                                  setFieldValue("avatar", e.target.files[0]);
                                    getImageAvatar(e);
                                
                                }}
                                ref={inputRef}
                              />
                            </div>
                          </div>
                          <p className="text-center text-xs mt-4 text-gray-400">
                            تنها آپلود تصویر با حجم حداکثر 1 مگابایت، حداکثر
                            ابعاد 3000 در 3000 پیکسل، و فرمت های png, jpg, jpeg
                            مجاز می باشد.
                          </p>
                        </div>
                      ) : (
                        <div className=" w-full select-none">
                          <Image
                            src={urlAvatarImage}
                            width={200}
                            height={300}
                            className=" rounded-lg w-full"
                            alt="avatar"
                          />
                        </div>
                      )}

                      <div className="grid gap-2 w-full mx-auto mt-4 lg:mt-7 grid-cols-2 md:w-1/2">
                        {isSubmitting ? (
                          <Loading
                            type="bubbles"
                            color="#fff"
                            width={60}
                            height={50}
                          />
                        ) : (
                          <button
                            type="submit"
                            className={`border-solid border-2 rounded-lg transition-all group border-blue-350 text-white bg-blue-350 ${
                              urlAvatarImage
                                ? "opacity-100 hover:bg-gray-800 cursor-pointer"
                                : "opacity-60 cursor-default"
                            }   select-none px-4 py-2 text-sm lg:text-base`}
                          >
                            تایید
                          </button>
                        )}

                        <div className="flex justify-center items-center">
                          {urlAvatarImage ? (
                            <span
                              onClick={() => setUrlAvatarImage("")}
                              className="border-solid cursor-pointer border-2 rounded-lg transition-all group text-red-500 dark:text-red-600 border-transparent hover:text-gray-400 dark:hover:text-gray-500 opacity-100 text-sm lg:text-base select-none px-2 py-1"
                            >
                              انصراف
                            </span>
                          ) : (
                            <span
                              onClick={handleCancel}
                              className="border-solid border-2 cursor-pointer rounded-lg transition-all group text-red-500 dark:text-red-600 border-transparent hover:text-gray-400 dark:hover:text-gray-500 opacity-100 text-sm lg:text-base select-none px-2 py-1"
                            >
                              بازگشت
                            </span>
                          )}
                        </div>
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
