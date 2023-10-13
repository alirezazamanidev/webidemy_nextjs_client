"use client";

import CardCourse from "../course/CardCourseLayout";
import { Course } from "@/libs/model/course";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

interface props {
  courses: Course[];
}
export default function ShowNewCourseLayout({ courses }: props) {
  const settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    arrows: false,
    draggable: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1449, // وقتی عرض صفحه کمتر از 1024px می‌شود
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 974, // وقتی عرض صفحه کمتر از 768px می‌شود
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650, // وقتی عرض صفحه کمتر از 768px می‌شود
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div id="showNewCourses" className=" container   mx-auto select-none h-screen">
        <div className=" flex items-center  justify-between  mt-[14rem] mb-10 mx-5">
  
          <h2 className="text-2xl  text-gray-275 sm:text-3xl lg:text-4xl font-bold">
       جدید ترین دوره ها
          </h2>
          <Link href='/courses' className=" text-gray-275 text-xl md:text-2xl lg:text-3xl font-normal">دیدن همه</Link>
        </div>
        <Slider {...settings}>
          <CardCourse />
          <CardCourse />
          <CardCourse />
          <CardCourse />
          <CardCourse />
          <CardCourse />
          <CardCourse />
        </Slider>
      </div>
    </>
  );
}
