
import HeadersMainPage from "@/components/public/domain/HeaderLayouts";
import ShowNewBlogsLayout from "@/components/public/domain/showNewBlogsLayout copy";
import ShowNewCourseLayout from "@/components/public/domain/showNewCoursesLayout";
import { GetCourses } from "@/libs/services/home/course";
import { Metadata } from "next";

 
export const metadata: Metadata = {
  title: 'وبسایت آموزش برنامه نویسی وبیدمی',
}

export default async function HomePage() {
  const data = await GetCourses();

  
  
  return (
    <>
      <div>
        <HeadersMainPage />
        <ShowNewCourseLayout courses={data?.courses}/>
        <ShowNewBlogsLayout/>
      </div>
    </>
  );
}
