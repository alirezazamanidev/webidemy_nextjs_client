"use client";
import TableCategoriesLayout from "@/components/admin/categories/TableCategoriesLayout";
import Link from "next/link";

import { IoMdAdd } from "react-icons/io";

const CategoriesPage = () => {
  return (
    <>

      <main className=" bg-dark-600 my-5 mx-10 p-4  rounded-md shadow-md">
        <div className=" flex justify-between items-center mb-6">
          <h2 className=" text-gray-100 text-2xl ">نمایش دسته بندی ها</h2>
          <Link
          href='/admin/categories/create'
            
            className=" flex items-center bg-gradient-to-r from-blue-750 to-blue-250 text-base md:text-lg rounded-lg text-white p-3"
          >
            <IoMdAdd className=" text-2xl text-white ml-2" />
            <span>ایجاد دسنه بندی جدید</span>
          </Link>
        </div>
        <TableCategoriesLayout />
      </main>
    </>
  );
};

export default CategoriesPage;
