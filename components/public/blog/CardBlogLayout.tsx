'use client'

import { Course } from "@/libs/model/course";
import Link from "next/link";
import promiseJsPhoto from '@/public/images/photo/promiseJs.webp'
import Image from "next/image";
import mePhoto from '@/public/images/me.jpeg'
interface props {

}

export default function CardCourse({ }: props) {
  return (
    <>
      <div className="w-full h-full pb-5 lg:pb-6 relative">
        <div className="w-full  transition-all flex flex-col relative group bg-gray-900 rounded-xl" style={{
          background: `linear-gradient(to left top, rgb(15, 3, 12), rgb(173, 34, 101)`,
        }}>
          <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-1000" style={{
            background: `linear-gradient(to left top, rgb(15, 3, 12), rgb(173, 34, 101)`,
          }}></div>
          <Link href='' className="p-7 lg:p-8 pb-16  lg:pb-20 relative h-full flex flex-col">
            <Image src={promiseJsPhoto} alt='alt' loading="lazy" width={650} height={450} className="aspect-video w-full object-cover rounded-md inline-block mb-6 lg:mb-7 transition-all duration-500 opacity-100" style={{ color: 'transparent;' }} />

            <h3 className="text-base lg:text-xl font-bold text-white transition-colors inline-block text-center leading-relaxed lg:leading-relaxed mb-6 lg:mb-7">آشنایی با Promise.all در جاوااسکریپت</h3>
            <div className="grid grid-cols-3 w-full gap-3 text-white text-xs"><div className="flex flex-col items-center text-center"><span>نویسنده</span><span className="font-bold whitespace-nowrap text-ellipsis overflow-hidden w-full">عرفان یوسفی</span></div><div className="flex flex-col items-center text-center"><span>زمان مطالعه</span><span className="font-bold whitespace-nowrap text-ellipsis overflow-hidden w-full">6 دقیقه</span></div><div className="flex flex-col items-center text-center"><span>دسته بندی</span><span className="font-bold whitespace-nowrap text-ellipsis overflow-hidden w-full">عمومی</span></div></div>
          </Link>


        </div>
        <Image src={mePhoto} alt="alt" draggable="false" loading="lazy" width={80} height={80} decoding="async" data-nimg="1" className="aspect-square flex-none rounded-full object-cover duration-500 opacity-100 w-10 h-10 lg:w-12 lg:h-12 border-2 border-solid absolute right-7 lg:right-8 bottom-0 transition-allborder-gray-400" style={{ color: 'transparent;' }} />
        <div className="flex justify-center items-center gap-1.5 rounded-full absolute left-7 lg:left-8 bottom-0">
          <span className="flex justify-center items-center rounded-full group/save-icon shadow-lg  w-10 h-10 xl:w-12 xl:h-12 bg-dark-600 mq1170transition-all cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 xl:w-6 xl:h-6  text-blue-600 group-hover/save-icon:fill-cnBlue-15/50 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z">
              </path>
            </svg>
          </span>
          <span className="flex justify-center items-center rounded-full group/save-icon shadow-lg  w-10 h-10 xl:w-12 xl:h-12 bg-dark-600 transition-all  cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 xl:w-6 xl:h-6 text-red-500 group-hover/save-icon:fill-red-500/50  mt-0.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path></svg></span></div>
      </div>



    </>
  );
}
