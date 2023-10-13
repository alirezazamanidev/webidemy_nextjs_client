"use client";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React, { SetStateAction } from "react";
import { AiOutlineClose } from "react-icons/ai";
import LoGoPath from "@/public/images/photo/WEBIDEMI-600x600.png";
import { HiShoppingCart } from "react-icons/hi";

interface props {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
}
export default function SideBarLayout({ open, setOpen }: props) {
  return (
    <>
      <Transition
        className=" fixed  top-0  right-0 z-50  w-full h-full"
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
            className=" fixed inset-0 xl:hidden bg-gray-700 bg-opacity-75 "
            onClick={() => setOpen(false)}
          ></div>
        </Transition.Child>
        <Transition.Child
          as="div"
          className=" bg-dark-400 z-50 xl:hidden w-8/12 md:w-5/12  h-screen"
          enter="transition ease-in-out duration-300 transform"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
       
          <div className=" flex   items-center justify-center  pt-10 ">
            <Image
              src={LoGoPath}
              alt="logo"
              width={70}
              height={70}
              className=" object-cover  scale-75 md:scale-90 lg:scale-100 "
            />
            <span className=" text-gray-75 text-2xl font-bold mr-2"> وبیدمی</span>
          </div>
          <nav className="pt-7 px-4 mt-6">
            <ul className="flex text-gray-100 justify-center md:items-center gap-3 md:gap-5 lg:gap-8 xl:gap-10 flex-col">
              <li className="flex">
                <Link
                  className="flex justify-center items-center gap-4"
                  href="/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="inline-block md:hidden w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    ></path>
                  </svg>
                  <span className="p-2 text-base lg:text-2xl text-center relative after:h-0.5 after:absolute after:bottom-0 after:left-1/2 after:rounded-sm after:-translate-x-1/2 after:bg-gray-300 after:w-0 Hover:after:opacity-0 after:transition-all after:opacity-100 font-bold">
                    خانه
                  </span>
                </Link>
              </li>
              <li className="flex">
                <Link
                  className="flex justify-center items-center gap-4"
                  href="/courses"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="inline-block md:hidden w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                    ></path>
                  </svg>
                  <span className="p-2 text-base lg:text-2xl text-center relative after:h-0.5 after:absolute after:bottom-0 after:left-1/2 after:rounded-sm after:-translate-x-1/2 after:bg-cnBlack-20 dark:after:bg-gray-300 after:w-0 after:opacity-0 after:transition-all hover:after:w-1/2 hover:after:opacity-100">
                    دوره ها
                  </span>
                </Link>
              </li>
              <li className="flex">
                <Link
                  className="flex justify-center items-center gap-4"
                  href="/blogs"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="inline-block md:hidden w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    ></path>
                  </svg>
                  <span className="p-2 text-base lg:text-2xl text-center relative after:h-0.5 after:absolute after:bottom-0 after:left-1/2 after:rounded-sm after:-translate-x-1/2 after:bg-cnBlack-20 dark:after:bg-gray-300 after:w-0 after:opacity-0 after:transition-all hover:after:w-1/2 hover:after:opacity-100">
                    مقالات
                  </span>
                </Link>
              </li>
              <li className="flex">
                <Link
                  className="flex justify-center items-center gap-4"
                  href="/podcasts"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="inline-block md:hidden w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
                    ></path>
                  </svg>
                  <span className="p-2 text-base lg:text-2xl text-center relative after:h-0.5 after:absolute after:bottom-0 after:left-1/2 after:rounded-sm after:-translate-x-1/2 after:bg-cnBlack-20 dark:after:bg-gray-300 after:w-0 after:opacity-0 after:transition-all hover:after:w-1/2 hover:after:opacity-100">
                    پادکست ها
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </Transition.Child>
      </Transition>
    </>
  );
}
