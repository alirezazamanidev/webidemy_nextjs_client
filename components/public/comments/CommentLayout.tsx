"use client";
import CommentTextLayout from "./CommentTextLayout";
import { useState } from "react";
import useAuth from "@/libs/hooks/useAuth";
import { toast } from "react-toastify";
import UserCommentLayouts from "./UserCommentLayout";

export default function CommentLayout() {
  const [ShowCommentText, setShowCommentText] = useState<boolean>(false);
  const { user } = useAuth();
  return (
    <>
      <div
        className="bg-dark-600 mt-5 p-4 lg:p-7 rounded-2xl"
        id="commentsButton"
      >
        <div className="flex items-center justify-between">
          <div className=" flex items-center my-3">
            <span className="flex ml-2">
              <span className="rounded-full  w-2 h-2 transition-all  bg-blue-750"></span>
            </span>
            <h2 className=" text-2xl text-blue-500">دیدگاه و پرسش</h2>
          </div>
          <div className=" ">
            <button
              onClick={() => {
                if (!user) {
                  toast.error("برای ارسال نظر ابتدا وارد سایت شوید!");
                  return;
                }
                setShowCommentText(true);
              }}
              className={`${
                ShowCommentText ? "hidden" : ""
              } text-gray-50  bg-gradient-to-r from-blue-750 to-blue-250 hover:bg-gray-900 border flex items-center  border-indigo-600 py-2 px-2 rounded-lg text-base`}
            >
              افزودن دیدگاه
            </button>
          </div>
        </div>
        <div>{ShowCommentText && <CommentTextLayout />}</div>

        <UserCommentLayouts />
      </div>
    </>
  );
}
