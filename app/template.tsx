"use client";
import { useAppDispatch, useAppSelector } from "@/libs/hooks";
import useAuth from "@/libs/hooks/useAuth";
import { getUserMutate, setUserMutater } from "@/libs/store/auth/auth.slice";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

export default function Template({ children }: { children: ReactNode }) {

  const { refetch: userRefetch } = useAuth();
  
  const dispatch = useAppDispatch();
  const userMutater = useAppSelector(getUserMutate);
  useEffect(() => {
  if(userMutater===undefined){
    dispatch(setUserMutater(userRefetch))
  }

  }, [userRefetch])

  return <>{children}</>;
}
