"use client";

import LoadingLayout from "@/components/shared/Loading";
import useAuth from "@/libs/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function GuestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { user,loading } = useAuth();
 useEffect(()=>{
  if(user){
    router.push(`@${user?.username}`);
  }
 },[user,router])
 if(loading) return <LoadingLayout/>
  return <>{children}</>;
}
