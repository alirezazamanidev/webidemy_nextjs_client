"use client";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

import Link from "next/link";
import SideBarLayout from "./SideBarLayout";
import useAuth from "@/libs/hooks/useAuth";
import { FaUser } from "react-icons/fa";
import Badge from "@mui/material/Badge";
import { usePathname } from "next/navigation";
import { HiShoppingCart } from "react-icons/hi";

export default function NavbarLayouts() {
  const [openSideBar, setOpenSidebar] = useState<boolean>(false);
  const pathname = usePathname();
  const { user, loading: userLoading } = useAuth();
  let statusshowLoginBtn =
    pathname === "/login" || pathname === "/login/verfiy" ? true : false;
  return (
    <>
      <nav className="container mx-auto mt-10 px-5">
        <SideBarLayout open={openSideBar} setOpen={setOpenSidebar} />

        <div className=" flex items-center justify-between">
          <AiOutlineMenu
            className=" w-6 h-6 cursor-pointer text-white  block lg:hidden"
            onClick={(e:any) => setOpenSidebar(true)}
          />
          <h2 className=" text-3xl lg:text-4xl  font-bold tracking-tighter text-gray-50 hover:bg-gray-400 duration-200">
            Webidemy
          </h2>
          <ul className="  hidden lg:flex items-center  space-x-10 space-x-reverse  text-2xl lg:text-3xl  text-gray-300   cursor-pointer">
            <Link href="/" className=" group">
              <span className={`p-2 text-center relative after:h-0.5 after:absolute after:bottom-0  after:left-1/2 after:rounded-sm after:-translate-x-1/2 after:bg-gray-300    after:w-0 after:transition-all  group-hover:after:w-1/2 group-hover:after:opacity-100 ${pathname==='/' ?' after:opacity-100 after:w-1/2' :' after:opacity-0'}`}>
                خانه
              </span>
            </Link>
            <Link href='/courses' className=" group">
              <span className={`p-2 text-center relative after:h-0.5 after:absolute after:bottom-0  after:left-1/2 after:rounded-sm after:-translate-x-1/2 after:bg-gray-300    after:w-0 after:transition-all  group-hover:after:w-1/2 group-hover:after:opacity-100 ${pathname==='/courses' ?' after:opacity-100 after:w-1/2' :' after:opacity-0'}`}>
                دوره ها
              </span>
            </Link>
            <li className=" group">
              <span className={`p-2 text-center relative after:h-0.5 after:absolute after:bottom-0  after:left-1/2 after:rounded-sm after:-translate-x-1/2 after:bg-gray-300    after:w-0 after:transition-all  group-hover:after:w-1/2 group-hover:after:opacity-100 ${pathname==='/blogs' ?' after:opacity-100 after:w-1/2' :' after:opacity-0'}`}>
                مقالات
              </span>
            </li>
            <li className=" group">
              <span className="p-2 text-center relative after:h-0.5 after:absolute after:bottom-0  after:left-1/2 after:rounded-sm after:-translate-x-1/2 after:bg-gray-300  after:opacity-0  after:w-0 after:transition-all  group-hover:after:w-1/2 group-hover:after:opacity-100 ">
                وبلاگ ها
              </span>
            </li>
          </ul>

          {statusshowLoginBtn ? (
            <div className=" p-5  opacity-0"></div>
          ) : !user ? (
            <section className="flex gap-5">
              <Link
                className="justify-center items-center w-9 min-w-9 lg:w-12 lg:min-w-12 min-h-9 h-9 lg:min-h-12 lg:h-12 rounded-full transition-colors bg-dark-600 flex"
                href="/login"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 lg:w-7 h-5 lg:h-7 text-gray-100 transition-colors"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  ></path>
                </svg>
              </Link>
            </section>
          ) : (
            <section className="flex gap-5">
            <Link
              className="justify-center items-center w-9 min-w-9 lg:w-12 lg:min-w-12 min-h-9 h-9 lg:min-h-12 lg:h-12 rounded-full transition-colors bg-dark-600 flex"
              href="/login"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 lg:w-7 h-5 lg:h-7 text-gray-100 transition-colors"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                ></path>
              </svg>
            </Link>
            <Link
              className="justify-center items-center w-9 min-w-9 lg:w-12 lg:min-w-12 min-h-9 h-9 lg:min-h-12 lg:h-12 rounded-full transition-colors bg-dark-600 flex text-3xl p-2 text-gray-300"
              href="/login"
            >
          <HiShoppingCart />
            </Link>
            
          </section>
          )}
        </div>
      </nav>
    </>
  );
}
{
}
