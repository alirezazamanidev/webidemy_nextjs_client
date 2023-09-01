"use client";
import CreateCourseForm from "@/libs/forms/admin/course/createform";
import { useRouter } from "next/navigation";
const CreateCoursePage = () => {
  const router = useRouter();

  return (<>
  <main>

    <CreateCourseForm router={router}/>

  </main>
  
   </>);
};

export default CreateCoursePage;
