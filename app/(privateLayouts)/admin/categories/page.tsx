"use client";
import TableCategoriesLayout from "@/components/admin/categories/TableCategoriesLayout";
import TableCoursesLayout from "@/components/admin/courses/TableCoursesLayout";
import CreateCategoryForm from "@/libs/forms/admin/category/createform";
import EditCategoryForm from "@/libs/forms/admin/category/editform";
import {
  GetCategories,
  GetSingleCategory,
} from "@/libs/services/admin/category";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";

const CategoriesPage = () => {
  const [showInnercategoryForm, setShowInnercategoryForm] =
    useState<boolean>(false);
  const [cateId, setCateId] = useState<string>("");
  const searchParams = useSearchParams();

  const queryeditCateId = searchParams.get("edit");

  const { data, isError, isLoading } = GetSingleCategory(cateId);
  useEffect(() => {
    if (queryeditCateId) {
      setCateId(queryeditCateId);
    }
  }, [queryeditCateId]);
  const { refetch } = GetCategories(1, 12);
  return (
    <>
      {cateId && (
        <>
          {isLoading ? (
            <h2>loading ...</h2>
          ) : (
            <EditCategoryForm
              categoryRefech={refetch}
              cate={data}
              handleCancel={() => setCateId("")}
            />
          )}
        </>
      )}
      {showInnercategoryForm && (
        <CreateCategoryForm
          categoryRefech={refetch}
          setshowform={setShowInnercategoryForm}
          handleCancel={() => setShowInnercategoryForm(false)}
        />
      )}
      <main className=" bg-dark-600 my-5 mx-10 p-4  rounded-md shadow-md">
        <div className=" flex justify-between items-center mb-6">
          <h2 className=" text-gray-100 text-2xl ">نمایش دسته بندی ها</h2>
          <button
            onClick={() => setShowInnercategoryForm(true)}
            className=" flex items-center bg-gradient-to-r from-blue-750 to-blue-250 text-base md:text-lg rounded-lg text-white p-3"
          >
            <IoMdAdd className=" text-2xl text-white ml-2" />
            <span>ایجاد دسنه بندی جدید</span>
          </button>
        </div>
        <TableCategoriesLayout />
      </main>
    </>
  );
};

export default CategoriesPage;
