import { MdDeleteOutline } from "react-icons/md";
import { useState } from "react";
import DeleteConfreamation from "@/components/shared/confreamtions/DeleteConfreamation";
import { toast } from "react-toastify";
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from "react-query";
import { Comment } from "@/libs/model/comment";
import { AiOutlineComment } from "react-icons/ai";
import {
  DeleteComment,
  SendAnswerComment,
} from "@/libs/services/admin/comment";
import Link from "next/link";
import AnswredCommentForm from "./answredCommentForm";
import { CallApi } from "@/libs/helpers/callApi";
interface props {
  comment: Comment;
  commentRefeach: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<any, unknown>>;
}
export default function CommentItemLayout({ comment, commentRefeach }: props) {
  const [showDeleteConfrimation, setShowDeleteConfrimation] =
    useState<boolean>(false);
  const [showAnswerCommentForm, setShowAnswerCommentForm] =
    useState<boolean>(false);
  const deleteHandle = async () => {
    try {
      await DeleteComment(comment._id);
      await commentRefeach();
      setShowDeleteConfrimation(false);
      toast.success(" کامنت مورد نظر با موفقیت حذف شد!");
    } catch (err) {
      console.log(err);
    }
  };
  const handleAnserComment = async (values: any) => {
    await SendAnswerComment(values);
    await commentRefeach();
    setShowAnswerCommentForm(false);
    toast.success("عملیات مورد نظر با موفقیت انجام شد");
  };
  return (
    <>
      <tr className="border border-neutral-500  text-white">
        <td className=" hidden">
          {showDeleteConfrimation && (
            <DeleteConfreamation
              title={`حذف کامنت`}
              descreaption="آیا از حذف کامنت مورد نظر اطمینان دارید؟"
              handleTrue={deleteHandle}
              handleCancel={() => setShowDeleteConfrimation(false)}
            />
          )}
        </td>
        <td className=" hidden">
          {showAnswerCommentForm && (
            <AnswredCommentForm
              HandleSubmit={handleAnserComment}
              comment={comment}
              handleCancel={() => setShowAnswerCommentForm(false)}
            />
          )}
        </td>

        <td className="whitespace-nowrap   py-4 ">{comment?.user?.fullname}</td>

        <td className=" text-gray-100 hover:text-blue-750  cursor-pointer   py-4 ">
          <Link target="_blank" href={`/courses/${comment?.course?.slug}`}>
            {comment?.course?.title}
          </Link>
        </td>
        <td className="   py-4  ">{comment?.comment}</td>
        <td className="whitespace-nowrap   py-4 ">
          <div className="  pt-4 flex justify-center gap-3">
            {!comment.approved && (
              <button
                className=" bg-blue-350 p-3  rounded-full"
                onClick={() => setShowAnswerCommentForm(true)}
              >
                <AiOutlineComment className=" text-white  text-base" />
              </button>
            )}
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
