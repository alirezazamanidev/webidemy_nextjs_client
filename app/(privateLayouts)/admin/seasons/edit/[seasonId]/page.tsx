"use client";
import { useRouter, useParams } from "next/navigation";
import Loading from "react-loading";
import { useQuery } from "react-query";
import { CallApi } from "@/libs/helpers/callApi";
import { BadRequestException } from "@/libs/exceptions/BadRequestException";
import { toast } from "react-toastify";
import { NotFoundException } from "@/libs/exceptions/NotFoundException";
import EditSeasonForm from "@/libs/forms/admin/season/editform";
export default function EditCoursePage() {
  const router = useRouter();
  const params = useParams();
  const { data, isLoading } = useQuery(
    ["GetSingleSeason-adminPanel", params?.seasonId],
    async () => {
      const res = await CallApi().get(
        `/admin/seasons/edit/${params?.seasonId}`
      );

      return res?.data;
    },
    {
      retry: false,

      onError: (err) => {
        if (
          err instanceof BadRequestException ||
          err instanceof NotFoundException
        ) {
          router.push("/admin/seasons");
          toast.error("چنین فصلی  با ایدی مورد نطر یافت نشد!");
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
        <div className=" bg-dark-600 w-1/2 mx-4 my-5 p-4 lg:p-7">
          <div>
            <h2 className=" text-2xl text-white">ایجاد فصل جدید</h2>
            <EditSeasonForm season={data} router={router} />
          </div>
        </div>
      )}
    </>
  );
}
