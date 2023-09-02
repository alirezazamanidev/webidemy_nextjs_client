"use client";
import { useRouter, useParams } from "next/navigation";
import EditCourseForm from "@/libs/forms/admin/course/editCourseForm";
import useSWR from "swr";
import { GetOneCourseForEdit } from "@/libs/services/admin/course";
import Loading from "react-loading";
export default function EditCoursePage() {
  const router = useRouter();
  const params = useParams();
  const {data,isLoading} = useSWR({ courseId: params.courseId }, GetOneCourseForEdit);
  
  return <>
    {
        isLoading ?(
      <div className=" w-full h-screen flex justify-center items-center">
         <Loading/>
            
      </div>
        ):<EditCourseForm router={router} course={data?.data?.course}/>
    }
  
  </>
}
