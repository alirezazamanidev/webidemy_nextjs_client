"use client";
import TableCategoriesLayout from "@/components/admin/categories/TableCategoriesLayout";
import TableCoursesLayout from "@/components/admin/courses/TableCoursesLayout";
import CreateCategoryForm from "@/libs/forms/admin/category/createform";
import { GetCategories } from "@/libs/services/admin/category";
import Link from "next/link";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

const CategoriesPage = () => {
  const [showInnercategoryForm, setShowInnercategoryForm] =
    useState<boolean>(false);

  const { refetch } = GetCategories(1, 12);
  return (
    <>
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
