"use client";
import LoginForm from "@/libs/forms/auth/LoginForm";
import RegisterForm from "@/libs/forms/auth/RegisterForm";
import VerifyPhoneForm from "@/libs/forms/auth/verifyPhoneForm";
import { useAppDispatch, useAppSelector } from "@/libs/hooks";
import {
  selectverifyToken,
  updateVerfiyPhoneToken,
} from "@/libs/store/auth/auth.slice";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function VerifyCodePage() {
  const router = useRouter();
  const verifyPhoneToken = useAppSelector(selectverifyToken);
  const dispatch = useAppDispatch();
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // const clearVerifyPhoneToken = () => {
  //   dispatch(updateVerfiyPhoneToken(undefined));
  // };

  // useEffect(() => {
  //   if (!verifyPhoneToken) {
  //     router.push("/login");
  //   }
  //   return () => {
  //     clearVerifyPhoneToken();
  //   };
  // }, [verifyPhoneToken,clearVerifyPhoneToken,router]);

  return (
    <>
      <div className=" mt-4">
        <div className=" w-full flex items-center justify-center">
          <div className=" bg-dark-600  w-[41rem] px-7 pt-3 sm:px-14 sm:pt-10 rounded-2xl transition-all mt-16">
            <div className=" w-full"></div>
            <div className=" relative">
              <div className=" w-full">
                <VerifyPhoneForm
                  router={router}
                  token={verifyPhoneToken}
            
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
