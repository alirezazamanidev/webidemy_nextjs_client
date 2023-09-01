

import { Course } from "@/libs/model/course";
import { redirect } from "next/navigation";

import SingleCourseHeaderPage from "@/components/public/course/SinglePageCourse";
import ContantSinglePageLayout from "@/components/public/course/ContantSinglePageLayout";
const GetSingleCourse= async(courseSlug: string)=> {
  const res = await fetch(`http://localhost:8000/api/v1/courses/${courseSlug}`,{
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache:'no-store'
  
  });

  
  if (res.status === 400) redirect("/");
  return res.json();
}

export default async function SingelCourse({
  params: { courseSlug },
}: {
  params: { courseSlug: string };
}) {
  
  const data = await GetSingleCourse(courseSlug);
  
  
  return (
    <section className=" container mx-auto mt-20">
      <SingleCourseHeaderPage course={data?.course} />
      <ContantSinglePageLayout course={data?.course}/>

    
    </section>
  );
}
