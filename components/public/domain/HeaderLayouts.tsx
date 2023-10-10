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
            <p className=" text-gray-275 text-[18px] md:max-w-[305px] relative md:absolute ">
              فرقی نداره با چه دستگاهی هستی یا کجا هستی وقتی با ما باشی یاد
              میگیری
            </p>
          </div>
        </div>
      </div>
      {/* <nav className=" bg-hero-photo bg-bottom  mt-24 w-full select-none px-5   ">
        <div className=" container mx-auto  flex  justify-between items-center  space-x-5   space-x-reverse   ">
          <div className="   group cursor-pointer flex flex-col  items-center space-y-14 ">
            <div className=" filter  rounded-md   transition duration-200 transform  group-hover:-translate-y-5">
              <Image src={JsPhotoPath} alt="js" className=" w-14 " />
            </div>
            <span className=" absolute hidden md:block text-gray-100  text-2xl  text-center  opacity-0 group-hover:opacity-100 duration-200 ">
              آموزش جاوااسکریپت
            </span>
          </div>
          <div className=" group cursor-pointer flex flex-col  items-center space-y-14 ">
            <div className=" w-full relative  rounded-md    flex justify-center transition duration-200 transform  group-hover:-translate-y-5">
              <Image
                src={webphotoPath}
                alt="js"
                width={60}
                height={60}
                className=" object-cover"
              />
            </div>
            <span className=" absolute hidden md:block   text-gray-100  text-2xl  text-center  opacity-0 group-hover:opacity-100 duration-200 ">
              طراحی وب
            </span>
          </div>
          <div className=" group cursor-pointer flex flex-col  items-center space-y-14 ">
            <div className="   rounded-md  flex justify-center transition duration-200 transform  group-hover:-translate-y-5">
              <Image
                src={laravelPhotoPath}
                alt="js"
                width={60}
                height={60}
                className=" object-cover"
              />
            </div>
            <span className=" absolute hidden md:block   text-gray-100  text-2xl  text-center  opacity-0 group-hover:opacity-100 duration-200 ">
              آموزش لاراول
            </span>
          </div>

          <div className=" group cursor-pointer flex flex-col  items-center space-y-14 ">
            <div className=" w-full  rounded-md  flex justify-center transition duration-200 transform  group-hover:-translate-y-5">
              <Image
                src={reactPhotoPath}
                alt="js"
                width={60}
                height={60}
                className=" object-cover"
              />
            </div>
            <span className=" absolute hidden md:block   text-gray-100  text-2xl  text-center  opacity-0 group-hover:opacity-100 duration-200 ">
              آموزش React
            </span>
          </div>
          <div className=" group cursor-pointer flex flex-col  items-center space-y-14 ">
            <div className=" w-full  rounded-md flex justify-center transition duration-200 transform  group-hover:-translate-y-5">
              <Image
                src={nodePhotoPath}
                alt="js"
                width={60}
                height={60}
                className=" object-cover"
              />
            </div>
            <span className=" absolute hidden md:block   text-gray-100  text-2xl  text-center  opacity-0 group-hover:opacity-100 duration-200 ">
              آموزش Nodejs
            </span>
          </div>
          <div className=" group cursor-pointer flex flex-col  items-center space-y-14 ">
            <div className=" w-full  rounded-md  flex justify-center transition duration-200 transform  group-hover:-translate-y-5">
              <Image
                src={vuePhotoPath}
                alt="js"
                width={60}
                height={60}
                className=" object-cover"
              />
            </div>
            <span className=" absolute hidden md:block   text-gray-100  text-2xl  text-center  opacity-0 group-hover:opacity-100 duration-200 ">
              آموزش Vue
            </span>
          </div>
          <div className=" group cursor-pointer flex flex-col  items-center space-y-14">
            <div className=" w-full  rounded-md   flex justify-center transition duration-200 transform  group-hover:-translate-y-5">
              <Image
                src={wordPressPhotoPath}
                alt="js"
                width={60}
                height={60}
                className=" object-cover"
              />
            </div>
            <span className=" absolute hidden md:block   text-gray-100  text-2xl   opacity-0 group-hover:opacity-100 duration-200 ">
              آموزش وردپرس
            </span>
          </div>
          <div className=" group cursor-pointer flex flex-col  items-center space-y-14">
            <div className=" w-full  rounded-md  flex justify-center transition duration-200 transform  group-hover:-translate-y-5">
              <Image
                src={fluterPhotoPathj}
                alt="js"
                width={60}
                height={60}
                className=" object-cover"
              />
            </div>
            <span className=" absolute hidden md:block   text-gray-100  text-2xl  text-center  opacity-0 group-hover:opacity-100 duration-200 ">
              آموزش فلاتر
            </span>
          </div>
        </div>

        <LinkScroll
          to="showNewCourses"
          activeClass="active"
          smooth={true}
          offset={-120}
          duration={1000}
          spy={true}
          href="#courses"
          className=" w-full flex justify-center mt-20"
        >
          <svg
            viewBox="0 0 30 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 md:w-7 animate-bounce inline-block dark:hidden"
          >
            <path
              d="M28.9792 1.10416C28.7855 0.908894 28.5551 0.753906 28.3012 0.648137C28.0473 0.542369 27.775 0.487915 27.5 0.487915C27.225 0.487915 26.9527 0.542369 26.6988 0.648137C26.4449 0.753906 26.2145 0.908894 26.0208 1.10416L16.4792 10.6458C16.2855 10.8411 16.0551 10.9961 15.8012 11.1019C15.5473 11.2076 15.275 11.2621 15 11.2621C14.725 11.2621 14.4527 11.2076 14.1988 11.1019C13.9449 10.9961 13.7145 10.8411 13.5208 10.6458L3.97919 1.10416C3.78551 0.908894 3.5551 0.753906 3.30122 0.648137C3.04735 0.542369 2.77505 0.487915 2.50002 0.487915C2.225 0.487915 1.95269 0.542369 1.69882 0.648137C1.44495 0.753906 1.21453 0.908894 1.02086 1.10416C0.632834 1.4945 0.415039 2.02253 0.415039 2.57291C0.415039 3.1233 0.632834 3.65132 1.02086 4.04166L10.5833 13.6042C11.7552 14.7746 13.3438 15.432 15 15.432C16.6563 15.432 18.2448 14.7746 19.4167 13.6042L28.9792 4.04166C29.3672 3.65132 29.585 3.1233 29.585 2.57291C29.585 2.02253 29.3672 1.4945 28.9792 1.10416Z"
              fill="#EA6727"
            ></path>
            <path
              d="M28.9792 19.1042C28.7855 18.9089 28.5551 18.7539 28.3012 18.6481C28.0473 18.5424 27.775 18.4879 27.5 18.4879C27.225 18.4879 26.9527 18.5424 26.6988 18.6481C26.4449 18.7539 26.2145 18.9089 26.0208 19.1042L16.4792 28.6458C16.2855 28.8411 16.0551 28.9961 15.8012 29.1019C15.5473 29.2076 15.275 29.2621 15 29.2621C14.725 29.2621 14.4527 29.2076 14.1988 29.1019C13.9449 28.9961 13.7145 28.8411 13.5208 28.6458L3.97919 19.1042C3.78551 18.9089 3.5551 18.7539 3.30122 18.6481C3.04735 18.5424 2.77505 18.4879 2.50002 18.4879C2.225 18.4879 1.95269 18.5424 1.69882 18.6481C1.44495 18.7539 1.21453 18.9089 1.02086 19.1042C0.632834 19.4945 0.415039 20.0225 0.415039 20.5729C0.415039 21.1233 0.632834 21.6513 1.02086 22.0417L10.5833 31.6042C11.7552 32.7746 13.3438 33.432 15 33.432C16.6563 33.432 18.2448 32.7746 19.4167 31.6042L28.9792 22.0417C29.3672 21.6513 29.585 21.1233 29.585 20.5729C29.585 20.0225 29.3672 19.4945 28.9792 19.1042Z"
              fill="#D41AAB"
            ></path>
            <path
              d="M28.9792 37.1042C28.7855 36.9089 28.5551 36.7539 28.3012 36.6481C28.0473 36.5424 27.775 36.4879 27.5 36.4879C27.225 36.4879 26.9527 36.5424 26.6988 36.6481C26.4449 36.7539 26.2145 36.9089 26.0208 37.1042L16.4792 46.6458C16.2855 46.8411 16.0551 46.9961 15.8012 47.1019C15.5473 47.2076 15.275 47.2621 15 47.2621C14.725 47.2621 14.4527 47.2076 14.1988 47.1019C13.9449 46.9961 13.7145 46.8411 13.5208 46.6458L3.97919 37.1042C3.78551 36.9089 3.5551 36.7539 3.30122 36.6481C3.04735 36.5424 2.77505 36.4879 2.50002 36.4879C2.225 36.4879 1.95269 36.5424 1.69882 36.6481C1.44495 36.7539 1.21453 36.9089 1.02086 37.1042C0.632834 37.4945 0.415039 38.0225 0.415039 38.5729C0.415039 39.1233 0.632834 39.6513 1.02086 40.0417L10.5833 49.6042C11.7552 50.7746 13.3438 51.432 15 51.432C16.6563 51.432 18.2448 50.7746 19.4167 49.6042L28.9792 40.0417C29.3672 39.6513 29.585 39.1233 29.585 38.5729C29.585 38.0225 29.3672 37.4945 28.9792 37.1042Z"
              fill="#EA6727"
            ></path>
          </svg>
          <svg
            viewBox="0 0 30 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 md:w-7 animate-bounce hidden dark:inline-block "
          >
            <path
              d="M28.9792 1.10416C28.7855 0.908894 28.5551 0.753906 28.3012 0.648137C28.0473 0.542369 27.775 0.487915 27.5 0.487915C27.225 0.487915 26.9527 0.542369 26.6988 0.648137C26.4449 0.753906 26.2145 0.908894 26.0208 1.10416L16.4792 10.6458C16.2855 10.8411 16.0551 10.9961 15.8012 11.1019C15.5473 11.2076 15.275 11.2621 15 11.2621C14.725 11.2621 14.4527 11.2076 14.1988 11.1019C13.9449 10.9961 13.7145 10.8411 13.5208 10.6458L3.97919 1.10416C3.78551 0.908894 3.5551 0.753906 3.30122 0.648137C3.04735 0.542369 2.77505 0.487915 2.50002 0.487915C2.225 0.487915 1.95269 0.542369 1.69882 0.648137C1.44495 0.753906 1.21453 0.908894 1.02086 1.10416C0.632834 1.4945 0.415039 2.02253 0.415039 2.57291C0.415039 3.1233 0.632834 3.65132 1.02086 4.04166L10.5833 13.6042C11.7552 14.7746 13.3438 15.432 15 15.432C16.6563 15.432 18.2448 14.7746 19.4167 13.6042L28.9792 4.04166C29.3672 3.65132 29.585 3.1233 29.585 2.57291C29.585 2.02253 29.3672 1.4945 28.9792 1.10416Z"
              fill="#39CEFD"
            ></path>
            <path
              d="M28.9792 19.1042C28.7855 18.9089 28.5551 18.7539 28.3012 18.6481C28.0473 18.5424 27.775 18.4879 27.5 18.4879C27.225 18.4879 26.9527 18.5424 26.6988 18.6481C26.4449 18.7539 26.2145 18.9089 26.0208 19.1042L16.4792 28.6458C16.2855 28.8411 16.0551 28.9961 15.8012 29.1019C15.5473 29.2076 15.275 29.2621 15 29.2621C14.725 29.2621 14.4527 29.2076 14.1988 29.1019C13.9449 28.9961 13.7145 28.8411 13.5208 28.6458L3.97919 19.1042C3.78551 18.9089 3.5551 18.7539 3.30122 18.6481C3.04735 18.5424 2.77505 18.4879 2.50002 18.4879C2.225 18.4879 1.95269 18.5424 1.69882 18.6481C1.44495 18.7539 1.21453 18.9089 1.02086 19.1042C0.632834 19.4945 0.415039 20.0225 0.415039 20.5729C0.415039 21.1233 0.632834 21.6513 1.02086 22.0417L10.5833 31.6042C11.7552 32.7746 13.3438 33.432 15 33.432C16.6563 33.432 18.2448 32.7746 19.4167 31.6042L28.9792 22.0417C29.3672 21.6513 29.585 21.1233 29.585 20.5729C29.585 20.0225 29.3672 19.4945 28.9792 19.1042Z"
              fill="#0066FF"
            ></path>
            <path
              d="M28.9792 37.1042C28.7855 36.9089 28.5551 36.7539 28.3012 36.6481C28.0473 36.5424 27.775 36.4879 27.5 36.4879C27.225 36.4879 26.9527 36.5424 26.6988 36.6481C26.4449 36.7539 26.2145 36.9089 26.0208 37.1042L16.4792 46.6458C16.2855 46.8411 16.0551 46.9961 15.8012 47.1019C15.5473 47.2076 15.275 47.2621 15 47.2621C14.725 47.2621 14.4527 47.2076 14.1988 47.1019C13.9449 46.9961 13.7145 46.8411 13.5208 46.6458L3.97919 37.1042C3.78551 36.9089 3.5551 36.7539 3.30122 36.6481C3.04735 36.5424 2.77505 36.4879 2.50002 36.4879C2.225 36.4879 1.95269 36.5424 1.69882 36.6481C1.44495 36.7539 1.21453 36.9089 1.02086 37.1042C0.632834 37.4945 0.415039 38.0225 0.415039 38.5729C0.415039 39.1233 0.632834 39.6513 1.02086 40.0417L10.5833 49.6042C11.7552 50.7746 13.3438 51.432 15 51.432C16.6563 51.432 18.2448 50.7746 19.4167 49.6042L28.9792 40.0417C29.3672 39.6513 29.585 39.1233 29.585 38.5729C29.585 38.0225 29.3672 37.4945 28.9792 37.1042Z"
              fill="#39CEFD"
            ></path>
          </svg>
        </LinkScroll>
      </nav> */}
    </>
  );
}
