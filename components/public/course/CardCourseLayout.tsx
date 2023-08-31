import Image from "next/image";
import courseImage from "@/public/images/nodeJs-min-247x139.jpg";
import separateWithComma from "@/libs/utility/tools";
import { CiClock1 } from "react-icons/ci";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Course } from "@/libs/model/course";
import Link from "next/link";
import image from "@/public/images/1692193971111.webp";
import mePhoto from "@/public/images/me.jpeg";
interface props {
  course:Course
}
export default function CardCourse({course}:props) {
  return (
    <>
      <div className=" w-full h-full  pt-14 pb-5 lg:pb-7  ">
        <div className=" transition-all   rounded-xl h-full  flex flex-col relative group bg-blue-700">
          <div
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-1000"
            style={{
              background:
                "linear-gradient(to left top, rgb(229, 163, 62), rgb(253, 93, 1))",
            }}
          ></div>
          <Link
            href={`/courses/${course?.slug}`}
            className=" w-full h-full  px-4 lg:px-5 relative flex flex-col"
          >
            <div className=" w-full flex relative -mt-14">
              <Image
                src={`http://localhost:8000${course?.images["720"]}`}
                width={650}
                height={450}
                className=" aspect-video w-full object-cover rounded-xl transition-all duration-500 "
                alt="imgr"
              />
            </div>
            <h3 className="text-2xl text-right lg:text-2xl font-bold mt-5 text-white transition-colors w-full">
              {course?.title}
            </h3>
            <div className=" flex items-center justify-end   gap-2 text-base text-white transition-colors mt-5 w-full">
              <div className=" flex flex-col justify-center gap-1">
                <span className=" text-lg md:text-sm text-end">: مدرس</span>
                <h4 className=" text-sm lg:text-lg">علیرضا زمانی</h4>
              </div>
              <Image
                src={mePhoto}
                alt="me"
                width={50}
                height={50}
                className=" aspect-square object-cover rounded-full transition-all duration-500 opacity-100 w-10 h-10 border-2 border-solid border-white"
              />
            </div>
            <div className="flex flex-col items-end  gap-1 mt-4 mb-6 lg:mb-8">
              <span className="text-white text-right text-lg lg:text-base">
             : قیمت دوره
              </span>
              <div className="flex gap-5">
                <span className="flex flex-row-reverse justify-center items-center gap-2">
                  <span className="text-base lg:text-lg font-bold text-white transition-colors">
                    {separateWithComma(course?.price)}
                  </span>
                  <span className="text-white transition-colors text-sm font-bold">
                    تومان
                  </span>
                </span>
              </div>
            </div>
            <div className="mt-auto -mb-5 lg:-mb-7 flex py-3 lg:py-4 px-8 lg:px-10 bg-gray-900 rounded-lg text-white text-sm lg:text-base w-fit mx-auto shadow-cnShadow500">
              <p className="text-center">توقف فروش</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
