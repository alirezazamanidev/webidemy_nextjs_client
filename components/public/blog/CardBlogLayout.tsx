'use client'
import Link from "next/link";
import promiseJsPhoto from '@/public/images/photo/promiseJs.webp'
import Image from "next/image";
import mePhoto from '@/public/images/me.jpeg'
import { Blog } from "@/libs/model/blog";
import ImageComponent from "@/components/shared/ImageComponent";
import AvatarUser from "@/components/shared/AvatarLayout";
import { SavedBlog } from "@/libs/services/home/blog";
import { toast } from "react-toastify";
import useAuth from "@/libs/hooks/useAuth";
import useRefreshToken from "@/libs/hooks/useRefreshToken";
import { useEffect, useState } from "react";
interface props {
  blog: Blog
  ShowBookMarkLabel?:boolean
}

export default function CardBlog({ blog,ShowBookMarkLabel=true }: props) {
  const [hasStatusSavedBlog, setHasStatusSavedBlog] = useState(false);
  const { user, refetch } = useAuth();
  const refreshToken = useRefreshToken();

  const handleToogleSavedBlog = async (e: any) => {
    e.preventDefault();
    await SavedBlog(blog?._id);
    if(hasStatusSavedBlog){
      setHasStatusSavedBlog(false);
      toast.success('سیو خارج شد !')

    }else {
      setHasStatusSavedBlog(true);
      toast.success('سیو شد !')
    }
    await refreshToken();
    await refetch();

  }

  useEffect(()=>{
    if(user?.savedBlogList.includes(blog?._id)){
      setHasStatusSavedBlog(true)
    }
  },[user])


 
  
  return (
    <>
      <div className="w-full h-full  pb-5 lg:pb-6 relative">
        <div className="w-full h-full  transition-all flex flex-col relative group bg-gray-900 rounded-xl" style={{
          background: `linear-gradient(to left top, ${blog?.GradientCardBlog?.fromColor}, ${blog?.GradientCardBlog?.toColor}`,
        }}>
          <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-1000" style={{
            background: `linear-gradient(to left top, ${blog?.GradientCardBlog?.toColor}, ${blog?.GradientCardBlog?.fromColor}`,
          }}></div>
          <Link href={`/blogs/${blog?.slug}`} className="p-7 lg:p-8 pb-16 lg:pb-18 relative h-full flex flex-col">
            <ImageComponent url={blog?.photos['360']} alt={blog?.title} width={650} height={450} className="aspect-video w-full object-cover rounded-md inline-block mb-6 lg:mb-7 transition-all duration-500 opacity-100" />

            <h3 className="text-base lg:text-xl font-bold text-white transition-colors inline-block text-center leading-relaxed lg:leading-relaxed mb-6 lg:mb-7">{blog?.title}</h3>
            <div className="grid grid-cols-3 w-full gap-3 text-white text-xs"><div className="flex flex-col items-center text-center"><span>نویسنده</span><span className="font-bold whitespace-nowrap text-ellipsis overflow-hidden w-full">{blog?.author?.fullname}</span></div><div className="flex flex-col items-center text-center"><span>زمان مطالعه</span><span className="font-bold whitespace-nowrap text-ellipsis overflow-hidden w-full">{blog?.studyTime}</span></div><div className="flex flex-col items-center text-center"><span>دسته بندی</span><span className="font-bold whitespace-nowrap text-ellipsis overflow-hidden w-full">{blog?.category.title}</span></div></div>
          </Link>


        </div>
        <AvatarUser url={blog?.author?.avatar} alt={blog?.author?.fullname} width={80} height={80} className="aspect-square flex-none rounded-full object-cover duration-500 opacity-100 w-10 h-10 lg:w-12 lg:h-12 border-2 border-solid absolute right-7 lg:right-8 bottom-0 transition-allborder-gray-400" />
      {
        ShowBookMarkLabel &&
        (
             <div className="flex justify-center items-center gap-1.5 rounded-full absolute left-7 lg:left-8 bottom-0">
          <span onClick={handleToogleSavedBlog} className="flex justify-center items-center rounded-full group/save-icon shadow-lg  w-10 h-10 xl:w-12 xl:h-12 bg-dark-600 mq1170transition-all cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-5 h-5 xl:w-6 xl:h-6  text-blue-600 ${hasStatusSavedBlog ? 'fill-blue-600' :''}   group-hover/save-icon:fill-blue-600 `}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z">
              </path>
            </svg>
          </span>
          <span className="flex justify-center items-center rounded-full group/save-icon shadow-lg  w-10 h-10 xl:w-12 xl:h-12 bg-dark-600 transition-all  cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 xl:w-6 xl:h-6 text-red-500 group-hover/save-icon:fill-red-500/50  mt-0.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path></svg></span></div>
        )
      }
      </div>



    </>
  );
}
