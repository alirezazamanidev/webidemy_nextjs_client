'use client'

import NavbarLayouts from "@/components/public/layouts/NavbarLayout";

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
