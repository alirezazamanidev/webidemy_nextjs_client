"use client";
import LoadingLayout from "@/components/shared/Loading";
import useAuth from "@/libs/hooks/useAuth";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

export default function Template({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { user,loading } = useAuth();
  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, [user, router]);
  if(loading) return <LoadingLayout/>
  return <>{children}</>;
}