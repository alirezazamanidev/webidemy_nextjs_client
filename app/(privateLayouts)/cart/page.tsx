"use client";
import OrderCardLayout from "@/components/cart/OrderCardLayout";
import EmptyIcon from "@/components/shared/EmptyIcon";
import LoadingLayout from "@/components/shared/Loading";
import { Order } from "@/libs/model/orders";
import { GetUserOrders } from "@/libs/services/cart/cart";
import Link from "next/link";
import separateWithComma from "@/libs/utils";
import  _ from 'lodash';
export default function CartPage() {
  const { data, isLoading,refetch } = GetUserOrders();
  if(isLoading) return <LoadingLayout/>
  const totalPrice=_.sumBy(data,(order:Order)=>{
    return parseInt(order?.course?.price)
  })
  
  return (
    <>
      <div className=" container mx-auto mt-20">
        <div className=" py-20 border-t border-b border-gray-500 border-opacity-60">
        {
            data.length ===0
             ?(
                <div className=" flex flex-col items-center justify-center gap-5">
                    <p className=" text-xl md:text-2xl lg:text-3xl text-gray-300 "> سبد خرید شما خالیست !</p>
                    <EmptyIcon className=" w-3/4 md:w-2/4 lg:w-1/4"/>
                    <Link href='/courses' className=" bg-blue-350 text-base rounded-2xl px-4 py-3 text-gray-100">مشاهده دوره های</Link>

                </div>

             ):(
                  
        <div className=" w-full flex flex-col lg:flex-row   gap-4">
        <div className=" w-full lg:w-8/12 space-y-5 ">
          {data?.map((order: Order) => (
            <OrderCardLayout order={order} key={order._id} orderRefech={refetch} />
          ))}
        </div>
        <div className=" w-full lg:w-4/12 mr-3 rounded-xl">
          <div className=" w-full bg-dark-600 p-4 lg:p-7">
            <div className=" border-b border-gray-700 pb-6 ">
              <h2 className=" text-gray-300 font-bold text-3xl text-right">
                اطلاعات پرداخت
              </h2>
            </div>
            <div className="mt-10 border-b border-gray-500 border-opacity-20 pb-10">
              <ul className=" space-y-6">
                <li className=" flex items-center justify-between">
                  <span className=" text-gray-300 text-xl font-bold">
                    جمع کل
                  </span>
                  <span className=" flex items-center gap-1">
                    <p className=" text-2xl text-gray-200">{separateWithComma(`${totalPrice}`)}</p>
                    <p className=" text-gray-400 text-sm">تومان</p>
                  </span>
                </li>
              </ul>
            </div>
            <div className=" mt-4">
              <button
                className=" w-full bg-gradient-to-r from-blue-350 hover:from-blue-250 hover:to-blue-350 to-blue-250 duration-500 transition-colors text-gray-50 rounded-lg py-6
               text-xl"
              >
                تکمیل فرایند خرید
              </button>
            </div>
          </div>
        </div>
      </div>
             )
        }
        </div>
  
      </div>
    </>
  );
}
