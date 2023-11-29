'use client'

import EmptyIcon from "@/components/shared/EmptyIcon"
import { Course } from "@/libs/model/course"
import CardCourse from "./CardCourseLayout"
import { useQueryState, parseAsInteger, parseAsString } from 'next-usequerystate'
import ReactCustomPaginate from "@/components/shared/layouts/PaginateItem"
import { useEffect, useState } from "react"
import { GetAllCourses } from "@/libs/services/home/course"
import { Listbox } from "@headlessui/react"
import { Getcategoryies } from "@/libs/services/home/public"
import { Category } from "@/libs/model/category"
import Loading from "react-loading"
import SearchBarCourseLayout from "./SearchBarCourseLayout"
const filterItem = [
    { value: "default", name: "پیش فرض", unavailable: false },
    { value: "newest", name: "جدید ترین", unavailable: false },
    { value: "oldest", name: "قدیمی ترین", unavailable: false },
    { value: "popular", name: "محبوب ترین", unavailable: false },
];

interface props {
    coursesData: any
}
export default function CoursesListLayout({ coursesData }: props) {

    const [courseList, setCourseList] = useState<Course[]>(coursesData.data ?? []);
    const [page, setPage] = useQueryState('page', parseAsInteger.withDefault(1));
    const [sort, setSort] = useQueryState('sort', parseAsString.withDefault(filterItem[0].value));
    const [selectedItem, setSelectedItem] = useState(filterItem[0]);
    const [category,setCategory]=useQueryState('category',parseAsString.withDefault('all'));

    const [selectedItemCategires, setSelectedItemCategories] = useState({
        value: "all",
        name: "همه",
    });

    useEffect(() => {
        setSort(selectedItem.value);
        setCategory(selectedItemCategires.value);
        getCoursesListByChangeQuery();

    }, [page, sort,category, selectedItem,selectedItemCategires])

    const onPageChangeHandler = ({ selected }: { selected: number }) => {
        setPage(selected + 1);
    }
    const { data: categories, isLoading: categoryLoading } = Getcategoryies();
    const filterItemCategories = categories?.map((cate: Category) => {
        return { value: cate.title, name: cate.title };
    });


    const getCoursesListByChangeQuery = async () => {
        let coursesData = await GetAllCourses({ page, pre_page: 8, sort ,category});
        setCourseList(coursesData.data);
    }
    return (
        <>
            {/* search bar */}
            <div className="  border-b border-solid border-gray-700 pb-3 md:pb-5 lg:pb-8 w-full select-none  flex flex-col mx-2 md:flex-row items-center gap-2 lg:gap-5">
                <div className=" w-full md:w-fit    grid grid-cols-2 md:flex gap-2  justify-between items-center">
                    <div className=" relative ">
                        <Listbox
                            value={selectedItem}
                            onChange={(value: any) => {


                                if (value) {
                                    setSelectedItem(value)

                                }
                            }}
                        >
                            <Listbox.Button className="bg-dark-600 w-full   text-gray-300 transition-all rounded-xl p-3 md:p-3.5 text-lg flex justify-center items-center gap-2 cursor-pointer h-full">
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-5 h-5 md:w-6 md:h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                                        ></path>
                                    </svg>
                                </span>
                                <span className="whitespace-nowrap overflow-hidden text-ellipsis max-w-40">
                                    {selectedItem.name}
                                </span>
                            </Listbox.Button>
                            <Listbox.Options className="absolute  mt-3 w-full rounded-xl text-gray-400 bg-dark-600  pt-2 z-50 transition-all space-y-3 ">
                                {filterItem.map((item) => (
                                    <Listbox.Option
                                        className=" w-full text-center border-b border-solid border-gray-700 cursor-pointer hover:text-blue-250 pb-2 items-center justify-center  text-base"
                                        key={item.value}
                                        value={item}
                                        disabled={item.unavailable}
                                    >
                                        {item.name}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Listbox>
                    </div>
                    <div className=" relative">
                        <Listbox
              value={selectedItemCategires}
              onChange={(value) => {
                if (value) {
                    setSelectedItemCategories(value)
                }
              }}
            >
              <Listbox.Button className="bg-dark-600  w-full  text-gray-300 transition-all rounded-xl p-3 md:p-3.5 text-lg flex justify-center items-center gap-2 cursor-pointer h-full">
                {categoryLoading ? (
                  <>
                    <Loading type="spin" width={30} />
                  </>
                ) : (
                  <>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 md:w-6 md:h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                        ></path>
                      </svg>
                    </span>
                    <span className="whitespace-nowrap overflow-hidden text-ellipsis max-w-40">
                      {selectedItemCategires.value === "all"
                        ? "دسته بندی ها"
                        : selectedItemCategires.name}
                    </span>
                  </>
                )}
              </Listbox.Button>
              <Listbox.Options className="absolute z-50 mt-3 w-full rounded-xl text-gray-400 bg-dark-600  pt-2 z-1 transition-all space-y-3 ">
                <Listbox.Option
                  className=" w-full text-center  border-b border-solid border-gray-700 cursor-pointer hover:text-blue-250 items-center justify-center pb-2  text-base"
                  value={{ value: "all", name: "همه" }}
                >
                  همه
                </Listbox.Option>
                {filterItemCategories?.map((item: any) => (
                  <Listbox.Option
                    className=" w-full text-center  border-b border-solid border-gray-700 cursor-pointer hover:text-blue-250 items-center justify-center pb-2  text-base"
                    key={item.name}
                    value={item}
                  >
                    {item.name}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Listbox>
                    </div>
                </div>
                <SearchBarCourseLayout />
            </div>
            {/* content courses */}
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
                <ReactCustomPaginate page={page} pageCount={coursesData.pages} onPageChangeHandler={onPageChangeHandler} />
            </div >


        </>
    )
}