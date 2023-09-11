"use client";

import TableCommentApprovedLayout from "@/components/admin/comments/TableCommentApprovedLayout";
import Link from "next/link";
import { BiShow } from "react-icons/bi";
const CommentPage = () => {
  return (
    <>

      <main className=" bg-dark-600 my-5 mx-10 p-4  rounded-md shadow-md">
        <div className=" flex justify-between items-center mb-6">
          <h2 className=" text-gray-100 text-2xl ">نمایش کامنت های تایید شده</h2>
          <Link
          href='/admin/comments'
            
            className=" flex items-center bg-gradient-to-r from-blue-750 to-blue-250 text-base md:text-lg rounded-lg text-white p-3"
          >
            <BiShow className=" text-2xl text-white ml-2" />
            <span> نمایش کامت های تایید نشده</span>
          </Link>
        </div>
        <TableCommentApprovedLayout />
      </main>
    </>
  );
};

export default CommentPage;
