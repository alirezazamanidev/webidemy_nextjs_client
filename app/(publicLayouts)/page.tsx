
import HeadersMainPage from "@/components/public/domain/HeaderLayouts";
import ShowNewBlogsLayout from "@/components/public/domain/showNewBlogsLayout copy";
import ShowNewCourseLayout from "@/components/public/domain/showNewCoursesLayout";
import { GetBlogs } from "@/libs/services/home/blog";
import { GetCourses } from "@/libs/services/home/course";
import { Metadata } from "next";

 
export const metadata: Metadata = {
  title: 'وبسایت آموزش برنامه نویسی وبیدمی',
}

export default async function HomePage() {
  const Coursedata = await GetCourses();
  const blogsData=await GetBlogs();
  
  
  return (
    <>
      <div>
        <HeadersMainPage />
        <ShowNewCourseLayout courses={Coursedata?.courses}/>
        <ShowNewBlogsLayout blogs={blogsData.blogs}/>
      </div>
    </>
  );
}
