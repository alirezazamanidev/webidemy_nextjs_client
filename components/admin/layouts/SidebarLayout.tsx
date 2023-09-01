"use client";
import DisclosureList from "../../shared/layouts/DisclosureList";
import Image from "next/image";
import { MdAdminPanelSettings } from "react-icons/md";
import { AiFillDashboard } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { MdOutlineGolfCourse } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import { FaCommentAlt, FaUsers } from "react-icons/fa";
import { MdPermContactCalendar } from "react-icons/md";
// import { selectUser } from "@/libs/store/slices/auth.slice";/
import mePhoto from "@/public/images/me.jpeg";
import { useAppSelector } from "@/libs/hooks";
let list = [
  { label: "داشبرد اول", href: "/admin/dashboard_1" },
  { label: "داشبرد دوم", href: "/admin/dashboard_2" },
];
let courseList = [
  { label: "نمایش دوره ها", href: "/admin/courses" },
  { label: "ایجاد دوره", href: "/admin/courses/create" },
];
let videoList = [
  { label: "نمابش  جلسات", href: "/admin/episodes" },
  { label: "ایجاد جلسه جدید ", href: "/admin/episodes/create" },
];
let commentList = [
  { label: "نمایش کامنت ها", href: "/admin/comments" },
  { label: "جواب دادن به کامنت ها", href: "/admin/comments/answer" },
];
let userslist = [
  { label: "نمایش  کاربران", href: "/admin/users" },
  { label: "ایجاد کاربر جدید", href: "/admin/users/create" },
];
let permessionslist = [
  { label: "نمایش اجازه دسترسی ها", href: "/admin/permissions" },
  { label: "ایجاد  اجازه دسترسی جدید", href: "/admin/permissions/create" },
];
let roleslist = [
  { label: "نمایش سطوح دسترسی ", href: "/admin/roles" },
  { label: "ایجاد  سطج دسترسی جدید", href: "/admin/roles/create" },
];
interface props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const SideBarLayout = ({ open, setOpen }: props) => {
  // const user = useAppSelector(selectUser);

  return (
    <>
      <Transition show={open}>
        <Transition.Child
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0 lg:hidden bg-dark-600 bg-opacity-75 z-50"
            onClick={() => setOpen(false)}
          ></div>
        </Transition.Child>
        <Transition.Child
          as="div"
          className=" absolute top-0 right-0 z-50"
          enter="transition ease-in-out duration-300 transform"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <nav className=" bg-dark-900    lg:hidden w-[250px]   h-screen  ">
            <div className=" bg-green-550 hover:bg-green-700 cursor-pointer text-white px-4 py-3 flex justify-between items-center ">
              <h2 className=" text-2xl">پنل مدیرت</h2>
              <MdAdminPanelSettings className=" text-3xl" />
            </div>
            <div className="  flex flex-col items-center px-5 py-4">
              <div className=" flex justify-around items-center">
                <Image
                  className="  rounded-full object-cover"
                  src={mePhoto}
                  alt="avatar"
                  width={50}
                  height={50}
                />
                <span className="text-lg mr-3 text-gray-200 hover:text-white  cursor-pointer">
                  {/* {user?.username} */}
                </span>
              </div>
            </div>
            <hr className=" my-3" />

            <div className="">
              <div>
                <DisclosureList
                  title="داشبورد ها"
                  list={list}
                  Icon={AiFillDashboard}
                />
              </div>

              <div>
                <DisclosureList
                  title="دوره ها"
                  list={courseList}
                  Icon={MdOutlineGolfCourse}
                />
              </div>

              <div>
                <DisclosureList
                  title="جلسات "
                  list={videoList}
                  Icon={FaVideo}
                />
              </div>
              <div>
                <DisclosureList
                  title="کامنت ها"
                  list={commentList}
                  Icon={FaCommentAlt}
                />
              </div>
              <div>
                <DisclosureList
                  title="کاربر ها"
                  list={userslist}
                  Icon={FaUsers}
                />

                <DisclosureList
                  title="اجازه دسترسی"
                  list={permessionslist}
                  Icon={MdPermContactCalendar}
                />

                <DisclosureList
                  title="سطوج دسترسی"
                  list={roleslist}
                  Icon={MdOutlineGolfCourse}
                />
              </div>
            </div>
          </nav>
        </Transition.Child>
      </Transition>

      {/* static side bar */}
      <nav className=" bg-dark-600 hidden lg:block w-[250px] fixed top-0 right-0   h-screen ">
        <div className=" bg-green-550 hover:bg-green-700 cursor-pointer text-white px-4 py-3 flex justify-between items-center ">
          <h2 className=" text-2xl">پنل مدیرت</h2>
          <MdAdminPanelSettings className=" text-3xl" />
        </div>
        <div className="  flex flex-col items-center px-2 py-4">
          <div className=" flex justify-around items-center">
            <Image
              className="  rounded-full object-cover"
              src={mePhoto}
              alt="avatar"
              width={50}
              height={50}
            />
            <div className=" flex flex-col space-y-2 mr-3 justify-center">
              <span className="  text-gray-200 hover:text-white  cursor-pointer">
                علیرضا زمانی
              </span>
            </div>
          </div>
        </div>

        <hr className=" my-3" />

        <div className=" space-y-1">
          <div>
            <DisclosureList
              title="داشبورد ها"
              list={list}
              Icon={AiFillDashboard}
            />
          </div>
          <div>
            <DisclosureList
              title="دوره ها"
              list={courseList}
              Icon={MdOutlineGolfCourse}
            />
          </div>

          <div>
            <DisclosureList title=" جلسات" list={videoList} Icon={FaVideo} />
          </div>
          <div>
            <DisclosureList
              title="کامنت ها"
              list={commentList}
              Icon={FaCommentAlt}
            />
          </div>
          <div>
            <DisclosureList title="کاربر ها" list={userslist} Icon={FaUsers} />
          </div>
          <div>
            <DisclosureList
              title="اجازه دسترسی"
              list={permessionslist}
              Icon={MdPermContactCalendar}
            />
          </div>

          <div>
            <DisclosureList
              title="سطوج دسترسی"
              list={roleslist}
              Icon={MdOutlineGolfCourse}
            />
          </div>
        </div>
      </nav>
    </>
  );
};
export default SideBarLayout;
