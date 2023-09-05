"use client";

import CreateSeasonForm from "@/libs/forms/admin/season/createform";
import { CallApi } from "@/libs/helpers/callApi";
import { useRouter } from "next/navigation";
import Loading from "react-loading";
import { useQuery } from "react-query";
export default function CreateNewSeasonPage() {
  const router = useRouter();


  return (
    <>
      <div className=" bg-dark-600 w-1/2 mx-4 my-5 p-4 lg:p-7">
        <div>
          <h2 className=" text-2xl text-white">ایجاد فصل جدید</h2>

            <CreateSeasonForm router={router}  />

        </div>
      </div>
    </>
  );
}
