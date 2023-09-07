"use client";

import { useSearchParams } from "next/navigation";

import { useEffect, useState } from "react";
import Loading from "react-loading";
import { Course } from "@/libs/model/course";
import EmptyIcon from "@/components/shared/EmptyIcon";
import PaginateItem from "@/components/shared/layouts/PaginateItem";
import { Category } from "@/libs/model/category";
import CategoryItemLayout from "./CategoryItemLayout";
import { GetCategories } from "@/libs/services/admin/category";
export default function TableCategoriesLayout() {
  const [page, setPage] = useState<number>(1);
  const searchParams = useSearchParams();

  const { data, isLoading, refetch } = GetCategories(page, 12);

  const querypage = searchParams.get("page");
  useEffect(() => {
    if (querypage) setPage(parseInt(querypage));
  }, [querypage]);
  return (
    <>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              {isLoading ? (
                <div className=" w-full flex   items-center px-3 py-4">
                  <Loading
                    type="spin"
                    color="#fff"
                    className="  text-center"
                    width={50}
                    height={50}
                  />
                  <h2 className=" text-xl text-gray-300 mr-3">
                    در حال دریافت اطلاعات ...
                  </h2>
                </div>
              ) : data?.data?.length === 0 ? (
                <div className=" w-full flex flex-col border border-dashed rounded-lg border-gray-600 p-3 justify-center items-center">
                  <h2 className=" text-3xl text-gray-500 mb-4">
                    دسته بندی ای جهت نمایش وجود ندارد
                  </h2>
                  <EmptyIcon className=" w-80" />
                </div>
              ) : (
                <table className="min-w-full text-center text-sm font-light">
                  <thead className="border-b  bg-gradient-to-r from-blue-750 to-blue-800 font-medium text-white border-neutral-500">
                    <tr>
                      <th scope="col" className=" px-6 py-4">
                        شماره دسته بندی
                      </th>
                      <th scope="col" className=" px-6 py-4">
                        {" "}
                        عنوان دسنه بندی
                      </th>

                      <th scope="col" className=" px-6 py-4">
                        {" "}
                        تنظیمات
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {data?.data?.map((cate: Category) => (
                      <CategoryItemLayout
                        key={cate._id}
                        category={cate}
                        categoryRefeach={refetch}
                      />
                    ))}
                  </tbody>
                </table>
              )}
            </div>
            <PaginateItem
              page={data?.page}
              pages={data?.pages}
              url="/admin/categories"
            />
          </div>
        </div>
      </div>
    </>
  );
}
