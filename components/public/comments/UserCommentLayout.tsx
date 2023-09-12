"use client";
import Image from "next/image";

import { Comment } from "@/libs/model/comment";
import ImageComponent from "@/components/shared/ImageComponent";
import { DateFromNow } from "@/libs/utils/date";
import AvatarUser from "@/components/shared/AvatarLayout";
interface props {
  comments: Comment[];
}
export default function UserCommentLayout({ comments }: props) {
  return (
    <>
      {comments?.length === 0 ? (
        <div className=" flex w-full flex-col   justify-center  items-center mt-10 lg:mt-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6 md:w-8 md:h-8 transition-colors text-gray-300 mb-2"
            fill="currentColor"
          >
            <path d="M2.978 8.358l-2.978-2.618 8.707-4.74 3.341 2.345 3.21-2.345 8.742 4.639-3.014 2.68.014.008 3 4.115-3 1.634v4.122l-9 4.802-9-4.802v-4.115l1 .544v2.971l7.501 4.002v-7.889l-2.501 3.634-9-4.893 2.978-4.094zm9.523 5.366v7.875l7.499-4.001v-2.977l-5 2.724-2.499-3.621zm-11.022-1.606l7.208 3.918 1.847-2.684-7.231-3.742-1.824 2.508zm11.989 1.247l1.844 2.671 7.208-3.927-1.822-2.498-7.23 3.754zm-9.477-4.525l8.01-4.43 7.999 4.437-7.971 4.153-8.038-4.16zm-2.256-2.906l2.106 1.851 7.16-3.953-2.361-1.657-6.905 3.759zm11.273-2.052l7.076 3.901 2.176-1.935-6.918-3.671-2.334 1.705z"></path>{" "}
          </svg>
          <span className=" text-gray-400 text-lg">
            هیج کامنتی ثبت نشده است
          </span>
        </div>
      ) : (
        comments?.map((comment) => (
          <div key={comment._id}>
            <div className=" border border-dashed border-gray-400 mt-5 rounded-lg p-4 lg:p-7">
              <div className=" flex items-center  justify-start">
                <div>
                  <AvatarUser
                    url={comment?.user?.avatar}
                    width={300}
                    height={300}
                    className=" aspect-square rounded-full object-cover  transition-all duration-500 opacity-100 w-10 h-10 md:w-12 md:h-12 min-w-10 md:min-w-12 border-2 border-white"
                  />
                </div>
                <div className=" mr-3 flex flex-col items-center ">
                  <span className=" text-base text-gray-100 mb-2">
                    {comment?.user?.fullname}
                  </span>
                  <span className=" text-sm text-gray-300">
                    {DateFromNow(comment?.createdAt)}
                  </span>
                </div>
              </div>
              <div>
                <p className=" text-gray-400 text-base mt-4">
                  {comment.comment}
                </p>
              </div>
            </div>
            {comment.comments.map((comment: Comment) => (
              <div
                key={comment._id}
                className=" bg-gray-650 p-4 sm:p-5 my-4 rounded-lg mr-6 sm:mr-10 "
              >
                <div className=" flex items-center  justify-start">
                  <div>
                    <AvatarUser
                      url={comment?.user?.avatar}
                      width={300}
                      height={300}
                      className=" aspect-square rounded-full object-cover  transition-all  duration-500 opacity-100 w-10 h-10 md:w-12 md:h-12 min-w-10 md:min-w-12  border-2 border-white"
                    />
                  </div>
                  <div className=" mr-3 flex flex-col items-center ">
                    <span className=" text-base text-gray-100 mb-2">
                      {comment?.user?.fullname}
                    </span>
                    <span className=" text-sm text-gray-300">
                      {DateFromNow(comment?.createdAt)}
                    </span>
                  </div>
                </div>
                <div className=" px-4">
                  <p className=" text-gray-200 text-base mt-4">
                    {comment.comment}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))
      )}
    </>
  );
}
