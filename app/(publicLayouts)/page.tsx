
import HeadersMainPage from "@/components/public/domain/HeaderLayouts";
import ShowNewCourseLayout from "@/components/public/domain/showNewCoursesLayout";
import { Metadata } from "next";

 
export const metadata: Metadata = {
  title: 'وبسایت آموزش برنامه نویسی وبیدمی',
}
async function GetCourses() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_API_URL}/courses`, {
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
        {/* <HeadersMainPage /> */}
        {/* <ShowNewCourseLayout courses={data?.courses}/> */}
        
      </div>
    </>
  );
}
