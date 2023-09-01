"use client";

import useAuth from "@/libs/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function GuestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { user } = useAuth();
 useEffect(()=>{
  if(user){
    router.push('/');
  }
 },[user])
  return <>{children}</>;
}
