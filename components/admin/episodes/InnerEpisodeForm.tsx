"use client";
import { ErrorMessage, Form, FormikProps, FormikValues } from "formik";
import React, { useState } from "react";

import Selectbox from "@/components/shared/forms/Selectbox";
import Textarea from "@/components/shared/forms/Textarea";
import Loading from "react-loading";
import { Episode } from "@/libs/model/episode";
import { BiVideoPlus } from "react-icons/bi";
import { Season } from "@/libs/model/seasson";
import { useQuery } from "react-query";
import { CallApi } from "@/libs/helpers/callApi";
import Input from "@/components/shared/forms/Input";

type EpisodeFormProps = FormikProps<any> & {
  episode?: Episode;
};
const InnerEpisodeForm = ({
  setFieldValue,
  isSubmitting,
  episode,
}: EpisodeFormProps) => {
  const { data, isLoading } = useQuery(
    "getSeasonForCreateEpisode",
    async () => {
      return (await CallApi().get("/admin/episodes/create")).data;
    }
  );
  if (isLoading) return <></>;

  // Handle file input change
  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setFieldValue("video", file);

      const reader = new FileReader();
      reader.onload = (e: any) => {
        const videoElement = document.createElement("video");
        videoElement.src = e.target.result;

        videoElement.onloadedmetadata = () => {
          
          setFieldValue('time',Math.round(videoElement.duration))
        };
      };

      reader.readAsDataURL(file);
    } 
  };

  return (
    <>
      <div className=" w-full flex flex-col-reverse md:flex-row p-4 lg:p-7">
        <div className=" w-full md:w-5/12 lg:w-7/12 xl:w-8/12  ">
          <Form className=" bg-dark-600 px-5 py-7 rounded-lg  shadow-sm">
            <div className="  w-full sm:w-5/12 md:w-2/12">
              <label htmlFor="video" className="  cursor-pointer">
                <label className=" text-2xl text-gray-200">ویدعو جلسه</label>
                <input
                  name="video"
                  type="file"
                  className=" hidden"
                  id="video"
                  onChange={handleFileChange}
                />
                <BiVideoPlus className=" text-8xl text-white" />
              </label>
              <ErrorMessage
                name="video"
                component="p"
                className="   text-red-600 text-sm rounded-lg my-2"
              />
            </div>

            <div className=" flex flex-col xl:flex-row items-center ">
              <div className=" w-full xl:w-8/12">
                <Input
                  
                  placeholder="عنوان جلسه را وارد کنید"
                  name="title"
                  className="  w-full py-4  rounded-md  px-3 bg-gray-600 text-gray-100 outline-none "
                />
                <ErrorMessage
                  name="title"
                  component="p"
                  className="   text-red-600 text-sm rounded-lg my-2"
                />
              </div>

              <div className=" w-full xl:w-4/12 mr-0 xl:mr-4 mt-4 xl:mt-0">
                <Selectbox
                  
                  inputClassName="bg-gray-100  outline-none selectbox  w-full flex justify-center  rounded-lg bg-gray-600 text-gray-100  py-4 pr-5 "
                  name="type"
                  options={[
                    { label: "لطفا نوع دوره را انتخاب کنید", value: "" },
                    { label: "نقدی", value: "cash" },
                    { label: " رایگان", value: "free" },
                  ]}
                />
                <ErrorMessage
                  name="type"
                  component="p"
                  className="   text-red-600 text-sm rounded-lg my-2"
                />
              </div>
            </div>
            <div className=" my-5">
              <select
              defaultValue={episode?.season._id}
                onChange={(e) => setFieldValue("season", e.target.value)}
                name=""
                id=""
                className=" text-white bg-gray-600  w-full px-4 py-2 rounded-lg"
              >
                <option value="">لطفا فصل مورد نطر جلسه رو وارد کنید!</option>

                {data?.map((season: Season) => (
                  <option value={season?._id} key={season?._id}>
                    {season?.title} - {season?.course?.title}
                  </option>
                ))}
              </select>
              <ErrorMessage
                name="season"
                component="p"
                className="   text-red-600 text-sm rounded-lg my-2"
              />
            </div>

            <div className=" mt-4 w-full">
              <Textarea
                name="body"
                placeholder="متن معروفی جلسه را وارد کنید"
                inputClassName="p-2   text-gray-100  py-3 px-4 rounded-lg  outline-none bg-gray-600  w-full "
              />

              <ErrorMessage
                name="body"
                component="p"
                className="   text-red-600 text-sm rounded-lg my-2"
              />
            </div>
            <div className=" w-full  mt-4">
              <Input
                placeholder="شماره جلسه را وارد کنید"
                name="number"
                type="number"
                className="  w-full py-4  rounded-md  px-3 bg-gray-600 text-gray-100 outline-none "
              />
              <ErrorMessage
                name="number"
                component="p"
                className="   text-red-600 text-sm rounded-lg my-2"
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
                  <span>{episode ? "ویرایش جلسه" : "ایجاد جلسه"}</span>
                )}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default InnerEpisodeForm;
