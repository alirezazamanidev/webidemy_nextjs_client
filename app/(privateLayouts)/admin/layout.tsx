"use client";
import NavbarLayout from "@/components/admin/layouts/NavbarLayout";
import LoadingLayout from "@/components/shared/Loading";
import ToastContainerComponnent from "@/components/shared/ToastContainer";
import useAuth from "@/libs/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, error, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (error) {
      router.push("/login");
    }
    if (user?.admin===false) {
      router.push("/");
    }
  }, [user, error,router]);

  return (
    <div className="lg:mr-[250px] h-screen ">
      <NavbarLayout />

      {children}
    </div>
  );
}
