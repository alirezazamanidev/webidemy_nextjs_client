"use client";
import Image from "next/image";
import meImage from "@/public/images/me.jpeg";
import { Comment } from "@/libs/model/comment";
import ImageComponent from "@/components/shared/ImageComponent";
interface props {
  comment:Comment
}
export default function UserCommentLayout({ comment }: props) {
    console.log(comment);
    
    
  return (
    <div>
<div className=" border border-dashed border-gray-400 mt-5 rounded-lg p-4 lg:p-7">
      <div className=" flex items-center  justify-start">
        <div>
          <ImageComponent
            url={comment.user.avatar}
            width={300}
            height={300}
            className=" aspect-square rounded-full object-cover  transition-all duration-500 opacity-100 w-10 h-10 md:w-12 md:h-12 min-w-10 md:min-w-12"
            alt="me"
          />
        </div>
        <div className=" mr-3 flex flex-col items-center ">
          <span className=" text-base text-gray-100 mb-2">{comment?.user?.fullname}</span>
          <span className=" text-sm text-gray-300">سه روز پیش</span>
        </div>
      </div>
      <div>
        <p className=" text-gray-400 text-base mt-4">
          {
            comment.comment
          }
        </p>
      </div>

    </div>
    {
        comment.comments.map((comment:Comment)=>(
            <div key={comment._id} className=" bg-gray-650 p-4 sm:p-5 my-4 rounded-lg mr-6 sm:mr-10 ">
            <div className=" flex items-center  justify-start">
              <div>
                <ImageComponent
                  url={comment.user.avatar}
                  width={300}
                  height={300}
                  className=" aspect-square rounded-full object-cover  transition-all duration-500 opacity-100 w-10 h-10 md:w-12 md:h-12 min-w-10 md:min-w-12"
                  alt="me"
                />
              </div>
              <div className=" mr-3 flex flex-col items-center ">
                <span className=" text-base text-gray-100 mb-2">{comment?.user?.fullname}</span>
                <span className=" text-sm text-gray-300">سه روز پیش</span>
              </div>
              
            </div>
            <div className=" px-4">
              <p className=" text-gray-200 text-base mt-4">
                {
                  comment.comment
                }
              </p>
            </div>
            </div>
      
        ))
    }

 
    </div>
    
  );
}
