"use client";
import { useRouter, useParams } from "next/navigation";
import EditCourseForm from "@/libs/forms/admin/course/editCourseForm";
import useSWR from "swr";
import Loading from "react-loading";
import { useQuery } from "react-query";
import { CallApi } from "@/libs/helpers/callApi";
import { BadRequestException } from "@/libs/exceptions/BadRequestException";
import { NotFoundException } from "@/libs/exceptions/NotFoundException";
import { toast } from "react-toastify";
import EditEpisodeForm from "@/libs/forms/admin/episode/editForm";
export default function EditCoursePage() {
  const router = useRouter();
  const params = useParams();
  const {data,isLoading} = useQuery(['showOneEpisodeForEdit',params.episodeId],async()=>{
    const res=await CallApi().get(`/admin/episodes/edit/${params.episodeId}`);

    return res.data;

  },
  {
    retry: false,

    onError: (err) => {
      if (err instanceof BadRequestException || err instanceof NotFoundException) {
        router.push("/admin/episodes");
        toast.error("چنین جلسه ای با ایدی مورد نطر یافت نشد!");
        return;
      }
    },
  }
  )

  
  
  return <>
    {
        isLoading ?(
      <div className=" w-full h-screen flex justify-center items-center">
         <Loading/>
            
      </div>
        ):<EditEpisodeForm router={router} episode={data}/>
    }
  
  </>
}
