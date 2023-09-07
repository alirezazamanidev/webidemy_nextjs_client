import { FiEdit2 } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

import { useState } from "react";


import Link from "next/link";
import { Season } from "@/libs/model/seasson";
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from "react-query";
import DeleteConfreamation from "@/components/shared/confreamtions/DeleteConfreamation";
import { DeleteSeason } from "@/libs/services/admin/season";
import { toast } from "react-toastify";
interface props {
  season: Season;
  seasonRefeash: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<any, unknown>>;
}
export default function SeasonItemLayout({ season, seasonRefeash }: props) {
  const [showDeleteConfrimation, setShowDeleteConfrimation] =
    useState<boolean>(false);

  const deleteHandle = async () => {
    await DeleteSeason(season._id);
    await seasonRefeash();
    toast.success("فصل مورد نطر با موفقیت حذف شد!");
  };

  return (
    <>
      <tr
        className="border border-neutral-500  text-white my-2"
        style={{
          background: `${season.course?.gradientColorCard?.toColor}`,
        }}
      >
        <td className=" hidden">
          {showDeleteConfrimation && (
            <DeleteConfreamation
              title={`حذف فصل ${season?.title}`}
              descreaption="آیا از حذف فصل مورد نظر اطمینان دارید .در صورت تایید اطلاعات فصل باز نخواهد گشت"
              handleTrue={deleteHandle}
              handleCancel={() => setShowDeleteConfrimation(false)}
            />
          )}
        </td>

        <td className="whitespace-nowrap   py-4 ">{season?.number}</td>
        <td className="whitespace-nowrap  py-4">{season?.title}</td>
        <td className="whitespace-nowrap  py-4">
          <Link href={`/${season?.course?.slug}`}>{season?.course?.title}</Link>
        </td>

        <td className="whitespace-nowrap   py-4 ">
          <span className=" flex items-center justify-center">
            {season?.episodes?.length}
          </span>
        </td>
        <td className="whitespace-nowrap   py-4  ">
          <div className="  flex items-center justify-center">
            <Link
              href={`/admin/seasons/edit/${season?._id}`}
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
