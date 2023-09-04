
import { FiEdit2 } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

import { useState } from "react";

import { KeyedMutator } from "swr";

import Link from "next/link";
import { Season } from "@/libs/model/seasson";
interface props {
  season: Season;
  seasonMuted: KeyedMutator<any>;
}
export default function SeasonItemLayout({ season, seasonMuted }: props) {
  const [showDeleteConfrimation, setShowDeleteConfrimation] =
    useState<boolean>(false);

  

  return (
    <>
      <tr className="border border-neutral-500  text-white my-2"
      style={{
        background:`${season.course?.gradientColorCard?.toColor}`
      }}
      >
        <td className=" hidden">
          {/* {showDeleteConfrimation && (
            <DeleteConfreamation
              title={`حذف فصل ${course?.title}`}
              descreaption="آیا از حذف دوره مورد نظر اطمینان دارید .در صورت تایید اطلاعات دوره باز نخواهد گشت"
              handleTrue={deleteHandle}
              handleCancel={() => setShowDeleteConfrimation(false)}
            />
          )} */}
        </td>

        <td className="whitespace-nowrap   py-4 ">{season?.number}</td>
        <td className="whitespace-nowrap  py-4">{season?.title}</td>
        <td className="whitespace-nowrap  py-4">
          <Link href={`/${season?.course?.slug}`}>{season?.course?.title}</Link>
        </td>
      
        <td className="whitespace-nowrap   py-4 ">
          <span className=" flex items-center justify-center">6</span>
        </td>
        <td className="whitespace-nowrap   py-4  ">
          <div className=" pt-4 flex items-center justify-center">
            <Link
              href={`/admin/courses/edit/${season._id}`}
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
