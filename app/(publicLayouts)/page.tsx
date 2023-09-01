
import HeadersMainPage from "@/components/public/domain/HeaderLayouts";
import ShowNewCourseLayout from "@/components/public/domain/showNewCoursesLayout";
import { Course } from "@/libs/model/course";


// async function GetCourses() {
//   const res = await fetch("https://api.webidemyyy.ir/api/api/courses", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     cache: "no-store",
//   });

//   if (!res.ok) throw new Error("The error for get data");
//   return res.json();
// }
export default async function HomePage() {
  // const data = await GetCourses();
  
  return (
    <>
      <div>
        <HeadersMainPage />
        {/* <ShowNewCourseLayout courses={data?.courses}/> */}
        
      </div>
    </>
  );
}
