
import HeadersMainPage from "@/components/public/domain/HeaderLayouts";
import ShowNewCourseLayout from "@/components/public/domain/showNewCoursesLayout";
import { Metadata } from "next";

 
export const metadata: Metadata = {
  title: 'وبسایت آموزش برنامه نویسی وبیدمی',
}
async function GetCourses() {
  const res = await fetch("http://localhost:8000/api/v1/courses", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  if (!res.ok) throw new Error("The error for get data");
  return res.json();
}
export default async function HomePage() {
  const data = await GetCourses();

  
  
  return (
    <>
      <div>
        <HeadersMainPage />
        <ShowNewCourseLayout courses={data?.courses}/>
        
      </div>
    </>
  );
}
