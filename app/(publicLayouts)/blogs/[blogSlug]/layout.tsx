import { notFound } from "next/navigation";
import React from "react";

export async function generateMetadata({
  params: { blogSlug },
}: {
  params: { blogSlug: string }
}) {


  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_API_URL}/blogs/${blogSlug}`
  ).then((data) => data.json());

  if(!res.blog){
    notFound();
  }
  return {
    title: res?.blog?.title,
  
  };
}
export default function SingleBlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
