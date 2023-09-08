import { Course } from "@/libs/model/course";
import separateWithComma from "@/libs/utils";
import { FiEdit2 } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { TypeConditioncourseToFarsi, TypeItemInFarsi } from "@/libs/utils";
import { useState } from "react";
import DeleteConfreamation from "@/components/shared/confreamtions/DeleteConfreamation";
import { DeleteCourse } from "@/libs/services/admin/course";
import { toast } from "react-toastify";
import Link from "next/link";
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from "react-query";
import Image from "next/image";
import ImageComponent from "@/components/shared/ImageComponent";
interface props {
  course: Course;
  courseRefeach: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<any, unknown>>;
}
export default function CourseItemLayout({ course, courseRefeach }: props) {
  const [showDeleteConfrimation, setShowDeleteConfrimation] =
    useState<boolean>(false);
  const deleteHandle = async () => {
    try {
      await DeleteCourse(course._id);
      await courseRefeach();
      setShowDeleteConfrimation(false);
      toast.success("دوره مورد نظر با موفقیت حذف شد!");
    } catch (err) {
      console.log(err);
    }
  };

  let episodeLength = 0;
  course?.seasons.forEach((seasn) => {
    episodeLength += seasn.episodes.length;
  });

  return (
    <>
      <tr className="border border-neutral-500  text-white">
        <td className=" hidden">
          {showDeleteConfrimation && (
            <DeleteConfreamation
              title={`حذف دوره ${course?.title}`}
              descreaption="آیا از حذف دوره مورد نظر اطمینان دارید .در صورت تایید اطلاعات دوره باز نخواهد گشت"
              handleTrue={deleteHandle}
              handleCancel={() => setShowDeleteConfrimation(false)}
            />
          )}
        </td>
        <td className="whitespace-nowrap  px-6 py-4 font-medium">
          <ImageComponent
            url={course?.photos["360"]}
            width={110}
            height={80}
            alt={course?.title}
            className=" object-cover"
          />
        </td>
        <td className="whitespace-nowrap   py-4 ">{course?.title}</td>
        <td className="whitespace-nowrap   py-4 ">{course?.category?.title}</td>

        <td className="whitespace-nowrap  py-4">{course?.teacher?.fullname}</td>
        <td className="whitespace-nowrap  py-4">
          {TypeConditioncourseToFarsi(course?.condition)}
        </td>
        <td className="whitespace-nowrap   py-4">{course?.time}</td>
        <td className="whitespace-nowrap   py-4">{course?.seasons?.length}</td>
        <td className="whitespace-nowrap   py-4">{episodeLength}</td>
        <td className="whitespace-nowrap   py-4">
          {TypeItemInFarsi(course?.type)}
        </td>
        <td className="whitespace-nowrap   py-4 ">
          <span className=" flex items-center justify-center">
            {separateWithComma(course?.price)}
            <span className=" text-gray-300 text-sm mr-2">تومان</span>
          </span>
        </td>
        <td className="whitespace-nowrap   py-4  ">
          <div className=" flex items-center ">
            <Link
              href={`/admin/courses/edit/${course._id}`}
              className=" bg-indigo-600 p-3 rounded-full ml-3"
            >
              <FiEdit2 className=" text-white  text-base " />
            </Link>
            <button
              className=" bg-red-600 p-3  rounded-full"
              onClick={() => setShowDeleteConfrimation(true)}
            >
              <MdDeleteOutline className=" text-white  text-base" />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}
