"use client";

import React, { ChangeEvent, useState } from "react";
import Modal from "../../shared/modals/modal";
import { useRef } from "react";
import ShowImage from "next/image";
import { Field, Form, Formik } from "formik";
import Loading from "react-loading";
import { toast } from "react-toastify";
import * as yup from "yup";
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

  const getImageAvatar = (e: any) => {
    const imageFile = e.target.files[0];
    const urlImage = URL.createObjectURL(imageFile);
    setUrlAvatarImage(urlImage);
  };
  const uploadAvatarValidationSchema = yup.object().shape({
    avatar: yup
      .mixed()
      .test("fileFormat", "فرمت تصویر معتبر نیست", (value: any) => {
        if (!value) {
          return false; // تصویری انتخاب نشده است.
        }

        const validFormats = ["image/png", "image/jpg", "image/jpeg"];
        const status = validFormats.includes(value.type);
        if (!status) {
          toast.error("فرمت فایل از فرمت های مجاز تصویر  نیست!");
          setUrlAvatarImage("");
          return false;
        }
        return true;
      })
      .test(
        "fileSize",
        "حجم تصویر باید حداکثر 1 مگابایت باشد",
        (value: any) => {
          if (!value) {
            return false; // تصویری انتخاب نشده است.
          }

          const status = value.size <= 1024 * 1024; // حداکثر 1 مگابایت
          if (!status) {
            toast.error("حجم تصویر باید حدواکثر 1  مگابایت باشد!");
            setUrlAvatarImage("");
            return false;
          }
          return true;
        }
      )
      .test(
        "imageDimensions",
        "ابعاد تصویر باید حداکثر 3000x3000 پیکسل باشد",
        (value: any) => {
          if (!value) {
            return false; // تصویری انتخاب نشده است.
          }

          const img = new Image();
          img.src = URL.createObjectURL(value);

          const status = new Promise((resolve) => {
            img.onload = () => {
              resolve(img.width <= 3000 && img.height <= 3000);
            };
          });

          if (!status) {
            toast.error("ابعداد تصویر با توجه به ابعداد ذکر شده همخوانی ندارد");
            setUrlAvatarImage("");
            return false;
          }
          return true;
        }
      ),
  });

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
                              <button className="flex justify-center items-center transition-all border-none text-blue-350 hover:text-gray-400 cursor-pointer text-xs md:text-sm  outline-none focus:outline-none">
                                <span>کلیک کنید</span>
                              </button>

                              <input
                                type="file"
                                name="avatar"
                                onChange={(e: any) => {
                                  const inputfile = e.target.files[0];
                                  setFieldValue("avatar", inputfile);
                                  getImageAvatar(e);
                                }}
                                hidden={true}
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
                          <ShowImage
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
