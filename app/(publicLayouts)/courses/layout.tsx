import { Metadata } from "next";
import React from "react";

export const metadata = {
  title: "دوره های آموزشی | دوره ها",
};
export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
