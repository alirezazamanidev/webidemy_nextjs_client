import { Course } from "@/libs/model/course";
import separateWithComma from "@/libs/utils";
import Image from "next/image";
import { FiEdit2 } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import {  TypeItemInFarsi } from "@/libs/utils";
import { useState } from "react";
import DeleteConfreamation from "@/components/shared/confreamtions/DeleteConfreamation";
import { DeleteCourse } from "@/libs/services/admin/course";
import { KeyedMutator } from "swr";
import { toast } from "react-toastify";
import Link from "next/link";
import { Episode } from "@/libs/model/episode";
interface props {
  episode: Episode;
  episodeMuted: KeyedMutator<any>;
}
export default function EpisodeItemLayout({ episode,episodeMuted }: props) {
  const [showDeleteConfrimation, setShowDeleteConfrimation] =
    useState<boolean>(false);
  const deleteHandle = async () => {
    try {
      await DeleteCourse(episode._id);
      await episodeMuted();
      setShowDeleteConfrimation(false);
      toast.success("جلسه مورد نظر با موفقیت حذف شد!");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <tr className="border border-neutral-500  text-white">
      <td className=" hidden">
          {showDeleteConfrimation && (
            <DeleteConfreamation
              title={`حذف جلسه ${episode?.title}`}
              descreaption="آیا از حذف جلسه مورد نظر اطمینان دارید .در صورت تایید اطلاعات دوره باز نخواهد گشت"
              handleTrue={deleteHandle}
              handleCancel={() => setShowDeleteConfrimation(false)}
            />
          )}
        </td>
        <td className="whitespace-nowrap  px-6 py-4 font-medium">
        {episode.number}
        </td>
        <td className="whitespace-nowrap   py-4 ">{episode?.title}</td>
        <td className="whitespace-nowrap  py-4">
          {episode?.season?.title} / {episode?.season?.course?.title}
        </td>
        <td className="whitespace-nowrap  py-4">
         {episode?.time}
        </td>        
        <td className="whitespace-nowrap   py-4">{TypeItemInFarsi(episode?.type)}</td>
        
        <td className="whitespace-nowrap   py-4  ">
          <div className=" pt-4 flex items-center justify-center">
            <Link
              href={`/admin/courses/edit/${episode?._id}`}
              className=" bg-indigo-600 p-3 rounded-full ml-3"
            >
              <FiEdit2 className=" text-white  text-sm " />
            </Link>
            <button
              className=" bg-red-600 p-3  rounded-full"
              onClick={() => setShowDeleteConfrimation(true)}
            >
              <MdDeleteOutline className=" text-white  text-sm" />
            </button>
          </div>
        </td>
       
      </tr>
  
    </>
  );
}
