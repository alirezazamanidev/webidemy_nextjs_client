

import { Course } from "@/libs/model/course";
import { redirect } from "next/navigation";

import SingleCourseHeaderPage from "@/components/public/course/SinglePageCourse";
import ContantSinglePageLayout from "@/components/public/course/ContantSinglePageLayout";
// async function GetSingleCourse(courseSlug: string) {
//   const res = await fetch(`https://api.webidemyyy.ir/api/courses/${courseSlug}`,{
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
  
//   });
//   if (res.status === 400) redirect("/");
//   return res.json();
// }

export default async function SingelCourse({
  params: { courseSlug },
}: {
  params: { courseSlug: string };
}) {
  // const data = await GetSingleCourse(courseSlug);

  // const course: Course = data.course;
  return (
    <section className=" container mx-auto mt-20">
      {/* <SingleCourseHeaderPage course={course} /> */}
      <ContantSinglePageLayout/>

    
    </section>
  );
}
