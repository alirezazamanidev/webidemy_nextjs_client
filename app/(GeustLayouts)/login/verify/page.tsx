"use client";
import VerifyPhoneForm from "@/libs/forms/auth/verifyPhoneForm";
import { useAppDispatch, useAppSelector } from "@/libs/hooks";
import {
  getUserMutate,
  getphoneUser,
  selectverifyToken,
  updateVerfiyPhoneToken,
} from "@/libs/store/auth/auth.slice";
import Countdown from 'react-countdown';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import sendCodeForauth from "@/libs/services/home/auth";
import { toast } from "react-toastify";
import { CallApi } from "@/libs/helpers/callApi";

export default function VerifyCodePage() {
  const router = useRouter();
  const [showBtnSendCode, setShowBtnSendCode] = useState(false);
  const phoneUser = useAppSelector(getphoneUser);

  const verifyPhoneToken = useAppSelector(selectverifyToken);
  const dispatch = useAppDispatch();
  const userMutater = useAppSelector(getUserMutate);
  const clearVerifyPhoneToken = () => {
    dispatch(updateVerfiyPhoneToken(undefined));
  };

  const HandleSendCode = async (e: any) => {
    e.preventDefault();
    await sendCodeForauth({ phone: phoneUser })
    setShowBtnSendCode(false);
    toast.success("کد تایید با موفقیت ارسال شد!");
    
  }
  useEffect(() => {
    if (!verifyPhoneToken || !phoneUser) {
      router.push("/login");
    }
    return () => {
      clearVerifyPhoneToken();
    };
  }, [verifyPhoneToken, router,phoneUser]);

  const renderer = ({  minutes, seconds, completed }:any) => {
    if (completed) {
      setShowBtnSendCode(true);
    } else {
      
      return <span className=" text-white">{minutes > 9 ? minutes :`0${minutes}`}:{seconds > 9 ? seconds :`0${seconds}`}</span>;
    }
  }
 
  return (
    <>
      <div className=" mt-4">
        <div className=" w-full flex items-center justify-center">
          <div className=" bg-dark-600  w-[41rem] px-7 pt-3 sm:px-14 sm:pt-10 rounded-2xl transition-all mt-16">
            <div className=" w-full"></div>
            <div className=" relative">
              <div className=" w-full">
                <VerifyPhoneForm
                  userMutater={userMutater}
                  router={router}
                  token={verifyPhoneToken}
                  clearToken={clearVerifyPhoneToken}
                />
                   <div className=" mb-8 flex justify-center">
          {
            showBtnSendCode ? (
              <button onClick={HandleSendCode} className=" text-gray-400">ارسال مجدد رمز یک بار مصرف</button>
            ) : (
              <span className=" flex items-center gap-2">
                <p className=" text-gray-300"> ارسال کد تایید دیگر (</p>
                <Countdown date={Date.now() + (1000 * 60 * 3)} zeroPadTime={2} renderer={renderer} className=" text-white " />
                <p className=" text-gray-300">)</p>
              </span>
            )
          }
        </div>
     

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
