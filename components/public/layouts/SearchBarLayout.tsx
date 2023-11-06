"use client";
import { Course } from "@/libs/model/course";
import { GetAllCourses } from "@/libs/services/home/course";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Loading from "react-loading";
import CardCourseSearchLayout from "../course/CardCourseForSearchLayout";

export default function SearchBarLayout() {
  const [searchText, setSearchText] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [courseslist, setCourseList] = useState<Course[]>([]);


  useEffect(() => {
    searchCoursebySearch();
  }, [searchText])


  const searchCoursebySearch = async () => {
    setLoading(true)
    let courseData = await GetAllCourses({ search: searchText });
    setLoading(false);
    setCourseList(courseData.data);
  }

  return (
    <>

      <div className=" w-full relative">
        <div className=" w-full  relative">
          <input
            onChange={(e) => setSearchText(e.target?.value)}
            className="w-full caret-gray-300 outline-none border-2 border-solid border-transparent transition-all focus:border-gray-700 placeholder:text-gray-100 text-gray-200 placeholder:select-none text-sm md:text-base py-3 md:py-3.5 rounded-xl placeholder:text-right pr-12 md:pr-16 pl-3 md:pl-3.5 bg-dark-600"
            placeholder="جست و جو در میان دوره ها..."
            type="text"
          />
          <span className="flex justify-center items-center absolute top-1/2 -translate-y-1/2 border-solid transition-all border-gray-300 pl-2 md:pl-2.5 right-3 md:right-3.5 border-l-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="transition-all w-5 h-5 md:w-6 md:h-6 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              ></path>
            </svg>
          </span>
        </div>
        <div
          className={` ${searchText.length > 0 ? "block" : "hidden"
            } absolute w-full z-50 mt-2 rounded-xl shadow-lg bg-dark-600 text-3xl text-gray-100 p-4 lg:p-7`}
        >
          {false ? (
            <div className=" w-full h-full flex justify-center items-center">
              <Loading type="bubbles" color="#fff" />
            </div>
          ) : courseslist.length === 0 ? (
            <div className=" text-gray-300 flex flex-col w-full h-full items-center justify-center p-4 gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 md:w-8 md:h-8 transition-colors"
                fill="currentColor"
              >
                <path d="M2.978 8.358l-2.978-2.618 8.707-4.74 3.341 2.345 3.21-2.345 8.742 4.639-3.014 2.68.014.008 3 4.115-3 1.634v4.122l-9 4.802-9-4.802v-4.115l1 .544v2.971l7.501 4.002v-7.889l-2.501 3.634-9-4.893 2.978-4.094zm9.523 5.366v7.875l7.499-4.001v-2.977l-5 2.724-2.499-3.621zm-11.022-1.606l7.208 3.918 1.847-2.684-7.231-3.742-1.824 2.508zm11.989 1.247l1.844 2.671 7.208-3.927-1.822-2.498-7.23 3.754zm-9.477-4.525l8.01-4.43 7.999 4.437-7.971 4.153-8.038-4.16zm-2.256-2.906l2.106 1.851 7.16-3.953-2.361-1.657-6.905 3.759zm11.273-2.052l7.076 3.901 2.176-1.935-6.918-3.671-2.334 1.705z"></path>{" "}
              </svg>
              <h2 className="  text-lg text-gray-200">
                نتیجه ای یافت نشد!
              </h2>
            </div>
          ) : (
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5">
              {courseslist.map((course) =>
                <CardCourseSearchLayout
                  key={course?._id}
                  course={course}
                />

              )}
            </div>
          )}
        </div>
      </div>

    </>
  );
};