"use client";

import ImageComponent from "@/components/shared/ImageComponent";
import { Blog } from "@/libs/model/blog";
import { IoClose } from "react-icons/io5";
import CardInfoAuthor from "../layouts/CardInfoAuthor";
import ContantSinglePageBlogLayout from "./ContantSinglePageBlogLayout";
import { useState } from "react";
interface props {
  blog: Blog;
}
export default function SingleBlogPage({ blog }: props) {
  const [showBigPage, setShowBigPage] = useState<boolean>(false);
  return (
    <>
      {
        showBigPage && (
          <div onClick={()=>setShowBigPage(false)} className=" flex justify-center w-full my-4">
            <span className=" bg-dark-600 rounded-full p-4">
              <IoClose className="text-blue-600 text-2xl" />
            </span>
          </div>
        )
      }

      <div className={`relative grid   grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-7`}>

        <div className={`${showBigPage ? 'col-span-4' : 'col-span-3'} mx-4`}>
          <div className="w-full p-4 rounded-lg lg:p-7 relative overflow-hidden" style={{
            background: `linear-gradient(to left top, ${blog?.GradientCardBlog?.fromColor}, ${blog?.GradientCardBlog?.toColor}`,
          }}>
            <div className="absolute inset-0 animate-infinite-fade rounded-t-2xl" style={{
              background: `linear-gradient(to left top, ${blog?.GradientCardBlog?.toColor}, ${blog?.GradientCardBlog?.fromColor}`,
            }}></div>
            <ImageComponent url={blog.photos['1080']} alt={blog?.title} width={1700} height={170} className="w-full aspect-video object-cover rounded-lg relative transition-all duration-500 opacity-100" />
          </div>
          <ContantSinglePageBlogLayout blogData={blog} showBigPage={showBigPage} />
     
        </div>
        {
          !showBigPage && (
            <div className="flex flex-col gap-4 lg:col-span-1 lg:gap-7">
       
              <div className="p-4 lg:p-7 bg-dark-600 transition-all rounded-2xl sticky top-4 lg:top-7  z-50  hidden lg:block">
                <button onClick={() => setShowBigPage(true)} className="relative select-none flex justify-center items-center transition-all w-full rounded-lg px-4 md:px-6 py-2 md:py-3 gap-2 text-sm lg:text-base hover:ring-8 ring-cnBlue-15/30 opacity-100 cursor-pointer  from-blue-350 to-blue-750 bg-gradient-to-r text-white"><span className="transition-allvisible opacity-100">بزرگ نمایی</span><span className="transition-all visible opacity-100"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path></svg></span><span className="h-6 lg:h-7 flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all invisible opacity-0"><span className="styles_bulletLoading__gxMJz"><span className="bg-white"></span><span className="bg-white"></span><span className="bg-white"></span></span></span></button></div>
                
                <div className=" hidden lg:block">
                <CardInfoAuthor author={blog?.author} />

                </div>

            </div>
          )
        }
    

      </div>
    </>
  );
}
