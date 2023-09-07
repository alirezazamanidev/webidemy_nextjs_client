'use client'

import EditCategoryForm from "@/libs/forms/admin/category/editform";
import { GetSingleCategory } from "@/libs/services/admin/category";
import { useParams, useRouter } from "next/navigation";
import Loading from "react-loading";


export default function EditCategoryPage(){
    const router = useRouter();
    const params = useParams();
  const { data, isError, isLoading } = GetSingleCategory(params?.cateId as string);

    return (
        <>
        {isLoading ? (
            <div className=" w-full h-screen flex justify-center items-center">
              <Loading />
            </div>
          ) : (
            <EditCategoryForm router={router} cate={data} />
          )}
        </>

    )
}