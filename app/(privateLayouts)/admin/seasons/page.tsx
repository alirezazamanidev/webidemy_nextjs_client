"use client";
import TableSeasonsLayout from "@/components/admin/season/TableSeasonsLayout";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

export default function SeasonsPage() {
  return (
    <>
      <main className=" bg-dark-600 my-5 mx-20 p-4 lg:p-7 rounded-md shadow-md">
        <div className=" flex justify-between items-center mb-6">
          <h2 className=" text-gray-100 text-2xl ">نمایش فصل ها</h2>
          <button className=" flex items-center bg-gradient-to-r from-blue-750 to-blue-250 text-lg rounded-lg text-white p-3">
            <IoMdAdd className=" text-2xl text-white ml-2" />
            <span>ایجاد فصل جدید</span>
          </button>
        </div>
        <TableSeasonsLayout />
      </main>
    </>
  );
}
