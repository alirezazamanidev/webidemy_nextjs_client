"use client";
import Image from "next/image";
import defalutAvatar from "@/public/images/photo/avatarDefalt.webp";
import LogoutConfreamation from "@/components/shared/ShowConfreamationLogout";
import { useState } from "react";
import useAuth from "@/libs/hooks/useAuth";
import { CallApi } from "@/libs/helpers/callApi";
import {
  RemoveCookieForLogout,
  StoreCookieForLogin,
} from "@/libs/helpers/auth";
import { useRouter } from "next/navigation";
import UploadAvatarConfreamation from "@/components/public/user/UploadAvatarConfreamationLogout ";
import { toast } from "react-toastify";
import ImageComponent from "@/components/shared/ImageComponent";
import useRefreshToken from "@/libs/hooks/useRefreshToken";
export default function UserPanelHeaderLayout() {
  const [showLogoutConfrimation, setshowLogoutConfrimation] =
    useState<boolean>(false);
  const [showUploadAvatarConfrimation, setShowUploadAvatarConfrimation] =
    useState<boolean>(false);
  const router = useRouter();
  const { user, refetch } = useAuth();
  const refeachToken = useRefreshToken();

  const handleLogout = async () => {
    if (user) {
      await CallApi().get(`auth/local/signOut`);
      await RemoveCookieForLogout();
      setshowLogoutConfrimation(false);
      router.push("/");
    }
  };
  const handleUploadAvatar = async (values: any) => {
    //send images
    const formData = new FormData();
    for (let value in values) {
      formData.append(value, values[value]);
    }
    
    const res = await CallApi().post("/users/uploadAvatar", formData);
    await refeachToken();
    setShowUploadAvatarConfrimation(false);
    await refetch();
  
    toast.success("تصویر پروفایل مورد نظر شما با موفقیت جایگزاری شد :))");
  };
  return (
    <>
      <div className=" hidden">
        {showLogoutConfrimation && (
          <LogoutConfreamation
            handleTrue={handleLogout}
            handleCancel={() => setshowLogoutConfrimation(false)}
          />
        )}
      </div>

      <div className=" container bg-dark-600 mx-auto mt-20 w-full  rounded-xl relative">
        <div>
          <div className="transition-all duration-500 h-40 md:h-52 w-full object-cover object-center bg-gray-550 rounded-t-2xl "></div>
          <div
            className="flex absolute top-4 left-4 lg:top-7 lg:left-7"
            dir="ltr"
          >
            <div
              onClick={() => setShowUploadAvatarConfrimation(true)}
              className=" shadow-blue-250    bg-gray-800 text-blue-250 relative w-8 h-8 md:w-10 md:h-10 overflow-hidden transition-all flex items-center rounded-full select-none hover:w-full cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 md:w-5 md:h-5 absolute top-1/2 -translate-y-1/2 left-2 md:left-2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                ></path>
              </svg>
              <p className="whitespace-nowrap text-ellipsis overflow-hidden w-fit text-xs sm:text-sm pr-2 pl-8 md:pr-2.5 md:pl-10">
                ویرایش عکس زمینه
              </p>
            </div>
            {showUploadAvatarConfrimation && (
              <UploadAvatarConfreamation
                handleTrue={handleUploadAvatar}
                handleCancel={() => setShowUploadAvatarConfrimation(false)}
              />
            )}
          </div>
        </div>
        <div className="px-4 lg:px-7 flex justify-between items-center gap-4 select-none">
          <div className="-mt-16 md:-mt-22 relative z-1">
            {!user?.avatar ? (
              <Image
                src={defalutAvatar}
                width={150}
                height={150}
                className="aspect-square object-cover rounded-full  duration-500 opacity-100 inline-block w-32 h-32 md:w-44 md:h-44 border-solid border-3 border-white dark:border-cnDarkBlue-27 bg-gray-200 dark:bg-cnDarkBlue-25 transition-all"
                alt="defaltavatar"
              />
            ) : (
              <ImageComponent
                url={user?.avatar}
                width={150}
                height={150}
                className="aspect-square object-cover rounded-full  duration-500 opacity-100 inline-block w-32 h-32 md:w-44 md:h-44 border border-solid  border-dark-600 bg-dark-700  transition-all"
                alt={user?.fullname}
              />
            )}

            <div
              className="flex absolute bottom-0  right-24 md:right-34"
              dir="rtl"
            >
              <div
                onClick={() => setShowUploadAvatarConfrimation(true)}
                className=" mr-10 shadow-md shadow-blue-250 bg-gray-800  text-blue-250  relative w-8 h-8 md:w-10 md:h-10 overflow-hidden transition-all flex items-center rounded-full select-none hover:w-full cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 md:w-5 md:h-5 absolute top-1/2 -translate-y-1/2 right-2 md:right-2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                  ></path>
                </svg>
                <p className="whitespace-nowrap text-ellipsis overflow-hidden w-fit text-xs sm:text-sm pl-2 pr-8 md:pl-2.5 md:pr-10">
                  ویرایش عکس پروفایل
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={() => setshowLogoutConfrimation(true)}
            className="flex justify-center items-center gap-1 text-sm md:text-base transition-all select-none text-red-500 hover:text-red-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 md:w-6 md:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
              ></path>
            </svg>
            <span>خروج</span>
          </button>
        </div>
        <div className="px-4 lg:px-7 mt-4 lg:mt-6 pb-4 lg:pb-7">
          <div>
            <div className="flex justify-start items-center gap-1">
              <p
                dir="ltr"
                className="text-ellipsis overflow-hidden w-fit text-lg md:text-xl lg:text-2xl text-gray-300 transition-all select-none cursor-pointer"
              >
               <span>@{user?.username}</span>
              </p>
            </div>
            <h1 className="font-bold text-ellipsis overflow-hidden w-fit text-xl md:text-2xl lg:text-3xl text-gray-300 transition-all select-none cursor-pointer mt-1 lg:mt-2.5">
              {user?.fullname}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
