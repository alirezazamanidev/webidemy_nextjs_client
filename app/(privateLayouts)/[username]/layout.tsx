"use client";
import NavbarLayouts from "@/components/public/layouts/NavbarLayout";
import React, { useEffect } from "react";
import useAuth from "@/libs/hooks/useAuth";
import { notFound, usePathname, useRouter } from "next/navigation";
export default function UserPanel({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { user, loading, error } = useAuth();
  const pathname=usePathname();
  console.log(pathname);

  useEffect(() => {
  
    if (error) {
      router.push("/login");
    }
    if (!user) {
      router.push("/");
    }
  }, [user, error, router]);

  return (
    <>
      <NavbarLayouts />
      {children}
    </>
  );
}
