"use client";

import NavbarLayouts from "@/components/public/layouts/NavbarLayout";
import { Metadata } from "next";
 
export const metadata: Metadata = {
  title: 'وبسایت آموزش برنامه نویسی وبیدمی',
}
export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="">
      <NavbarLayouts />
      {children}
    </main>
  );
}
