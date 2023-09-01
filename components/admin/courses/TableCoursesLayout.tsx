"use client";

import { useSearchParams } from "next/navigation";
import CourseItemLayout from "./CourseItemLayout";
import useSWR from "swr";
import { useEffect, useState } from "react";
import { getCourses } from "@/libs/services/admin/course";
import Loading from "react-loading";
import { Course } from "@/libs/model/course";

export default function TableCoursesLayout() {
  const [page, setPage] = useState<number>(1);
  const searchParams = useSearchParams();

  const { data, isLoading, mutate } = useSWR(
    { url: "/admin/courses", page },
    getCourses
  );

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
        ) : (
          data?.data?.map((course: Course) =>(
            <CourseItemLayout key={course._id} course={course} courseMuted={mutate}/>
          ))
        )}
      </div>
    </>
  );
}
