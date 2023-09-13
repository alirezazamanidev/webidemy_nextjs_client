"use client";

import { Order } from "@/libs/model/orders";
import Image from "next/image";
import { AiTwotoneDelete } from "react-icons/ai";
import ImageComponent from "../shared/ImageComponent";
import separateWithComma from "@/libs/utils";
import { useState } from "react";
import DeleteConfreamationV2 from "../shared/confreamtions/DeleteConfreamation2";
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from "react-query";
import { DeleteOneOrder } from "@/libs/services/cart/cart";
import { toast } from "react-toastify";

interface props {
  order: Order;
  orderRefech: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<any, unknown>>;
}
export default function OrderCardLayout({ order, orderRefech }: props) {
  const [showDeleteConfreamtion, setShowDeleteConfreamtion] =
    useState<boolean>(false);

  const HandleDeleteOne = async () => {
    await DeleteOneOrder(order._id);
    await orderRefech();
    setShowDeleteConfreamtion(false);
    toast.success("دوره مورد نظر از سبد خرید شما حذف شد");
  };
  return (
    <>
      <div className=" hidden">
      {showDeleteConfreamtion && (
        <DeleteConfreamationV2
          title="آیا از حذف دوره از سبد خرید خود اطمینان دارید ؟"
          handleCancel={() => setShowDeleteConfreamtion(false)}
          handleTrue={HandleDeleteOne}
        />
      )}
      </div>
      <div className=" bg-dark-600 rounded-xl px-10 py-6 gap-3 flex flex-col lg:flex-row  lg:justify-between ">
        <div className=" flex items-center">
          <div>
            <ImageComponent
              url={order?.course?.photos["360"]}
              alt={order?.course?.title}
              width={120}
              height={80}
              className=" object-cover rounded-lg"
            />
          </div>
          <div className=" mr-4">
            <h2 className=" text-xl font-bold text-gray-300 mb-4">
              اموزش ریکت
            </h2>
            <span className=" flex items-center  text-sm">
              <svg
                className="text-gray-200 ml-2"
                width="25"
                height="26"
                viewBox="0 0 25 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  opacity="0.15"
                  cx="13.0035"
                  cy="14.2262"
                  r="8.07682"
                  transform="rotate(-36.651 13.0035 14.2262)"
                  fill="currentColor"
                ></circle>
                <path
                  d="M3.15389 7.70712C7.35899 10.1461 7.88486 10.1461 12.0899 7.70712C16.295 5.26812 16.295 5.26812 12.0899 2.82914C7.88486 0.390149 7.35899 0.390142 3.15389 2.82914C1.05134 4.04863 6.10352e-05 4.65838 6.10352e-05 5.26813V10.7559C6.10352e-05 11.0926 0.273054 11.3656 0.609809 11.3656C0.946563 11.3656 1.21956 11.0926 1.21956 10.7559L1.21956 6.77631C1.21956 6.67967 1.32672 6.62118 1.40856 6.67255C1.87465 6.96515 2.45643 7.30259 3.15389 7.70712Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M3.15389 8.31691C7.35899 10.7559 7.88486 10.7559 12.0899 8.31691L12.3298 8.17775C12.5202 8.06725 12.7602 8.18843 12.7742 8.4081C12.7953 8.74004 12.8048 9.11436 12.8048 9.53637C12.8048 12.5851 11.5853 13.1949 7.60095 13.1949C3.35013 13.1949 2.43905 12.5851 2.43905 9.53637C2.43905 9.11456 2.44809 8.74039 2.46848 8.40857C2.48201 8.18842 2.72242 8.06653 2.91317 8.17725L3.15389 8.31691Z"
                  fill="currentColor"
                ></path>
              </svg>
              <p className=" text-gray-300 ">
                مدرس دوره : {order?.course?.teacher?.fullname}
              </p>
            </span>
          </div>
        </div>
        <div className=" flex flex-row-reverse sm:flex-row items-center justify-between sm:justify-end gap-4">
          <span className=" flex items-center gap-2">
            <p className=" text-gray-200 text-xl sm:text-2xl md:text-3xl">
              {separateWithComma(order?.course?.price)}
            </p>
            <p className=" text-sm text-gray-500">تومان</p>
          </span>
          <button
            onClick={() => setShowDeleteConfreamtion(true)}
            className=" bg-gray-1010 text-gray-200 text-xl p-2 hover:bg-red-600 hover:text-red-100 duration-300 rounded-full"
          >
            <AiTwotoneDelete />
          </button>
        </div>
      </div>
    </>
  );
}
