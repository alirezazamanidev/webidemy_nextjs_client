"use client";
import AvatarUser from "@/components/shared/AvatarLayout";
import { userType } from "@/libs/model/user";
import Link from "next/link";
import { useState } from "react";

interface props {
  author?: userType;
}

export default function CardInfoAuthor({ author }: props) {
  const [openBtn, setOpenBtn] = useState<boolean>(false);
  return (
    <>
      <div className="  p-4 lg:p-7 bg-dark-600 transition-all rounded-2xl mt-4 lg:mt-7 mr-0  mb-5 xl:mb-0  ">
        <div className="relative">
          <div
            className="overflow-hidden relative mb-5 lg:mb-7 "
            style={{ maxHeight: `${openBtn ? "100%" : "12rem"}` }}
          >
            <div>
              <div className="flex gap-2 sm:gap-4 lg:gap-0 flex-col sm:flex-row lg:flex-col justify-center items-center">
                <div className="flex justify-center items-center flex-col w-full">
                  <Link target="_blank" href="/">
                    <AvatarUser
                      width={120}
                      height={120}
                      className="aspect-square object-cover rounded-full transition-all duration-500 opacity-100 w-14 h-14 md:w-16 md:h-16 xl:w-20 xl:h-20 select-none"
                      url={author?.avatar}
                    />
                  </Link>
                  <div className="font-bold text-center mt-3 flex justify-center items-center gap-1">
                    <p className="transition-colors select-none text-gray-200 text-lg">
                      <Link target="_blank" href="/">
                        {author?.fullname}
                      </Link>
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 md:w-5 md:h-5 text-blue-250"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-xs md:text-sm text-center mt-1 xl:mt-3 text-gray-400 transition-colors select-none">
                    مدرس دوره
                  </p>
                </div>
                <p className="mt-0 text-gray-300 lg:mt-1 xl:mt-3 text-sm select-none transition-colors leading-loose">
                  {author?.biography}
                </p>
              </div>
            </div>
            <div
              className={`absolute left-0 right-0 bottom-0 h-1/2 bg-gradient-to-t from-dark-600 to-white/0 transition-all ${
                openBtn ? "opacity-0 invisible" : "opacity-100  visible"
              } `}
            ></div>
          </div>
          <button
            onClick={() => setOpenBtn((open) => !open)}
            className="select-none px-2 absolute -bottom-7 lg:-bottom-10 right-1/2 translate-x-1/2 text-cnBlue-20 text-blue-750 hover:text-gray-400 transition-colors text-sm lg:text-base"
          >
            {openBtn ? "بستن" : "ادامه"}
          </button>
        </div>
      </div>
    </>
  );
}
