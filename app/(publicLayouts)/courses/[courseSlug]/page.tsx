
import SingleCourseHeaderPage from "@/components/public/course/SinglePageCourse";
import ContantSinglePageLayout from "@/components/public/course/ContantSinglePageLayout";
import { GetSingleCourse } from "@/libs/services/home/course";

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
