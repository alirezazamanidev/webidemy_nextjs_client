"use client";

import Image from "next/image";
import titleCirclePink from '@/public/images/photo/titleCirclePink.webp';
import CardBlog from "../blog/CardBlogLayout";
import { Blog } from "@/libs/model/blog";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface props {
  blogs:Blog[]

}
export default function ShowNewBlogsLayout({blogs }: props) {
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
        <div className=" flex items-center mt-36 mb-6">
          <Image
            src={titleCirclePink}
            width={100}
            height={100}
            alt="titleCirclePink"
          />
          <h2 className="text-2xl text-gray-200 sm:text-2xl lg:text-3xl font-black">
            جدید ترین مقالات
          </h2>
        </div>
     
        <Slider {...settings}>
         {
          blogs.map(blog=>(
            <CardBlog key={blog?._id} blog={blog}/>
          ))
         }  
         
        </Slider>

      </div>
    </>
  );
}
