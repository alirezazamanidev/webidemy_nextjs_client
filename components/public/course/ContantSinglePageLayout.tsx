"use client";
import { useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import CommentLayout from "../comments/CommentLayout";
import { Course } from "@/libs/model/course";
import SasonLayout from "./season/seasonLayout";
import { Season } from "@/libs/model/seasson";
interface props {
  course: Course;
}
export default function ContantSinglePageLayout({ course }: props) {
  const [activeSection, setActiveSection] = useState("aboutCourseButton");
  const handleSetActive = (to: any) => {
    setActiveSection(to);
  };

  return (
    <>
      <main className=" w-full flex flex-col-reverse xl:flex-row  mt-8 select-none">
        <div className=" w-full xl:w-8/12">
          <nav className=" bg-dark-600 p-4 lg:p-7 rounded-2xl transition-all select-none sticky top-4 lg:top-7 shadow-xl  overflow-auto hideSB">
            <ul className=" flex items-center justify-between w-full space-x-5 xl:space-x-0 space-x-reverse px-3">
              <LinkScroll
                to="aboutCourseButton"
                activeClass="active"
                smooth={true}
                duration={500}
                offset={-120}
                spy={true}
                onSetActive={handleSetActive}
                className="flex justify-center w-fit items-center group "
              >
                <span
                  className={` flex  ml-3 ${
                    activeSection === "aboutCourseButton"
                      ? " opacity-100"
                      : "opacity-0"
                  }`}
                >
                  <span className="rounded-full  w-2 h-2 transition-all  bg-blue-750"></span>
                </span>

                <button
                  className={`transition-all whitespace-nowrap group-hover:text-blue-500 ${
                    activeSection === "aboutCourseButton"
                      ? "text-blue-500"
                      : "text-gray-300"
                  } text-lg md:text-xl`}
                >
                  توضیحات
                </button>
              </LinkScroll>
              <LinkScroll
                to="courseChaptersButton"
                activeClass="active"
                smooth={true}
                offset={-120}
                duration={500}
                spy={true}
                onSetActive={handleSetActive}
                className="flex justify-center w-fit items-center gap-2 group"
              >
                <span
                  className={`flex ${
                    activeSection === "courseChaptersButton"
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                >
                  <span className="rounded-full  w-2 h-2 transition-all  bg-blue-750"></span>
                </span>

                <button
                  className={`transition-all whitespace-nowrap group-hover:text-blue-500 ${
                    activeSection === "courseChaptersButton"
                      ? "text-blue-500"
                      : " text-gray-300"
                  }  text-lg md:text-xl`}
                >
                  فصل های دوره
                </button>
              </LinkScroll>
              <LinkScroll
                to="courseFaqButton"
                offset={-120}
                activeClass="active"
                smooth={true}
                duration={500}
                spy={true}
                onSetActive={handleSetActive}
                className="flex justify-center w-fit items-center gap-2 group"
              >
                <span
                  className={`flex ${
                    activeSection === "courseFaqButton"
                      ? " opacity-100"
                      : "opacity-0"
                  }`}
                >
                  <span className="rounded-full  w-2 h-2 transition-all  bg-blue-750"></span>
                </span>

                <button
                  className={`transition-all whitespace-nowrap group-hover:text-blue-500 ${
                    activeSection === "courseFaqButton"
                      ? "text-blue-500"
                      : "text-gray-300"
                  }  text-lg md:text-xl`}
                >
                  سوالات متداول
                </button>
              </LinkScroll>
              <LinkScroll
                to="commentsButton"
                activeClass="active"
                smooth={true}
                offset={-120}
                duration={500}
                spy={true}
                onSetActive={handleSetActive}
                className="flex justify-center w-fit items-center gap-2 group"
              >
                  <span className={`flex ${activeSection === "commentsButton" ? 'opacity-100' :' opacity-0'}`}>
                    <span className="rounded-full  w-2 h-2 transition-all  bg-blue-750"></span>
                  </span>
               
                <button
                  className={`transition-all whitespace-nowrap group-hover:text-blue-500 ${
                    activeSection === "commentsButton"
                      ? "text-blue-500"
                      : "text-gray-300"
                  }  text-lg md:text-xl`}
                >
                  دیدگاه ها و پرسش ها
                </button>
              </LinkScroll>
            </ul>
          </nav>
          <div
            className=" bg-dark-600 mt-5 p-4 lg:p-7 rounded-2xl "
            id="aboutCourseButton"
          >
            <div>
              <div className=" flex items-center mb-4 mr-3">
                <span className="flex">
                  <span className="rounded-full  w-2 h-2 transition-all  bg-blue-750"></span>
                </span>
                <h2 className=" text-2xl text-blue-500 mr-2">توضیحات</h2>
              </div>
              <p className=" text-gray-200 text-base md:text-lg    leading-loose  mr-4">
                {course?.description}
              </p>
            </div>
          </div>
          <div
            className=" bg-dark-600 mt-5 p-4 lg:p-7 rounded-2xl "
            id="courseChaptersButton"
          >
            <div>
              <div className=" flex items-center mb-4">
                <span className="flex">
                  <span className="rounded-full  w-2 h-2 transition-all  bg-blue-750"></span>
                </span>
                <h2 className=" text-2xl text-blue-500 mr-2">فصل های دوره</h2>
              </div>
              {course?.seasons?.length === 0 ? (
                <p className=" text-xl text-gray-300 mr-5">
                  هنور فصلی قرار نگرفته است!
                </p>
              ) : (
                course?.seasons?.map((season: Season) => (
                  <SasonLayout key={season._id} season={season} />
                ))
              )}
            </div>
          </div>
          <div
            className=" bg-dark-600 mt-5 p-4 lg:p-7 rounded-2xl "
            id="courseFaqButton"
          >
            <div>
              <div className=" flex items-center mb-4">
                <span className="flex">
                  <span className="rounded-full  w-2 h-2 transition-all  bg-blue-750"></span>
                </span>
                <h2 className=" text-2xl text-blue-500 mr-2">سوالات متداول</h2>
              </div>
              <p className=" text-gray-200 text-lg  mr-4">به زودی...</p>
            </div>
          </div>

          <CommentLayout course={course} />
        </div>
        <div className=" w-full xl:w-4/12 ">
          <div className=" grid grid-cols-2 md:grid-cols-4 xl:grid-cols-2   mr-0 xl:mr-8 mb-5 xl:mb-0 px-3 gap-6">
            <div className="flex justify-center items-center flex-col gap-3  bg-dark-600 transition-colors rounded-2xl px-4 lg:px-7 py-6 xl:py-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 lg:w-10 h-8 lg:h-10 transition-colors  text-blue-250"
              >
                <path
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                ></path>
              </svg>
              <p className="text-sm md:text-base text-center transition-colors text-gray-50">
                ۰ دانشجو
              </p>
            </div>
            <div className="flex justify-center items-center flex-col gap-3  bg-dark-600 transition-colors rounded-2xl px-4 lg:px-7 py-6 xl:py-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 lg:w-10 h-8 lg:h-10 transition-colors text-blue-250"
              >
                <path
                  strokeLinejoin="round"
                  d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                ></path>
              </svg>
              <p className="text-sm md:text-base text-center transition-colors text-gray-50">
                ۰ جلسه
              </p>
            </div>
            <div className="flex justify-center items-center flex-col gap-3  bg-dark-600 transition-colors rounded-2xl px-4 lg:px-7 py-6 xl:py-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 lg:w-10 h-8 lg:h-10 transition-colors  text-blue-250"
              >
                <path
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <p className="text-sm md:text-base text-center transition-colors text-gray-50">
                {course?.time} ساعت
              </p>
            </div>
            <div className="flex justify-center items-center flex-col gap-3  bg-dark-600 transition-colors rounded-2xl px-4 lg:px-7 py-6 xl:py-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 lg:w-10 h-8 lg:h-10 transition-colors text-blue-250"
              >
                <path
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                ></path>
              </svg>
              <p className="text-sm md:text-base text-center transition-colors text-gray-50">
                بدون پشتیبانی
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
