import TableCoursesLayout from "@/components/admin/courses/TableCoursesLayout";
import TableEpisodesLayout from "@/components/admin/episodes/TableEpisodeLayout";
import { IoMdAdd } from "react-icons/io";

const CoursesPage = () => {
  return (
    <>
      <main className=" bg-dark-600 my-5 mx-10 p-4  rounded-md shadow-md">
        <div className=" flex justify-between items-center mb-6">
          <h2 className=" text-gray-100 text-2xl ">نمایش جلسات </h2>
          <button className=" flex items-center bg-gradient-to-r from-blue-750 to-blue-250  text-base md:text-lg rounded-lg text-white p-3">
            <IoMdAdd className=" text-2xl text-white ml-2" />
            <span>ایجاد جلسه جدید</span>
          </button>
        </div>
        <TableEpisodesLayout />
      </main>
    </>
  );
};

export default CoursesPage;
