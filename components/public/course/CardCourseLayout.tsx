import Image from "next/image";
import separateWithComma, { TypeConditioncourseToFarsi } from "@/libs/utils";

import { Course } from "@/libs/model/course";
import Link from "next/link";

import mePhoto from "@/public/images/me.jpeg";
import ImageComponent from "@/components/shared/ImageComponent";
interface props {
  course: Course;
}
export default function CardCourse({ course }: props) {
  return (
    <>
      <div className=" w-full h-full pt-14 pb-5 lg:pb-7  select-none  ">
        <div
          className={` transition-all   bg-gray-800   rounded-xl h-full  flex flex-col relative group`}
          style={{
            background: `linear-gradient(to left top, ${course?.gradientColorCard?.fromColor}, ${course?.gradientColorCard?.toColor}`,
          }}
        >
          <div
            className="absolute inset-0 rounded-xl  opacity-0 group-hover:opacity-100 transition-all duration-1000"
            style={{
              background: `linear-gradient(to left top, ${course?.gradientColorCard?.toColor}, ${course?.gradientColorCard?.fromColor}`,
            }}
          ></div>
          <Link
            href={`courses/${course?.slug}`}
            className=" w-full h-full  px-4 lg:px-5 relative flex flex-col"
          >
            <div className=" w-full flex relative -mt-14">
              <div className=" relative w-full">
                <Image
                  src={`https://api.webidemyyy.ir${course?.photos["720"]}`}
                  width={640}
                  height={450}
                  className=" aspect-video flex w-full justify-center object-cover rounded-xl transition-all duration-500  "
                  alt={course?.title}
                />
              </div>
            </div>
            <h3 className="text-2xl text-right lg:text-2xl font-bold mt-5 text-white transition-colors w-full">
              {course?.title}
            </h3>
            <div className=" flex items-center    gap-2 text-base text-white transition-colors mt-5 w-full">
              <Image
                src={mePhoto}
                alt="me"
                width={50}
                height={50}
                className=" aspect-square object-cover rounded-full transition-all duration-500 opacity-100 w-10 h-10 border-2 border-solid border-white"
              />
              <div className=" flex flex-col  gap-1">
                <span className=" text-lg md:text-sm "> مدرس : </span>
                <h4 className=" text-sm lg:text-lg">
                  {course?.teacher?.fullname}
                </h4>
              </div>
            </div>
            <div className="flex flex-col   gap-1 mt-4 mb-6 lg:mb-8">
              <span className="text-white text-right text-lg lg:text-base">
                قیمت دوره :
              </span>
              <div className="flex gap-5">
                <span className="flex  justify-center items-center gap-2">
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
              <p className="text-center">
                {TypeConditioncourseToFarsi(course?.condition)}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
