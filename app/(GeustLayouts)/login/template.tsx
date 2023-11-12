"use client";
import useAuth from "@/libs/hooks/useAuth";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

export default function Template({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { user } = useAuth();
  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user, router]);
  return <>{children}</>;
}
