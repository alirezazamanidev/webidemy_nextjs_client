'use client'

import EmptyIcon from "@/components/shared/EmptyIcon"
import { Course } from "@/libs/model/course"
import CardCourse from "./CardCourseLayout"
import { useQueryState, parseAsInteger } from 'next-usequerystate'
import ReactCustomPaginate from "@/components/shared/layouts/PaginateItem"
import { useEffect, useState } from "react"
import { GetAllCourses } from "@/libs/services/home/course"

interface props {
    coursesData: any
}
export default function CoursesListLayout({ coursesData }: props) {

    const [courseList,setCourseList]=useState<Course[]>(coursesData.data ?? []);
    const [page, setPage] = useQueryState('page', parseAsInteger.withDefault(1));


    useEffect(()=>{
        getCoursesListByChangePage();

    },[page])

    const onPageChangeHandler = ({ selected }: { selected: number }) => {
        setPage(selected + 1);
    }


    const getCoursesListByChangePage=async()=>{
       let coursesData= await GetAllCourses({page,pre_page:8});
       setCourseList(coursesData.data);
    }
    return (
        <>
            <div className=" border-solid border-b pb-16 border-gray-700 my-10 ">


                {
                    courseList.length === 0 ? (
                        <div className=" flex flex-col gap-5 justify-center items-center ">
                            <EmptyIcon className=" w-6/12 h-6/12 md:w-4/12 md:h-4/12" />
                            <h2 className=" text-3xl text-gray-500">دوره ای یافت نشد!</h2>
                        </div>
                    ) : (
                        <div className=" mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
                            {courseList.map((course: Course) =>

                                <CardCourse key={course?._id} course={course} />

                            )}
                        </div>
                    )}
            <ReactCustomPaginate page={page} pageCount={5} onPageChangeHandler={onPageChangeHandler} />
            </div >


        </>
    )
}