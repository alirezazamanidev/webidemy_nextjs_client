"use client";
import { useRouter, useParams } from "next/navigation";
import EditCourseForm from "@/libs/forms/admin/course/editCourseForm";
import Loading from "react-loading";
import { useQuery } from "react-query";
import { CallApi } from "@/libs/helpers/callApi";
import { BadRequestException } from "@/libs/exceptions/BadRequestException";
import { toast } from "react-toastify";
import { NotFoundException } from "@/libs/exceptions/NotFoundException";
export default function EditCoursePage() {
  const router = useRouter();
  const params = useParams();
  const { data, isLoading } = useQuery(
    ["GetSingleCourse-adminPanel", params?.courseId],
    async () => {
      const res = await CallApi().get(
        `/admin/courses/edit/${params?.courseId}`
      );

      return res?.data;
    },
    {
      retry: false,

      onError: (err) => {
        if (err instanceof BadRequestException || err instanceof NotFoundException) {
          router.push("/admin/courses");
          toast.error("چنین دوره ای با ایدی مورد نطر یافت نشد!");
          return;
        }
      },
    }
  );
  return (
    <>
      {isLoading ? (
        <div className=" w-full h-screen flex justify-center items-center">
          <Loading />
        </div>
      ) : (
        <EditCourseForm router={router} course={data?.course} />
      )}
    </>
  );
}
