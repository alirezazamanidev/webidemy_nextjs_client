
import CardCourse from "@/components/public/course/CardCourseLayout";
import CoursesListLayout from "@/components/public/course/CoursesListLayout";
import SearchBarLayout from "@/components/public/layouts/SearchBarLayout";
import EmptyIcon from "@/components/shared/EmptyIcon";
import ReactCustomPaginate from "@/components/shared/layouts/PaginateItem";
import { useSearchInfinite } from "@/libs/hooks/useSearch";
import { Course } from "@/libs/model/course";
import { GetAllCourses } from "@/libs/services/home/course";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "react-loading";

interface props {
  searchParams: {
    page: number | undefined,
    sort: string | undefined
    category: string | undefined
  }
}
export default async function CoursesPage({ searchParams: { page, sort, category } }: props) {
  const coursesListData = await GetAllCourses({ page: page ?? 1, pre_page: 8, sort: sort, category });

  return (
    <>
      <main className=" mt-20">
        <div className=" container mx-auto">

          <CoursesListLayout coursesData={coursesListData} />
        </div>
      </main>
    </>
  );
}


