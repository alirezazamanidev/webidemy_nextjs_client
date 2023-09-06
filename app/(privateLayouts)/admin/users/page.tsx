import TableCoursesLayout from "@/components/admin/courses/TableCoursesLayout";
import TableUsersLayout from "@/components/admin/users/TableUserslayout";
import Link from "next/link";
import { IoMdAdd } from "react-icons/io";

const CoursesPage = () => {
  return (
    <>
      <main className=" bg-dark-600 my-5 mx-10 p-4  rounded-md shadow-md">
        <div className=" flex justify-between items-center mb-6">
          <h2 className=" text-gray-100 text-2xl ">نمایش کاربران</h2>
          
        </div>
        <TableUsersLayout />
      </main>
    </>
  );
};

export default CoursesPage;
