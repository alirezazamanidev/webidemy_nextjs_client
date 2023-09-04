"use client";
import { ErrorMessage, Form, FormikProps, FormikValues } from "formik";
import React, { SetStateAction, useEffect, useState } from "react";
import Input from "../../shared/forms/Input";
import Selectbox from "@/components/shared/forms/Selectbox";
import Textarea from "@/components/shared/forms/Textarea";
import { Course } from "@/libs/model/course";
import Loading from "react-loading";
import Image from "next/image";
import mePhoto from "@/public/images/me.jpeg";
import separateWithComma from "@/libs/utils";
import { MdAddAPhoto, MdOutlinePhotoCamera } from "react-icons/md";
import { TypeConditioncourseToFarsi } from "@/libs/utils";
import { AiTwotoneDelete } from "react-icons/ai";
import { CourseFormValuseInterface } from "@/libs/contracts/admin";
type courseFormProps = FormikProps<any> & {
  course?: Course;
};
const InnerCourseForm = ({
  setFieldValue,
  isSubmitting,
  errors,
  course,
}: courseFormProps) => {
  const [disabled, setDisabled] = useState(false);
  const [fromColorCard, setFromColorCard] = useState("");
  const [toColorCard, setToColorCard] = useState("");
  const [titleCard, setTitleCard] = useState("");
  const [priceCard, setPriceCard] = useState("");
  const [conditionCourseCard, setConditionCourseCard] = useState("");
  const [ImageUrlCard, setImageUrlCard] = useState("");
  const [typeCourseCard, setTypeCoursecard] = useState("");
  const [imageFile1, setImageFile] = useState(null);
  const handleGetUrlImage = (e: any) => {
    const imageFile = e.target.files[0];
    setImageFile(imageFile);
    setFieldValue("photo", imageFile);
    const urlImage = URL.createObjectURL(imageFile);
    setImageUrlCard(urlImage);
  };
  const SelectboxHandle = (e: any) => {
    setTypeCoursecard(e.target.value);
    setFieldValue("type", e.target.value);
    if (e.target.value === "free" || e.target.value === "vip") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  useEffect(() => {
    if (course) {
      setTitleCard(course?.title);
      setTypeCoursecard(course?.type);
      setFromColorCard(course?.gradientColorCard?.fromColor);
      setToColorCard(course?.gradientColorCard?.toColor);
      if (!imageFile1) {
        setImageUrlCard(`http://localhost:8000${course?.photos["720"]}`);
      }

      setPriceCard(course?.price);
      setConditionCourseCard(course?.condition);
    }
  }, [course,imageFile1]);

  return (
    <>
      <div className=" w-full flex flex-col-reverse md:flex-row p-4 lg:p-7">
        <div className=" w-full md:w-5/12 lg:w-7/12 xl:w-8/12  ">
          <Form className=" bg-dark-600 px-5 py-7 rounded-lg  shadow-sm">
            <div className="">
              <div className=" flex flex-col  justify-center border border-dashed border-gray-500 mt-4 mb-6 p-4 lg:p-5 rounded-lg">
                <label htmlFor="" className=" text-lg text-gray-300 mb-4">
                  انتخاب رنگ کارت دوره :{" "}
                </label>
                <div className=" flex flex-col  lg:flex-row space-y-5 lg:space-y-0  ">
                  <div className=" flex  items-center ml-0 md:ml-4">
                    <label htmlFor="" className=" text-white text-base ml-4">
                      از رنگ :
                    </label>
                    <input
                      defaultValue={course?.gradientColorCard?.fromColor}
                      type="color"
                      className=" w-8/12 lg:w-16 h-8 lg:h-10  outline-none"
                      onChange={(e) => {
                        setFromColorCard(e?.target?.value);
                        setFieldValue("fromColor", e.target.value);
                      }}
                    />
                  </div>
                  <div className=" flex items-center ">
                    <label htmlFor="" className=" text-white text-base ml-4">
                      تا رنگ :
                    </label>
                    <input
                      type="color"
                      defaultValue={course?.gradientColorCard?.toColor}
                      className="w-8/12 lg:w-16 h-8 lg:h-10  outline-none"
                      onChange={(e) => {
                        setToColorCard(e.target.value);
                        setFieldValue("toColor", e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex flex-col xl:flex-row items-center ">
              <div className=" w-full xl:w-8/12">
                <input
                  defaultValue={course?.title}
                  onChange={(e) => {
                    setFieldValue("title", e.target.value);
                    setTitleCard(e.target.value);
                  }}
                  placeholder="عنوان دوره را وارد کنید"
                  name="title"
                  className="  w-full py-4  rounded-md  px-3 bg-gray-600 text-gray-100 outline-none "
                />
              </div>

              <div className=" w-full xl:w-4/12 mr-0 xl:mr-4 mt-4 xl:mt-0">
                <Selectbox
                  onChange={SelectboxHandle}
                  inputClassName="bg-gray-100  outline-none selectbox  w-full flex justify-center  rounded-lg bg-gray-600 text-gray-100  py-4 pr-5 "
                  name="type"
                  options={[
                    { label: "لطفا نوع دوره را انتخاب کنید", value: "" },
                    { label: "نقدی", value: "cash" },
                    { label: " رایگان", value: "free" },
                  ]}
                />
              </div>
            </div>
            <div className="  mt-4">
              <Selectbox
                onChange={(e: any) => {
                  setConditionCourseCard(e.target?.value);
                  setFieldValue("condition", e.target.value);
                }}
                inputClassName="bg-gray-100  outline-none selectbox  w-full flex justify-center  rounded-lg bg-gray-600 text-gray-100  py-4 pr-5 "
                name="type"
                options={[
                  { label: "لطفا وضعیت دوره را انتخاب کنید", value: "" },
                  { label: "پیش فروش", value: "presell" },

                  { label: "توقف فروش", value: "stopـselling" },
                  { label: "در حال برگزاری", value: "on_performing" },

                  { label: "تکمیل ظبط", value: "completion_of_recording" },
                ]}
              />
            </div>
            <div className=" flex flex-col xl:flex-row items-center   mt-4">
              <div className=" w-full xl:w-6/12">
                <input
                  defaultValue={course?.price}
                  onChange={(e) => {
                    setPriceCard(e.target.value);
                    setFieldValue("price", e.target.value);
                  }}
                  placeholder="قیمت دوره را به تومان وارد کنید"
                  name="price"
                  className="  w-full py-4  rounded-md  px-3 bg-gray-600 text-gray-100 outline-none "
                />
              </div>

              <div className=" w-full xl:w-6/12 mr-0 xl:mr-4">
                <Input
                  placeholder="تگی رو برای دوره وارد کنید"
                  name="tags"
                  className="  w-full py-4  rounded-md  px-3 bg-gray-600 text-gray-100 outline-none  mt-4 xl:mt-0"
                />
              </div>
            </div>

            <div className=" mt-4 w-full">
              <Textarea
                name="body"
                placeholder="متن معروفی دوره را وارد کنید"
                inputClassName="p-2   text-gray-100  py-3 px-4 rounded-lg  outline-none bg-gray-600  w-full "
              />
            </div>

            <div className=" mt-4 w-full">
              <Textarea
                name="description"
                placeholder="نوضیحات دوره را وارد کنید"
                inputClassName="  text-gray-100 py-3 px-4 rounded-lg  outline-none bg-gray-600  w-full "
              />
            </div>

            <div className="  mt-4 w-full">
              <button
                className=" w-full flex justify-center bg-gradient-to-r from-blue-750 to-blue-250
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
                  <span>{course ? "ویرایش دوره" : "ایجاد دوره"}</span>
                )}
              </button>
            </div>
          </Form>
        </div>
        <div className=" w-full md:w-7/12 lg:w-5/12 xl:w-4/12">
          <div className=" w-full  px-0 md:px-4   pt-14 pb-5 lg:pb-7  select-none  ">
            <div
              className={` transition-all   bg-gray-800   rounded-xl h-full  flex flex-col relative group`}
              style={{
                background: `linear-gradient(to left top, ${fromColorCard}, ${toColorCard}`,
              }}
            >
              <div
                className="absolute inset-0 rounded-xl  opacity-0 group-hover:opacity-100 transition-all duration-1000"
                style={{
                  background: `linear-gradient(to left top, ${toColorCard}, ${fromColorCard}`,
                }}
              ></div>
              <div className=" w-full h-full  px-4 lg:px-5 relative flex flex-col">
                <div className=" w-full flex justify-center relative -mt-14">
                  {!ImageUrlCard ? (
                    <div className=" hover:bg-gray-600  rounded-xl w-[600px] md:w-[445px] h-[250px] bg-gray-700  p-4">
                      <label className=" flex justify-center cursor-pointer items-center border border-dashed border-gray-500 h-full rounded-xl">
                        <label htmlFor="coursephoto">
                          <input
                            type="file"
                            hidden
                            id="coursephoto"
                            onChange={handleGetUrlImage}
                          />
                        </label>

                        <MdAddAPhoto className=" text-gray-100 text-5xl" />
                      </label>
                    </div>
                  ) : (
                    <div className=" relative">
                      <span
                        className=" absolute cursor-pointer -top-4  bg-black p-3 rounded-full"
                        onClick={() => setImageUrlCard("")}
                      >
                        <AiTwotoneDelete className=" text-3xl text-red-600" />
                      </span>
                      <Image
                        src={ImageUrlCard}
                        width={650}
                        height={450}
                        className=" aspect-video flex justify-center w-full object-cover rounded-xl transition-all duration-500 "
                        alt="imgr"
                      />
                    </div>
                  )}
                </div>
                <h3 className="text-2xl text-right lg:text-2xl font-bold mt-5 text-white transition-colors w-full">
                  {titleCard ? titleCard : "???"}
                </h3>
                <div className=" flex items-center    gap-2 text-base text-white transition-colors mt-5 w-full">
                  <Image
                    src={mePhoto}
                    alt="me"
                    width={50}
                    height={50}
                    className=" aspect-square object-cover rounded-full transition-all duration-500 opacity-100 w-10 h-10 border-2 border-solid border-white"
                  />
                  <div className=" flex flex-col  gap-1">
                    <span className=" text-lg md:text-sm "> مدرس : </span>
                    <h4 className=" text-sm lg:text-lg">علیرضا زمانی</h4>
                  </div>
                </div>
                <div className="flex flex-col   gap-1 mt-4 mb-6 lg:mb-8">
                  <span className="text-white text-right text-lg lg:text-base">
                    قیمت دوره :
                  </span>
                  <div className="flex gap-5">
                    <span className="flex  justify-center items-center gap-2">
                      <span className="text-base lg:text-lg font-bold text-white transition-colors">
                        {typeCourseCard === "free"
                          ? "رایگان :))"
                          : priceCard
                          ? separateWithComma(priceCard)
                          : "???"}
                      </span>
                      <span className="text-white transition-colors text-sm font-bold">
                        {priceCard ? "تومان" : null}
                      </span>
                    </span>
                  </div>
                </div>
                <div className="mt-auto -mb-5 lg:-mb-7 flex py-3 lg:py-4 px-8 lg:px-10 bg-gray-900 rounded-lg text-white text-sm lg:text-base w-fit mx-auto shadow-cnShadow500">
                  <p className="text-center">
                    {conditionCourseCard
                      ? TypeConditioncourseToFarsi(conditionCourseCard)
                      : "???"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={` ${
              !errors ? "hidden" : "block"
            } bg-dark-600 space-y-3 px-6 select-none py-4  mx-6 rounded-xl  my-6 lg:my-0 `}
          >
            <ErrorMessage
              name="title"
              component="div"
              className=" text-xl text-red-700 "
            />
            <ErrorMessage
              name="photo"
              component="div"
              className=" text-xl text-red-700"
            />
            <ErrorMessage
              name="type"
              component="div"
              className=" text-xl text-red-700"
            />
            <ErrorMessage
              name="condition"
              component="div"
              className=" text-xl text-red-700"
            />
            <ErrorMessage
              name="tags"
              component="div"
              className=" text-xl text-red-700 "
            />
            <ErrorMessage
              name="description"
              component="div"
              className=" text-xl text-red-700"
            />
            <ErrorMessage
              name="body"
              component="div"
              className=" text-xl text-red-700"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default InnerCourseForm;
