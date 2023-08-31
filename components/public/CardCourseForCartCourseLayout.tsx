import { RiDeleteBin5Line } from "react-icons/ri";
import Image from "next/image";
import { Course } from "@/libs/model/course";
import separateWithComma from "@/libs/utility/tools";
import { KeyedMutator } from "swr";
import { AxiosResponse } from "axios";

import { Order } from "@/libs/model/order";
import { DeleteOrder } from "@/libs/services/public/cart";
import SwAleart from "../shared/SwAleart";

interface props {
  order: Order;
  cartMuted: KeyedMutator<AxiosResponse<any, any>>;
}

export default function CardCourseForCartCourseLayout({
  order,
  cartMuted,
}: props) {
  
  const handledeleteCart = async (e: any) => {
    e.preventDefault();
    await DeleteOrder(order._id);
    await cartMuted();
  };

  const course = order.product as Course;
  return (
    <>
      
      <div className=" w-full bg-dark-600 px-7 py-5 hover:scale-105 duration-300 cursor-pointer  rounded-lg shadow-lg flex  md:flex-row md:items-center md:justify-between ">
        <div className=" flex  md:items-center mb-4 md:mb-0">
          <Image
            src={`http://localhost:8000${course.images[360]}`}
            alt="image"
            width={360}
            height={360}
            className=" w-40  rounded-lg object-cover hover:scale-105 duration-200"
          />
          <div className=" mr-3">
            <h2 className=" text-white text-lg md:text-xl  mb-2 hover:text-gray-400">
              {course.title}
            </h2>
            <span className="text-gray-200 text-sm">
              مدرس دوره : علیرضا زمانی
            </span>
          </div>
        </div>
        <div className=" flex  md:items-center">
          <span className=" flex items-center">
            <p className=" text-gray-200  ml-3 text-xl md:text-3xl">
              {separateWithComma(course.price)}
            </p>
            <p className=" text-gray-300 text-xl">تومان</p>
          </span>
          <button
            onClick={handledeleteCart}
            className=" hover:bg-red-900 text-white mr-3 p-2 duration-150   rounded-full"
          >
            <RiDeleteBin5Line className="  text-xl  " />
          </button>
        </div>
      </div>
    </>
  );
}
