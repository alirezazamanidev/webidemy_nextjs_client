"use client";
import CardCourse from "@/components/public/course/CardCourseLayout";
import SearchBarLayout from "@/components/public/layouts/SearchBarLayout";
import EmptyIcon from "@/components/shared/EmptyIcon";
import { useSearchInfinite } from "@/libs/hooks/useSearch";
import { Course } from "@/libs/model/course";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "react-loading";

export default function CoursesPage({}) {
  const [sort, setsort] = useState<string>("default");
  const [category, setCategory] = useState<string>("all");

  const searchParams = useSearchParams();
  const querySort = searchParams.get("sort");
  const queryCategory = searchParams.get("category");

  const { data, isLoading, fetchNextPage, hasNextPage } = useSearchInfinite({
    key: "filter-courses",
    url: "/courses/filter",
    sort,
    category,
    limit: 8,
  });
  useEffect(() => {
    if (querySort) {
      setsort(querySort);
    }
    if(queryCategory){
      setCategory(queryCategory);
    }
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;

      // اگر کاربر به انتهای صفحه رسیده باشد
      if (windowHeight + scrollTop >= documentHeight) {
        if (hasNextPage) {
          fetchNextPage();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [querySort, hasNextPage, fetchNextPage,queryCategory]);

  return (
    <>
      <main className=" mt-20">
        <div className=" container mx-auto">
          <SearchBarLayout />
          {/* content courses */}
          <div className=" border-solid border-b pb-16 border-gray-700 my-10 ">
            {isLoading ? (
              <div className=" bg-gray-800 opacity-40 absolute w-full left-0 top-0 h-screen flex justify-center items-center">
                <Loading type="spin" color="#fff" width={100} height={100} />
              </div>
            ) : data?.pages[0]?.length === 0 ? (
              <div className=" flex flex-col gap-5 justify-center items-center ">
                <EmptyIcon className=" w-6/12 h-6/12 md:w-4/12 md:h-4/12" />
                <h2 className=" text-3xl text-gray-500">دوره ای یافت نشد!</h2>
              </div>
            ) : (
              <div className=" mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
                {data?.pages.map((page) =>
                  page?.map((course: Course) => (
                    <CardCourse key={course?._id} course={course} />
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
