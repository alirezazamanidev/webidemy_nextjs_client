'use client'
import ToastContainerComponnent from "@/components/shared/ToastContainer";

export default function GuestLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return <>
  <ToastContainerComponnent position="top-center" theme="dark"/>
  {children}</>;
}
