import GetAllMarkBookedBlogs from "@/libs/services/home/user";
import Link from "next/link";
import Loading from "react-loading";
import CardBlog from "../blog/CardBlogLayout";
import { Blog } from "@/libs/model/blog";


export default function BookMarkBlogsLayout(){
    const {data:bookMarkBlogs,isLoading}=GetAllMarkBookedBlogs();


    return(
        <>
            <div>
     {
      isLoading ?(
        <div className=" flex justify-center">
          <Loading type='bars' color="#fff" className=" text-3xl"/>
        </div>
      ):bookMarkBlogs?.length ===0 ?(
        <div className="w-full my-4 lg:my-7 flex justify-center items-center select-none flex-col gap-4 lg:gap-7">
        <div className="text-xs sm:text-sm md:text-base transition-colors flex flex-col gap-1 md:gap-2 justify-center items-center text-gray-400 dark:text-cgray-600 undefined">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6 md:w-8 md:h-8 transition-colors"
            fill="currentColor"
          >
            <path d="M2.978 8.358l-2.978-2.618 8.707-4.74 3.341 2.345 3.21-2.345 8.742 4.639-3.014 2.68.014.008 3 4.115-3 1.634v4.122l-9 4.802-9-4.802v-4.115l1 .544v2.971l7.501 4.002v-7.889l-2.501 3.634-9-4.893 2.978-4.094zm9.523 5.366v7.875l7.499-4.001v-2.977l-5 2.724-2.499-3.621zm-11.022-1.606l7.208 3.918 1.847-2.684-7.231-3.742-1.824 2.508zm11.989 1.247l1.844 2.671 7.208-3.927-1.822-2.498-7.23 3.754zm-9.477-4.525l8.01-4.43 7.999 4.437-7.971 4.153-8.038-4.16zm-2.256-2.906l2.106 1.851 7.16-3.953-2.361-1.657-6.905 3.759zm11.273-2.052l7.076 3.901 2.176-1.935-6.918-3.671-2.334 1.705z"></path>{" "}
          </svg>
          <span className=" transition-colors text-center">
            هنوز مقاله ای سیو نکردی!
          </span>
        </div>
        <Link target="_blank" href="/courses">
          <button className="relative select-none flex justify-center items-center transition-all rounded-lg py-2 px-2 md:px-3 text-xs md:text-sm  bg-gradient-to-r from-blue-750 to-blue-250  opacity-100 cursor-pointer  from-cnBlue-20 to-cnBlue-15  text-white">
            <span className="transition-allvisible opacity-100">
              مشاهده مقاله ها
            </span>
          </button>
        </Link>
      </div>
      ):(
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            bookMarkBlogs.map((blog:Blog)=>(
              <CardBlog key={blog._id} blog={blog} ShowBookMarkLabel={false}/>
            ))
          }

        </div>
      )
     }
            </div>
        </>
    )
}