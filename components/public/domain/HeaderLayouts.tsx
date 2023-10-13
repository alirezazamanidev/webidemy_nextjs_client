"use client";
import Image from "next/image";
import Link from "next/link";
import heroImagePath from "@/public/images/hero.png";
import unlimitImagePath from "@/public/svg/icons/unlimit.svg";
import teacherImagePath from "@/public/svg/icons/teach.svg";
import computerImagePath from "@/public/svg/icons/computer.svg";
export default function HeadersMainPage() {
  return (
    <>
      <header className=" container mx-auto px-5 pb-10 mt-10 md:mt-14 xl:mt-8 select-none  w-full">
        <div className="  w-full flex  flex-col-reverse  md:flex-row  justify-between md:items-center ">
          <div className="w-full md:w-6/12 flex flex-col items-center md:items-start lg:items-center justify-center   mt-4 ml-0 md:ml-8 lg:ml-0 md:mt-0 text-center md:text-right lg:text-center ">
            <div className=" w-full text-center md:text-right mr-0 ">
              <div className=" text-5xl  sm:text-6xl md:text-5xl  xl:text-6xl text-gray-350 space-y-3  font-extrabold">
                <h2>کافیه شروع کنی!</h2>
                <h2>مهارت کسب کن!</h2>
                <h2>تا به درامد برسی!</h2>
              </div>

              <p className=" text-gray-350 text-xl  lg:text-2xl   font-normal mt-10">
                سایت جامع آموزش برنامه نویسی و طراحی وب سایت
              </p>
            </div>
            <div className=" flex w-full   items-center justify-center md:justify-start space-x-4 space-x-reverse mt-10 lg:mt-16 mb-14">
              <button className=" bg-orange-450 font-bold rounded-[16px] backdrop-blur-lg text-[20px] sm:text-[26px] md:text-[28px] xl:text-[32px]  text-white px-10 py-4 flex justify-center items-center">
                شروع
              </button>
              <Link
                href={"/signup"}
                className=" bg-gray-950 w-1/2 sm:w-2/5 md:w-1/2  border border-gray-600 border-opacity-75 py-3 lg:py-4  rounded-lg hover:shadow-xl  hover:shadow-inherit  text-center  font-bold text-orange-450 text-[20px] sm:text-[26px] md:text-[28px] xl:text-[32px] backdrop-blur-lg"
              >
                ثبت نام
              </Link>
            </div>
          </div>
          <div className=" w-full md:w-6/12 ">
            <Image
              width={648}
              height={648}
              src={heroImagePath}
              className="  scale-90 sm:scale-110  md:scale-125 lg:scale-105 xl:scale-90  w-full"
              alt="hero"
            />
          </div>
        </div>
      </header>

      <div className=" select-none w-full grid grid-cols-1 sm:grid-cols-2   md:flex flex-col md:flex-row-reverse justify-center md:justify-around px-20 items-center  space-y-6 md:space-y-0 space-x-0 md:space-x-5">
        <div className=" relative flex flex-col items-center justify-center ">
          <div className=" bg-gray-950  flex  justify-center items-center backdrop-blur-lg border   border-orange-800 shadow-orange-450 shadow-lg rounded-[70px]  w-52 py-14 mr-5 ">
            <Image
              src={unlimitImagePath}
              width={150}
              height={74}
              alt="unlimit-icon"
              className=" "
            />
          </div>
          <div className="  w-full text-center mt-5">
            <span className=" text-gray-75  text-[22px] font-bold">
              دسترسی نامحدود
            </span>
            <p className=" text-gray-275 text-[18px] relative md:absolute">
              یکبار بخر، همشه دسترسی داشته باش!
            </p>
          </div>
        </div>
        <div className=" relative flex flex-col  items-center justify-center">
          <div className=" bg-gray-950 backdrop-blur-lg border flex justify-center  items-center border-orange-800 shadow-orange-450 shadow-lg  rounded-[70px] w-52 py-14">
            <Image
              src={teacherImagePath}
              width={150}
              height={74}
              alt="unlimit-icon"
              className="  scale-150"
            />
          </div>
          <div className="  w-full text-center mt-5">
            <span className=" text-gray-75  text-[22px] font-bold">
              مدرسین کار بلد
            </span>
            <p className=" text-gray-275 text-[18px] relative md:absolute">
              هر تخصص رو از متخصصش یاد بگیر
            </p>
          </div>
        </div>
        <div className=" relative flex flex-col items-center justify-center">
          <div className=" bg-gray-950 backdrop-blur-lg border  border-orange-800 shadow-orange-450 shadow-lg  rounded-[70px] py-14 w-52  flex justify-center items-center">
            <Image
              src={computerImagePath}
              width={150}
              height={74}
              alt="unlimit-icon"
              className=" scale-150"
            />
          </div>
          <div className="  w-full text-center mt-5  ">
            <span className=" text-gray-75  text-[22px] font-bold">
              همه جا یاد بگی
            </span>
            <p className=" text-gray-275 text-[18px] md:max-w-[305px]  relative md:absolute ">
              فرقی نداره با چه دستگاهی هستی یا کجا هستی وقتی با ما باشی یاد
              میگیری
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
