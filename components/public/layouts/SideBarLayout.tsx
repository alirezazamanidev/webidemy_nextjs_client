"use client";
import { Transition } from "@headlessui/react";
import React, { SetStateAction } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface props {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
}
export default function SideBarLayout({ open, setOpen }: props) {
  return (
    <>
      <Transition
        className=" fixed  top-0  right-0 z-50  h-full"
        show={open}
      >
        <Transition.Child
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className=" fixed inset-0 xl:hidden bg-gray-600 bg-opacity-75 "
            onClick={() => setOpen(false)}
          ></div>
        </Transition.Child>
        <Transition.Child
          as="div"
          className="   bg-white  z-50 xl:hidden w-[280px] h-screen"
          enter="transition ease-in-out duration-300 transform"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
            <AiOutlineClose onClick={()=>setOpen(false)} className=" text-gray-900 text-4xl absolute top-4 cursor-pointer  right-4"/>
            <div className=" text-gray-900    flex flex-col items-center justify-between py-10 h-full ">
                <ul className=" space-y-5 text-xl ">

                    <li>دوره ها</li>
                    <li>مقالات</li>
                    <li>وبلاگ ها</li>
                </ul>
                
                <div>

                    <div className=" bg-gray-300 py-1 px-6 text-gray-500 rounded-lg">
                        <span>09914275883</span>
                    </div>
                </div>
            </div>
        
        </Transition.Child>
      </Transition>
    </>
  );
}
