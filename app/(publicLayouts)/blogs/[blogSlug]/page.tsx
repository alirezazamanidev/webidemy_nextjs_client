
import SingleCourseHeaderPage from "@/components/public/course/SinglePageCourse";
import ContantSinglePageLayout from "@/components/public/course/ContantSinglePageLayout";
import { GetSingleCourse } from "@/libs/services/home/course";
import SingleBlogPage from "@/components/public/blog/SinglePageblog";
import { GetSingleBlog } from "@/libs/services/home/blog";

export default async function SingelCourse({
  params: { blogSlug },
}: {
  params: { blogSlug: string };
}) {
  
  const data = await GetSingleBlog(blogSlug);
  
  
  return (
    <section className=" container mx-auto  mt-14">
      <SingleBlogPage blog={data?.blog} />

    
    </section>
  );
}
