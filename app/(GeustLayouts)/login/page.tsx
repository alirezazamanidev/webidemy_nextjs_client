"use client";
import LoginForm from "@/libs/forms/auth/LoginForm";
import RegisterForm from "@/libs/forms/auth/RegisterForm";
import { useAppDispatch } from "@/libs/hooks";
import { setPhoneUser, updateVerfiyPhoneToken } from "@/libs/store/auth/auth.slice";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [pagePath, setPagePath] = useState("login");
  const dispatch = useAppDispatch();
  const setVerifyPhoneToken = (token: string) => {
    dispatch(updateVerfiyPhoneToken(token));
  };
  const setphoneUser = (phone: string) => {
    dispatch(setPhoneUser(phone));
  }
  return (
    <>
      <div className=" mt-4">
        <div className=" w-full flex items-center justify-center">
          <div className=" bg-dark-600  w-[41rem] px-7 pt-3 sm:px-14 sm:pt-10 rounded-2xl transition-all mt-16">
            <div className=" w-full">
              <ul className=" w-full flex justify-around items-end select-none">
                <li
                  onClick={() => setPagePath("login")}
                  className={`cursor-pointer w-full p-3 sm:p-4 text-base lg:text-2xl text-center relative transition-all after:h-0.5 after:w-full after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:transition-all after:hover:bg-blue-250 ${pagePath === "login"
                      ? "after:bg-blue-250 text-blue-250"
                      : "after:bg-gray-300 text-white"
                    }   font-bold`}
                >
                  ورود
                </li>
                <li
                  onClick={() => setPagePath("register")}
                  className={`cursor-pointer w-full p-3 sm:p-4 text-base lg:text-2xl text-center relative transition-all after:h-0.5 after:w-full after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:transition-all after:hover:bg-blue-250 ${pagePath === "register"
                      ? "after:bg-blue-250 text-blue-250"
                      : "after:bg-gray-300 text-white"
                    }  font-bold`}
                >
                  عضویت
                </li>
              </ul>
            </div>
            <div className=" relative">
              <div className=" w-full">
                {pagePath === "login" ? (
                  <LoginForm router={router} setToken={setVerifyPhoneToken} setPhone={setphoneUser} />
                ) : (
                  <RegisterForm router={router} setToken={setVerifyPhoneToken} setPhone={setphoneUser} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
