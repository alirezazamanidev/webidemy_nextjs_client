import { Course } from "@/libs/model/course";
import separateWithComma from "@/libs/utils";
import Image from "next/image";
import { FiEdit2 } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import fluterPhoto from "@/public/images/fluter.webp";
import mePhoto from "@/public/images/me.jpeg";
import {
  TypeConditioncourseToFarsi,
  TypeItemInFarsi,
} from "@/libs/utils";
import { useState } from "react";
import DeleteConfreamation from "@/components/shared/confreamtions/DeleteConfreamation";
import { DeleteCourse } from "@/libs/services/admin/course";
import { KeyedMutator } from "swr";
import { toast } from "react-toastify";
import Link from "next/link";
interface props {
  course: Course;
  courseMuted: KeyedMutator<any>;
}
export default function CourseItemLayout({ course,courseMuted }: props) {
  const [showDeleteConfrimation, setShowDeleteConfrimation] =
    useState<boolean>(false);
  const deleteHandle = async () => {
    try {
      await DeleteCourse(course._id);
      await courseMuted();
      setShowDeleteConfrimation(false);
      toast.success("دوره مورد نظر با موفقیت حذف شد!");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="w-full border border-dashed py-3 border-gray-500 rounded-xl">
        <div className=" hidden">
          {showDeleteConfrimation && (
            <DeleteConfreamation
              title={`حذف دوره ${course?.title}`}
              descreaption="آیا از حذف دوره مورد نظر اطمینان دارید .در صورت تایید اطلاعات دوره باز نخواهد گشت"
              handleTrue={deleteHandle}
              handleCancel={() => setShowDeleteConfrimation(false)}
            />
          )}
        </div>
        <div className=" flex items-center justify-between px-3">
          <div>
            <Image
              src={`http://localhost:8000${course?.photos[480]}`}
              width={200}
              className="  object-cover rounded-md hidden xl:block"
              height={200}
              alt={course.title}
            />
          </div>
          <div className=" max-w-md">
            <span className=" text-white text-2xl">{course?.title}</span>
          </div>
          <div className=" flex items-center">
            <Image
              src={mePhoto}
              width={40}
              height={40}
              className=" ring-2 ring-white rounded-full object-cover"
              alt="me"
            />
            <span className=" text-white mr-3 text-xl">
              {course.teacher?.fullname}
            </span>
          </div>
          <div>
            <span className=" text-white text-xl">
              {TypeConditioncourseToFarsi(course?.condition)}
            </span>
          </div>
          <div>
            <span className=" text-white text-xl">{course?.time}</span>
          </div>
          <div>
            <span className=" text-white text-xl">
              {TypeItemInFarsi(course?.type)}
            </span>
          </div>
          <div className=" flex items-center">
            <span className=" text-white text-2xl">
              {separateWithComma(course?.price)}
            </span>
            <span className=" text-lg text-gray-300 mr-2">تومان</span>
          </div>
          <div className=" flex  items-center">
            <Link href={`/admin/courses/edit/${course._id}`} className=" bg-indigo-600 p-3 rounded-full ml-3">
              <FiEdit2 className=" text-white text-xl " />
            </Link>
            <button
              className=" bg-red-600 p-3 rounded-full"
              onClick={() => setShowDeleteConfrimation(true)}
            >
              <MdDeleteOutline className=" text-white text-xl" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
