"use client";

import CreateSeasonForm from "@/libs/forms/admin/season/createform";
import { getAllCourseForCreateSeason } from "@/libs/services/admin/season";
import { useRouter } from "next/navigation";
import Loading from "react-loading";
import useSWR from "swr";

export default function CreateNewSeasonPage() {
  const router = useRouter();
  const { data, isLoading } = useSWR(
    { url: "/admin/courses/getAll" },
    getAllCourseForCreateSeason
  );

  return (
    <>
      <div className=" bg-dark-600 w-1/2 mx-4 my-5 p-4 lg:p-7">
        <div>
          <h2 className=" text-2xl text-white">ایجاد فصل جدید</h2>
          {isLoading ? (
            <Loading type="cylon" color="#fff" width={100} />
          ) : (
            <CreateSeasonForm router={router} courses={data?.data} />
          )}
        </div>
      </div>
    </>
  );
}
