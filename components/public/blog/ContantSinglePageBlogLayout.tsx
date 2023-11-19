"use client";
import CommentLayout from "../comments/CommentLayout";
import { FaRegClock } from "react-icons/fa6";
import { Blog } from "@/libs/model/blog";
import { useState } from "react";
import CardInfoAuthor from "../layouts/CardInfoAuthor";

interface props {
  blog:Blog;
  showBigPage:boolean
}
export default function ContantSinglePageBlogLayout({ blog,showBigPage }: props) {

  return (
    <>
      <main className=" w-full ">
        <div className="bg-dark-600 p-4 lg:p-7">
          <div className=" flex items-center justify-between">
            <p className=" text-gray-400 text-base flex items-center gap-2">
              <FaRegClock className=' ' />
            <span>زمان مطالعه :</span>
            <span>{blog?.studyTime}</span>
            </p>
          </div>
          <div className=" border-b border-gray-600 border-dashed">
            <h2 className="font-bold mt-3 md:mt-4 text-xl md:text-2xl xl:text-3xl text-gray-300 transition-colors pb-6">{blog?.title}</h2>
          </div>

      
            <div className=" text-white" dangerouslySetInnerHTML={{ __html: blog?.description }}></div>
          
          
        </div>
       
       <div className=" block  lg:hidden">
        <CardInfoAuthor author={blog?.author}/>
       </div>
       { 
       !showBigPage && <CommentLayout subject={{course:blog._id}}/>
       }
      
      </main>
    </>
  );
}
