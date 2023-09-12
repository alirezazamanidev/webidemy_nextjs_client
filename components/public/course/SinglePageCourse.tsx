"use client";

import ImageComponent from "@/components/shared/ImageComponent";
import { Course } from "@/libs/model/course";
import separateWithComma from "@/libs/utils";
import Image from "next/image";
import Link from "next/link";

interface props {
  course: Course;
}
export default function SingleCourseHeaderPage({ course }: props) {
  return (
    <>
      <div className=" bg-dark-600   grid  grid-cols-1 lg:grid-cols-2 rounded-2xl select-none p-4 lg:p-7 ">
        <div className=" ">
          <ImageComponent
            url={course?.photos["720"]}
            alt={course?.title}
            width={700}
            height={500}
            className="aspect-video w-full object-cover rounded-lg transition-all duration-500 opacity-100"
          />
        </div>
        <div className=" flex flex-col justify-between gap-4 mr-0 lg:mr-6 mt-6 lg:mt-0 ">
          <div>
            <h1 className="font-black text-2xl md:text-3xl xl:text-4xl text-gray-300 transition-colors text-center lg:text-right">
              {course?.title}
            </h1>
            <div className="mt-4 flex justify-center lg:justify-start items-center">
              <Link
                className="inline-block"
                target='_blank'
                href={`/courses?sort=default&category=${course?.category?.title}`}
              >
                <span className="inline-block select-none bg-gray-900 rounded-lg p-2 text-xs text-white text-center transition-colors dark:bg-dark-700">
                  {course?.category?.title}
                </span>
              </Link>
            </div>
            <p className="text-sm md:text-base xl:text-lg text-gray-400 transition-colors mt-4 text-center lg:text-right">
              {course?.body}
            </p>
          </div>
          <div className=" mt-4 lg:mt-0 flex flex-col sm:flex-row  justify-between items-center">
            <button className=" mb-3 sm:mb-0  inline-block text-xl lg:text-2xl  bg-gradient-to-r from-blue-750 to-blue-250 px-8 py-4 rounded-lg text-gray-50">
              خرید دوره
            </button>
            <span className=" flex items-center">
              <span className=" text-white text-xl">
                {separateWithComma(course?.price)}
              </span>
              <span className="  text-base text-gray-300 mr-2">تومان</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
