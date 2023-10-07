'use client'

import NavbarLayout from "@/components/public/layouts/NavbarLayout";
import LoadingLayout from "@/components/shared/Loading";
import useAuth from "@/libs/hooks/useAuth";

  export default function PublicLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    const {user,loading}=useAuth()
    if(loading) return <LoadingLayout/>


  return (
    <main className="">
      
      <NavbarLayout/>
      {children}
    </main>
  );
}
