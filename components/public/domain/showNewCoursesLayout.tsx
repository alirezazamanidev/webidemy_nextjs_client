"use client";

import CardCourse from "../course/CardCourseLayout";
import Image from "next/image";
import titleCircleRed from "@/public/images/titleCircleRed.png";
import { Course } from "@/libs/model/course";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface props {
  courses: Course[];
}
export default function ShowNewCourseLayout({ courses }: props) {
  const settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow:4,
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

      <div id="showNewCourses" className=" container  mx-auto select-none">
        <div className=" flex items-center mt-36 mb-10">
          <Image
            src={titleCircleRed}
            width={100}
            height={100}
            alt="titleCircleRed"
          />
          <h2 className="text-2xl text-gray-200 sm:text-2xl lg:text-4xl font-black">
            جدید ترین دوره های وبیدمی
          </h2>
        </div>
        <Slider {...settings}>
         {
          courses.map(course=>(
            <CardCourse key={course?._id} course={course}/>
          ))
         }  
         
        </Slider>
      </div>
    </>
  );
}
