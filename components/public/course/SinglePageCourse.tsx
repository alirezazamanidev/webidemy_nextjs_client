"use client";
import useAuth from "@/libs/hooks/useAuth";
import { Course } from "@/libs/model/course";
import separateWithComma from "@/libs/utility/tools";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
interface props {
  course: Course;
}
export default function SingleCourseHeaderPage({ course }: props) {
  const { user, loading: loadingUser } = useAuth();

  const [doneStatusOrder, setDoneStatusOrder] = useState<boolean>(false);

  
  // const hasorder = orderList?.filter(
  //   (order) => order.product._id === course._id
  // );

  // const ShowcheckLearning = checkLearning(user, course);
  // const handlerAddOrder = async (e: any) => {
  //   e.preventDefault();
  //   await StoreCart(course._id);
  //   toast.success("محصول شمابه سبد خرید اضافه شد");
  //   setDoneStatusOrder(true);
  //   await mutate();
  // };

  return (
    <>
      <div className=" bg-dark-600   grid  grid-cols-1 lg:grid-cols-2 rounded-2xl select-none p-4 lg:p-7 ">
        <div className=" ">
          <Image
            src={`http://localhost:8000${course?.photos['720']}`}
            alt={course?.title}
            width={700}
            height={500}
            className="aspect-video w-full object-cover rounded-lg transition-all duration-500 opacity-100"
          />
        </div>
        <div className=" flex flex-col justify-between gap-4 mr-0 lg:mr-6 mt-6 lg:mt-0 ">
          <div>
            <h1 className="font-black text-2xl md:text-3xl xl:text-4xl text-gray-300 transition-colors text-center lg:text-right">
              {course?.title}
            </h1>
            <div className="mt-4 flex justify-center lg:justify-start items-center">
              <Link
                className="inline-block"
                
                href="#"
              >
                <span className="inline-block select-none bg-gray-900 rounded-lg p-2 text-xs text-white text-center transition-colors dark:bg-dark-700">
                  بک اند
                </span>
              </Link>
            </div>
            <p className="text-sm md:text-base xl:text-lg text-gray-400 transition-colors mt-4 text-center lg:text-right">
              {course?.body}
            </p>
          </div>
          <div className=" mt-4 lg:mt-0 flex flex-col sm:flex-row  justify-between items-center">
            <button className=" mb-3 sm:mb-0  inline-block text-xl lg:text-2xl  bg-gradient-to-r from-blue-750 to-blue-250 px-8 py-4 rounded-lg text-gray-50">خرید دوره</button>
            <span className=" flex items-center">
              <span className=" text-white text-xl">{separateWithComma(course?.price)}</span>
              <span className="  text-base text-gray-300 mr-2">تومان</span>
            </span>

          </div>
        </div>
      </div>
    </>
  );
}