import { notFound } from "next/navigation";
import React from "react";

export async function generateMetadata({
  params: { courseSlug },
}: {
  params: { courseSlug: string }
}) {


  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_API_URL}/courses/${courseSlug}`
  ).then((data) => data.json());

  if(!res.course){
    notFound();
  }
  return {
    title: res?.course?.title,
    description:res?.course?.body
  };
}
export default function SingleCourseInfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
