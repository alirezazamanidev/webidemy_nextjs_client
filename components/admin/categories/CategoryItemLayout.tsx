
import { FiEdit2 } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
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
import { Category } from "@/libs/model/category";
interface props {
  category: Category;
  categoryRefeach: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<any, unknown>>;
}
export default function CategoryItemLayout({ category, categoryRefeach }: props) {
  const [showDeleteConfrimation, setShowDeleteConfrimation] =
    useState<boolean>(false);
  const deleteHandle = async () => {
    try {
      await DeleteCourse(category._id);
      await categoryRefeach();
      setShowDeleteConfrimation(false);
      toast.success("دسته بندی مورد نظر با موفقیت حذف شد!");
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
              title={`حذف دسته بندی ${category?.title}`}
              descreaption="آیا از حذف دسته بندی مورد نظر اطمینان دارید .در صورت تایید اطلاعات دسته بندی باز نخواهد گشت"
              handleTrue={deleteHandle}
              handleCancel={() => setShowDeleteConfrimation(false)}
            />
          )}
        </td>
       
        <td className="whitespace-nowrap   py-4 ">{category?._id}</td>
       
        <td className="whitespace-nowrap   py-4 ">
         {category?.title}
        </td>
        <td className="whitespace-nowrap   py-4 ">
          <div className="  pt-4 flex justify-center">
            <Link
              href={`/admin/courses/edit/${category._id}`}
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
