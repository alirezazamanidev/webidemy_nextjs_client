"use client";
import Image from "next/image";
import separateWithComma, { TypeConditioncourseToFarsi } from "@/libs/utils";
import PlayImagePath from '@/public/svg/icons/play.svg'
import clockImagePath from '@/public/svg/icons/clock.svg';
import headImagePath from '@/public/svg/icons/head.svg'
import PythonImagePath from "@/public/images/python.png";
import Link from "next/link";
import plusImagePath from '@/public/svg/icons/plus.svg'
export default function CardCourse() {
  return (
    <>
      <div className="  relative  bg-gray-850 backdrop-blur-lg rounded-[10px] border  border-gray-500 border-opacity-80">
        <div className="  bg-gray-900  border border-gray-675 mt-[35px]  mx-10 sm:mx-20   border-opacity-80  py-3 rounded-lg flex  justify-center items-center">
          <Image
            src={PythonImagePath}
            width={200}
            height={150}
            alt="image"
            className=""
          />
        </div>
        <div className=" mt-4 mx-8">
          <h2 className=" text-2xl text-gray-275">
            آموزش مقدماتی تا پیشرفته پایتون
          </h2>

          <div className=" mt-3 flex  items-center justify-between">
          <div className=" bg-gray-950 p-3  text-gray-300 flex flex-col items-center rounded-lg">
              <Image width={33} height={33} src={clockImagePath} alt="icon" />
              <span className=" text-lg">40</span>
              <span className="text-lg">ساعت</span>
            </div>
          <div className=" bg-gray-950 p-3  text-gray-300 flex flex-col items-center rounded-lg">
              <Image width={48} height={28} src={headImagePath} alt="icon" />
              <span className=" text-lg">105</span>
              <span className="text-lg">نفر</span>
            </div>
            <div className=" bg-gray-950 text-lg p-3 text-gray-300 flex flex-col items-center justify-center rounded-lg">
              <span className=" ">2,000,000</span>
              <span>تومان</span>
            </div>
        
          </div>
     
 

        </div>

        <div className="  flex items-center  mx-8  justify-between   my-5 ">
            <Link href={'#'} className=" text-[20px]  bg-gray-950 px-4 py-3 flex   items-center  gap-2">
              <span className=" text-orange-450">ثبت نام</span>
              <Image src={plusImagePath} alt="icon" width={18} height={21}/>
            </Link>
            <Link href={'#'} className=" text-[20px] bg-gray-950 px-4 py-3 text-gray-350 flex  gap-2 items-center ">
              <span>مشاهده دوره</span>
              <Image src={PlayImagePath} alt="icon" width={18} height={21}/>
            </Link>

          </div>
      </div>
    </>
  );
}
