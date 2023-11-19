"use client";
import CommentLayout from "../comments/CommentLayout";
import { FaRegClock } from "react-icons/fa6";
import { Blog } from "@/libs/model/blog";
import CodeBlock from "@/components/shared/codeBlock";
import { CKEditor } from '@ckeditor/ckeditor5-react';
interface props {
  blog:Blog;
}
export default function ContantSinglePageBlogLayout({ blog }: props) {
  const code = `function helloWorld() {
    console.log("Hello, world!");
   }`;
 
  return (
    <>
      <main className=" w-full ">
       
        <div className="bg-dark-600 p-4 lg:p-7">
          <div className=" flex items-center justify-between">
            <p className=" text-gray-400 text-lg flex items-center gap-2">
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
       
          <CommentLayout subject={{ course: blog._id }} />

      </main>
    </>
  );
}
