"use client";

import { useSearchParams } from "next/navigation";
import CourseItemLayout from "./CourseItemLayout";
import useSWR from "swr";
import { useEffect, useState } from "react";
import { getCourses } from "@/libs/services/admin/course";
import Loading from "react-loading";
import { Course } from "@/libs/model/course";
import EmptyIcon from "@/components/shared/EmptyIcon";
import PaginateItem from "@/components/shared/layouts/PaginateItem";

export default function TableCoursesLayout() {
  const [page, setPage] = useState<number>(1);
  const searchParams = useSearchParams();

  const { data, isLoading, mutate } = useSWR(
    { url: "/admin/courses", page },
    getCourses
  );
 console.log(data);
 
  const querypage = searchParams.get("page");
  useEffect(() => {
    if (querypage) setPage(parseInt(querypage));
  }, [querypage]);
  return (
    <>
      <div className=" m-8 bg-dark-600 p-5   rounded-lg space-y-3 select-none">
        {isLoading ? (
          <div className=" flex justify-center ">
            <Loading
              type="bubbles"
              color="#fff"
              className=""
              width={100}
              height={100}
            />
          </div>
        ) :data?.data?.length ===0 
          ?(
            <div className=" w-full flex flex-col justify-center items-center">
              <h2 className=" text-3xl text-gray-500 mb-4">دوره ای جهت نمایش وجود ندارد</h2>
              <EmptyIcon className=" w-80"/>
            </div>

          ):data?.data?.map((course: Course) =>(
            <CourseItemLayout key={course._id} course={course} courseMuted={mutate}/>
          ))
          
        }
        <PaginateItem page={page} pages={data?.pages} url="/admin/courses"/>
      </div>
    </>
  );
}
