"use client";
import CommentLayout from "../comments/CommentLayout";
import { FaRegClock } from "react-icons/fa6";
import { Blog } from "@/libs/model/blog";
import { useState } from "react";
import CardInfoAuthor from "../layouts/CardInfoAuthor";
import {TiPencil} from 'react-icons/ti'
import { date } from "@/libs/utils/date";
interface props {
  blog:Blog;
  showBigPage:boolean
}
export default function ContantSinglePageBlogLayout({ blog,showBigPage }: props) {

  return (
    <>
      <main className=" w-full ">
        <div className="bg-dark-600 p-4 lg:p-7 ">
         <div className=" w-full   border-b border-dashed border-gray-600">
         <div className=" flex items-center justify-between ">
            <p className=" text-gray-400 text-base flex items-center gap-2">
              <FaRegClock className=' ' />
            <span>زمان مطالعه :</span>
            <span>{blog?.studyTime}</span>
            </p>
            <p className=" select-none text-blue-400 flex items-center gap-2 text-base">
            <TiPencil />
            <span>{date(blog?.createdAt)}</span>
            </p>
          </div>
          <div className=" border-b border-gray-600 border-dashed mb-4">
            <h2 className="font-bold mt-3 md:mt-4 text-xl md:text-2xl xl:text-3xl text-gray-300 transition-colors pb-6">{blog?.title}</h2>
          </div>

      
            <div className=" text-white" dangerouslySetInnerHTML={{ __html: blog?.description }}></div>
          
          

         </div>

         <div className=" mt-4 flex justify-between items-center">
          <div className=" p-3 bg-gray-700 rounded-xl  text-gray-200 text-xs">
            <p>{blog.category.title}</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <span className="flex justify-center items-center gap-1 bg-blue-800  text-blue-300 text-sm p-1 pl-2 rounded-sm transition-all hover:bg-blue-500  cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-5 h-5 xl:w-6 xl:h-6  text-blue-600 ${true ? 'fill-blue-500' : ''}   group-hover/save-icon:fill-blue-600 `}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z">
                  </path>
                </svg>
                  <span>{blog?.bookMarkedCount}</span>
                  </span><span className="flex justify-center items-center gap-1 bg-red-500/10 text-red-500 text-sm p-1 pl-2 rounded-sm transition-all hover:bg-red-500/20 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-5 h-5 xl:w-6 xl:h-6 text-red-500 ${true ? 'fill-red-600' : ''} group-hover/save-icon:fill-red-500/50  mt-0.5`}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path></svg>
                    <span>{blog.likeCount}</span></span></div>
         </div>
        </div>
       
       <div className=" block  lg:hidden">
        <CardInfoAuthor author={blog?.author}/>
       </div>
       { 
       !showBigPage && <CommentLayout subject={{blog:blog._id}}/>
       }
      
      </main>
    </>
  );
}
