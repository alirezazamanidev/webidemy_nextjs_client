"use client";

import CardCourse from "../course/CardCourseLayout";
import Image from "next/image";
import titleCirclePink from '@/public/images/photo/titleCirclePink.webp';
interface props {
  
}
export default function ShowNewBlogsLayout({  }: props) {

  return (
    <>

      <div id="showNewCourses" className=" container  mx-auto select-none">
        <div className=" flex items-center mt-36 mb-10">
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
       
      </div>
    </>
  );
}
