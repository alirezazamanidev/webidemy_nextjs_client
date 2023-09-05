import TableCoursesLayout from "@/components/admin/courses/TableCoursesLayout";
import Link from "next/link";
import { IoMdAdd } from "react-icons/io";

const CoursesPage = () => {
  return (
    <>
      <main className=" bg-dark-600 my-5 mx-10 p-4  rounded-md shadow-md">
        <div className=" flex justify-between items-center mb-6">
          <h2 className=" text-gray-100 text-2xl ">نمایش فصل ها</h2>
          <Link href='/admin/courses/create' className=" flex items-center bg-gradient-to-r from-blue-750 to-blue-250 text-base md:text-lg rounded-lg text-white p-3">
            <IoMdAdd className=" text-2xl text-white ml-2" />
            <span>ایجاد دوره جدید</span>
          </Link>
        </div>
        <TableCoursesLayout />
      </main>
    </>
  );
};

export default CoursesPage;
