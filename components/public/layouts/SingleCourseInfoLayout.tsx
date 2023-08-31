"use client";
import { Course } from "@/libs/model/course";
import { TypeItemInFarsi } from "@/libs/utility/TypeForFarsi";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useState } from "react";

interface props {
  course: Course;
}
export default function SingelCourseInfoLayout({ course }: props) {
  const [rating, setRating] = useState(3);

  return (
    <>
      <div className=" bg-dark-600 mr-0 lg:mr-4 rounded-lg shadow-lg text-gray-50 flex items-center justify-between px-5 py-3">
        <h2 className=" text-gray-100 text-2xl">تکمیل ضبط</h2>
        <div className=" flex flex-col  justify-center items-center">
          <Rating
            style={{ maxWidth: 180 }}
            value={rating}
            onChange={setRating}
          />
          <span className=" mt-2">۴.۲ رای از ۲۴</span>
        </div>
      </div>
      <div className=" grid grid-cols-3 gap-4 mr-0 lg:mr-4">
        <div className=" bg-dark-600 rounded-lg text-gray-50 flex flex-col justify-center items-center space-y-1 mt-3 p-4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.1792 23.9333C2.54046 23.9333 0.474609 21.8674 0.474609 12.2287C0.474609 2.59002 2.54046 0.52417 12.1792 0.52417C21.8178 0.52417 23.8837 2.59002 23.8837 12.2287C23.8837 21.8674 21.8178 23.9333 12.1792 23.9333ZM11.2038 6.37644C11.2038 5.83773 11.6405 5.40106 12.1792 5.40106C12.7178 5.40106 13.1545 5.83773 13.1545 6.37644V11.2533H18.0314C18.5701 11.2533 19.0068 11.69 19.0068 12.2287C19.0068 12.7674 18.5701 13.2041 18.0314 13.2041H12.1792C11.6405 13.2041 11.2038 12.7674 11.2038 12.2287V6.37644Z"
              fill="currentColor"
            ></path>
          </svg>
          <span>مدت زمان دوره</span>
          <span>{course.time}</span>
        </div>
        <div className=" bg-dark-600 rounded-lg text-gray-50 flex flex-col justify-center items-center space-y-1 mt-3 p-4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.452148 5.7989C0.452148 10.1426 1.38314 11.0736 5.72688 11.0736C10.0706 11.0736 11.0016 10.1426 11.0016 5.7989C11.0016 1.45516 10.0706 0.52417 5.72688 0.52417C1.38314 0.52417 0.452148 1.45516 0.452148 5.7989Z"
              fill="currentColor"
            ></path>
            <path
              d="M0.452148 18.2664C0.452148 22.6102 1.38314 23.5412 5.72688 23.5412C10.0706 23.5412 11.0016 22.6102 11.0016 18.2664C11.0016 13.9227 10.0706 12.9917 5.72688 12.9917C1.38314 12.9917 0.452148 13.9227 0.452148 18.2664Z"
              fill="currentColor"
            ></path>
            <path
              d="M12.9197 5.7989C12.9197 10.1426 13.8507 11.0736 18.1944 11.0736C22.5382 11.0736 23.4691 10.1426 23.4691 5.7989C23.4691 1.45516 22.5382 0.52417 18.1944 0.52417C13.8507 0.52417 12.9197 1.45516 12.9197 5.7989Z"
              fill="currentColor"
            ></path>
            <path
              d="M12.9197 18.2664C12.9197 22.6102 13.8507 23.5412 18.1944 23.5412C22.5382 23.5412 23.4691 22.6102 23.4691 18.2664C23.4691 13.9227 22.5382 12.9917 18.1944 12.9917C13.8507 12.9917 12.9197 13.9227 12.9197 18.2664Z"
              fill="currentColor"
            ></path>
          </svg>
          <span>تعداد جلسات</span>
          <span>{course.episodes.length}</span>
        </div>
        <div className=" bg-dark-600 rounded-lg text-gray-50 flex flex-col justify-center items-center space-y-1 mt-3 p-4">
          <svg
            
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.57753 1.67007C9.81824 0.0338038 12.2781 0.0338038 13.5188 1.67007L14.5518 3.03246L16.2456 2.79957C18.28 2.51986 20.0193 4.25924 19.7396 6.29356L19.5067 7.98737L20.8691 9.0204C22.5054 10.2611 22.5054 12.721 20.8691 13.9617L19.5067 14.9947L19.7396 16.6885C20.0193 18.7228 18.28 20.4622 16.2456 20.1825L14.5518 19.9496L13.5188 21.312C12.2781 22.9483 9.81824 22.9483 8.57753 21.312L7.5445 19.9496L5.85069 20.1825C3.81636 20.4622 2.07699 18.7228 2.3567 16.6885L2.58958 14.9947L1.2272 13.9617C-0.409067 12.721 -0.409067 10.2611 1.2272 9.0204L2.58958 7.98737L2.3567 6.29356C2.07699 4.25923 3.81637 2.51986 5.85069 2.79957L7.5445 3.03246L8.57753 1.67007ZM15.3819 10.3007C15.7415 9.94114 15.7415 9.3582 15.3819 8.99865C15.0224 8.6391 14.4394 8.6391 14.0799 8.99865L10.1275 12.951L8.93717 11.7607C8.57762 11.4011 7.99468 11.4011 7.63513 11.7607C7.27558 12.1202 7.27558 12.7032 7.63513 13.0627L9.47649 14.9041C9.83604 15.2636 10.419 15.2636 10.7785 14.9041L15.3819 10.3007Z"
              fill="currentColor"
            ></path>
          </svg>
          <span> نوع دوره</span>
          <span>{TypeItemInFarsi(course.type)}</span>
        </div>
      </div>
      <div className=" bg-dark-600  mr-0 lg:mr-4 mt-4 mb-4 lg:mb-0  flex flex-col  items-center rounded-lg px-5 py-7">

        <img  className=" object-cover  rounded-full" width={100} height={100} src="https://avatars.githubusercontent.com/u/101404857?v=4" alt="avatar" />
        <div className=" flex flex-col justify-center items-center">
        <span className=" text-xl text-gray-100 my-1">علیرضا زمانی</span>
        <span className="  text-gray-300">مدرس دوره</span>
        </div>
        <p className=" text-gray-400 text-center max-w-md">ول داستان، طراح گرافیک بودم و ۲ سالی به عنوان طراح مشغول بودم، بعد به برنامه‌نویسی علاقمند شدم و الان بیشتر از ۱۰ ساله که عاشق کدزنی و چالش‌های پروژه‌های مختلفم. به تدریس علاقه خاصی دارم و دوست دارم دانشی که در این راه بدست آوردم را در اختیار دیگران</p>
      </div>
    </>
  );
}
