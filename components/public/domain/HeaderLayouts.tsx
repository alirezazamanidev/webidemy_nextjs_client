import Image from "next/image";
import { FaUserGraduate, FaUsers } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import Link from "next/link";
import headerImageLeft from "@/public/images/header/darkTopSectionLeft.webp";
import JsPhotoPath from "@/public/images/photo/LJj1XTD4xWmeyAWSrTo8NDAIm3fIcoQvFwCCDZGe.webp";
import headerImageRight from "@/public/images/header/darkTopSectionRight.webp";
import webphotoPath from "@/public/images/photo/web.webp";
import laravelPhotoPath from "@/public/images/photo/laravel.webp";
import phpPhotoPath from "@/public/images/photo/php.webp";
import reactPhotoPath from "@/public/images/photo/react.webp";
import nodePhotoPath from "@/public/images/photo/node.webp";
import vuePhotoPath from "@/public/images/photo/vue.webp";
import wordPressPhotoPath from "@/public/images/photo/wordpress.webp";
import fluterPhotoPathj from "@/public/images/photo/fluter.webp";
export default function HeadersMainPage() {
  return (
    <>
      <header className=" container mx-auto px-5 mt-20 xl:mt-24 select-none  w-full">
        <div className="  w-full flex  flex-col-reverse  md:flex-row  justify-between items-center ">
          <div className=" w-3/12 hidden lg:block">
            <Image
              width={700 }
              height={400}
              src={headerImageRight}
              className=" object-cover "
              alt="computer"
            />
          </div>
          <div className=" flex flex-col items-center md:items-start lg:items-center justify-center w-full  md:w-6/12  mt-6 ml-0 md:ml-8 lg:ml-0 md:mt-0 text-center md:text-right lg:text-center ">
            <div className=" flex  flex-col items-center md:items-start  justify-center lg:items-center">
              <h2 className=" text-gray-200 text-4xl  lg:text-5xl font-extrabold max-w-md lg:max-w-xl ">
                صفر تا صد برنامه نویسی با وبیدمی
              </h2>
              <h5 className=" text-gray-400  text-2xl sm:text-3xl font-semibold mt-5 ">
                خیلی راحت یاد بگیر :))
              </h5>
            </div>
            <div className=" flex w-full lg:w-5/6 justify-between items-center space-x-4 space-x-reverse mt-10 lg:mt-24 mb-14">
              <button className=" bg-gradient-to-r from-blue-750 to-blue-250 w-1/2  py-3 lg:py-4 rounded-lg  text-gray-50 md:text-lg lg:text-2xl font-bold">
                چی یاد بگیرم ؟
              </button>
              <Link href='login' className=" bg-gradient-to-r from-orange-750 to-orange-250 w-1/2 py-3 lg:py-4  rounded-lg hover:shadow-xl hover:shadow-inherit   text-gray-50 md:text-lg lg:text-2xl font-bold">
                ثبت نام
              </Link>
            </div>
          </div>
          <div className=" w-full md:w-6/12 lg:w-3/12 flex justify-center">
            <Image
              width={700}
              height={400}
              src={headerImageLeft}
              className=" w-full object-center object-cover "
              alt="computer"
            />
          </div>
        </div>
      </header>

      <nav className=" bg-hero-photo bg-bottom  mt-24 w-full select-none   ">
        <div className=" container mx-auto  flex  justify-between items-center  space-x-5   space-x-reverse   ">
          <div className="   group cursor-pointer flex flex-col  items-center space-y-14 ml-4 lg:ml-0 ">
            <div className=" filter  rounded-md   transition duration-200 transform  group-hover:-translate-y-5">
              <Image
                src={JsPhotoPath}
                alt="js"
              
                className=" w-14 "
              />
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

        <Link href="#courses" className=" w-full flex justify-center mt-20">
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
        </Link>
      </nav>
    </>
  );
}
