"use client";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Listbox } from "@headlessui/react";
import { useSearchInfinite } from "@/libs/hooks/useSearch";
import Loading from "react-loading";
import { Course } from "@/libs/model/course";
import CardCourseSearchLayout from "../course/CardCourseForSearchLayout";
import { Getcategoryies } from "@/libs/services/home/public";
import { Category } from "@/libs/model/category";
const filterItem = [
  { value: "default", name: "پیش فرض", unavailable: false },
  { value: "newest", name: "جدید ترین", unavailable: false },
  { value: "oldest", name: "قدیمی ترین", unavailable: false },
  { value: "popular", name: "محبوب ترین", unavailable: false },
];

export default function SearchBarLayout() {
  const [selectedItem, setSelectedItem] = useState(filterItem[0]);
  const [searchText, setSearchText] = useState<string>("");
  const [selectedItemCategires, setSelectedItemCategories] = useState({
    value: "all",
    name: "همه",
  });
  const router = useRouter();

  const { data, isLoading } = useSearchInfinite({
    key: "filter-courses",
    url: "/courses/filter",
    text: searchText,
  });
  const { data: categories, isLoading: categoryLoading } = Getcategoryies();
  const searchHandel = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    if (selectedItem || selectedItemCategires) {
      router.push(
        `/courses?sort=${selectedItem.value}&category=${selectedItemCategires.value}`
      );
    }
  }, [selectedItem, router, selectedItemCategires]);

  const filterItemCategories = categories?.map((cate: Category) => {
    return { value: cate.title, name: cate.title };
  });

  return (
    <>
      {/* search bar */}
      <div className="  border-b border-solid border-gray-700 pb-3 md:pb-5 lg:pb-8 w-full select-none  flex flex-col mx-2 md:flex-row items-center gap-2 lg:gap-5">
        <div className=" w-full md:w-fit    grid grid-cols-2 md:flex gap-2  justify-between items-center">
          <div className=" relative ">
            <Listbox value={selectedItem} onChange={setSelectedItem}>
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
              onChange={setSelectedItemCategories}
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

        <div className=" w-full relative">
          <div className=" w-full  relative">
            <input
              onChange={searchHandel}
              className="w-full caret-gray-300 outline-none border-2 border-solid border-transparent transition-all focus:border-gray-700 placeholder:text-gray-100 text-gray-200 placeholder:select-none text-sm md:text-base py-3 md:py-3.5 rounded-xl placeholder:text-right pr-12 md:pr-16 pl-3 md:pl-3.5 bg-dark-600"
              placeholder="جست و جو در میان دوره ها..."
              type="text"
            />
            <span className="flex justify-center items-center absolute top-1/2 -translate-y-1/2 border-solid transition-all border-gray-300 pl-2 md:pl-2.5 right-3 md:right-3.5 border-l-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="transition-all w-5 h-5 md:w-6 md:h-6 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                ></path>
              </svg>
            </span>
          </div>
          <div
            className={` ${
              searchText.length > 0 ? "block" : "hidden"
            } absolute w-full z-50 mt-2 rounded-xl shadow-lg bg-dark-600 text-3xl text-gray-100 p-4 lg:p-7`}
          >
            {isLoading ? (
              <div className=" w-full h-full flex justify-center items-center">
                <Loading type="bubbles" color="#fff" />
              </div>
            ) : data?.pages[0]?.length === 0 ? (
              <div className=" text-gray-300 flex flex-col w-full h-full items-center justify-center p-4 gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 md:w-8 md:h-8 transition-colors"
                  fill="currentColor"
                >
                  <path d="M2.978 8.358l-2.978-2.618 8.707-4.74 3.341 2.345 3.21-2.345 8.742 4.639-3.014 2.68.014.008 3 4.115-3 1.634v4.122l-9 4.802-9-4.802v-4.115l1 .544v2.971l7.501 4.002v-7.889l-2.501 3.634-9-4.893 2.978-4.094zm9.523 5.366v7.875l7.499-4.001v-2.977l-5 2.724-2.499-3.621zm-11.022-1.606l7.208 3.918 1.847-2.684-7.231-3.742-1.824 2.508zm11.989 1.247l1.844 2.671 7.208-3.927-1.822-2.498-7.23 3.754zm-9.477-4.525l8.01-4.43 7.999 4.437-7.971 4.153-8.038-4.16zm-2.256-2.906l2.106 1.851 7.16-3.953-2.361-1.657-6.905 3.759zm11.273-2.052l7.076 3.901 2.176-1.935-6.918-3.671-2.334 1.705z"></path>{" "}
                </svg>
                <h2 className="  text-lg text-gray-200">نتیجه ای یافت نشد!</h2>
              </div>
            ) : (
              <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5">
                {data?.pages.map((page) =>
                  page?.map((course: Course) => (
                    <CardCourseSearchLayout key={course?._id} course={course} />
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
