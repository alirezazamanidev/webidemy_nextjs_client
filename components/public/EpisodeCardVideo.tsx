"use client";
import React from "react";
import dynamic from "next/dynamic";
import { Episode } from "@/libs/model/episode";
import Image from "next/image";
import Link from "next/link";
import { AiFillHeart } from "react-icons/ai";
import { FaCommentAlt, FaTelegramPlane } from "react-icons/fa";
import { BsArrowRightShort, BsTwitter } from "react-icons/bs";

import EpisodeItemOfMenu from "./EpisodeItemOfMenu";
import { useRouter } from "next/navigation";
import { Form, Formik } from "formik";
import Loading from "react-loading";
import fileDownload from "js-file-download";
import CallApi from "@/libs/helpers/callApi";
import {
  CreateUrlForDownloadVideoEpisode,
  ShowCanAccessForPayment,
  checkLearning,
} from "@/libs/utility/tools";
import useAuth from "@/libs/hooks/useAuth";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

interface Props {
  episode: Episode;
  episodes: Episode[];
}

export default function EpisodeCardVideo({ episode, episodes }: Props) {
  const router = useRouter();
  const { user, loading } = useAuth();
  const downloadHander = async () => {
    const url = await CreateUrlForDownloadVideoEpisode(episode, user);
    const res = await CallApi().get(url, {
      responseType: "blob",
    });
    fileDownload(res.data, `${episode.slug}.mp4`);
  };

  const canAccess = ShowCanAccessForPayment(episode, user);
  return (
    <div className=" flex flex-col lg:flex-row  w-full  h-full  rounded-lg bg-dark-600  justify-center text-white py-5 px-16">
      <div className=" w-full lg:w-9/12">
        <span
          onClick={() => router.push(`/courses/${episode.course.slug}`)}
          className=" text-lg flex items-center cursor-pointer"
        >
          <BsArrowRightShort className=" text-3xl ml-1" />
          <p>بازگشت به دوره</p>
        </span>
        <h2 className="mr-3 my-3 text-2xl text-gray-200">{episode.title}</h2>
        <div>
          {user ? (
            !canAccess ? (
              <div className="h-full w-full relative bg-red-650">
                <Image
                  width={1000}
                  height={1000}
                  className=" object-cover xl:h-[480px] 2xl:h-[580px] rounded-lg"
                  src={`http://localhost:8000${episode.course.images[720]}`}
                  alt={episode.course.title}
                />

                <div className="absolute top-0 right-0 w-full  h-full bg-dark-500    bg-opacity-25  backdrop-filter backdrop-blur-lg flex justify-center items-center">
                  <div className="space-y-5 px-6 md:py-10 md:h-fit-content h-full text-white text-center md:w-386 w-full  bg-biscay-700 dark:bg-dark-900 dark:bg-opacity-70 flex items-center justify-center flex-col bg-opacity-50 rounded-lg">
                    <span>
                      <svg
                        className="md:w-16 md:h-16 w-14 h-14"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          id="Stroke 1"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2.74976 12C2.74976 5.063 5.06276 2.75 11.9998 2.75C18.9368 2.75 21.2498 5.063 21.2498 12C21.2498 18.937 18.9368 21.25 11.9998 21.25C5.06276 21.25 2.74976 18.937 2.74976 12Z"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          id="Stroke 3"
                          d="M11.9998 8.10498V12"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          id="Stroke 15"
                          d="M11.9955 15.5H12.0045"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeOpacity="0.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>{" "}
                    </span>
                    <p className="md:text-lg text-15 text-white font-semibold w-11/12">
                      عضو ویژه سایت شوید و به شکل رایگان مشاهده کنید یا به شکل
                      نقدی این دوره را خریداری کنید
                    </p>
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <Link
                        href="/"
                        className="bg-white flex  items-center  text-blue-700 py-2 px-4 rounded-lg font-semibold text-15 border-2 border-white transition duration-200 hover:text-white hover:bg-transparent"
                      >
                        عضویت ویژه
                      </Link>
                      <Link
                        href={`/courses/${episode.course.slug}`}
                        className="bg-white flex items-center dark:hover:text-white dark:hover:bg-dark-890 dark:text-dark-900 text-blue-700 py-2 px-4 rounded-lg font-semibold text-15 border-2 border-white transition duration-200 hover:text-white hover:bg-transparent"
                      >
                        خرید نقدی دوره
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="player-wrapper">
                <ReactPlayer
                  url={`http://localhost:8000${episode?.videoUrl}`}
                  config={{
                    file: {
                      attributes: {
                        crossOrigin: "true",
                      },
                    },
                  }}
                  controls
                  className="react-player"
                  width="100%"
                  height="100%"
                />
              </div>
            )
          ) : (
            <div className="md:mb-13  md:h-height-video  ">
              <div className="h-full w-full relative bg-red-650">
                <Image
                  width={1000}
                  height={1000}
                  className=" object-cover xl:h-[480px] 2xl:h-[580px] rounded-lg"
                  src={`http://localhost:8000${episode.course.images[720]}`}
                  alt={episode.course.title}
                />

                <div className="absolute top-0 right-0 w-full dark:bg-opacity-40 h-full bg-dark-550 dark:bg-dark-900   bg-opacity-25  backdrop-filter backdrop-blur-lg flex justify-center items-center">
                  <div className="space-y-5 px-6 md:py-10 md:h-fit-content h-full text-white text-center md:w-386 w-full  bg-biscay-700 dark:bg-dark-900 dark:bg-opacity-70 flex items-center justify-center flex-col bg-opacity-50 rounded-lg">
                    <span>
                      <svg
                        width="40"
                        height="42"
                        viewBox="0 0 40 42"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.4"
                          d="M10.2007 9.42888C10.2007 4.32263 14.4919 0.166382 19.7662 0.166382H30.2501C35.5115 0.166382 39.792 4.31221 39.792 9.40805V32.5664C39.792 37.6747 35.5029 41.833 30.2286 41.833H19.7447C14.4833 41.833 10.2007 37.6851 10.2007 32.5872V30.6289V9.42888Z"
                          fill="white"
                        ></path>
                        <path
                          d="M28.4119 19.8619L22.2288 13.8015C21.5897 13.1765 20.5613 13.1765 19.9244 13.8056C19.2895 14.4348 19.2917 15.4494 19.9286 16.0744L23.3143 19.3931H1.83835C0.939027 19.3931 0.208984 20.1119 0.208984 20.9994C0.208984 21.8848 0.939027 22.6015 1.83835 22.6015H23.3143L19.9286 25.9223C19.2917 26.5473 19.2895 27.5619 19.9244 28.1911C20.2439 28.5057 20.6608 28.664 21.0797 28.664C21.4945 28.664 21.9113 28.5056 22.2288 28.1952L28.4119 22.1348C28.7187 21.8327 28.8922 21.4244 28.8922 20.9994C28.8922 20.5723 28.7187 20.164 28.4119 19.8619"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                    <p className="md:text-lg text-15 text-white font-semibold w-11/12">
                      برای مشاهده دوره ابتدا لازمه وارد بشی یا ثبت‌نام کنی
                    </p>
                    <Link
                      href="/auth/login"
                      className="bg-white flex items-center text-blue-700 py-2 px-4 rounded-lg font-semibold text-15 border-2 border-white transition duration-200 hover:text-white hover:bg-transparent"
                    >
                      <span className="pt-1">ورود و عضویت</span>

                      <span className="mr-2">
                        <svg
                          width="19"
                          height="18"
                          viewBox="0 0 19 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.4"
                            d="M17.3829 6.78063H16.2968V5.71874C16.2968 5.26539 15.9332 4.89575 15.4852 4.89575C15.0382 4.89575 14.6737 5.26539 14.6737 5.71874V6.78063H13.5894C13.1414 6.78063 12.7778 7.15027 12.7778 7.60362C12.7778 8.05696 13.1414 8.4266 13.5894 8.4266H14.6737V9.48943C14.6737 9.94278 15.0382 10.3124 15.4852 10.3124C15.9332 10.3124 16.2968 9.94278 16.2968 9.48943V8.4266H17.3829C17.83 8.4266 18.1945 8.05696 18.1945 7.60362C18.1945 7.15027 17.83 6.78063 17.3829 6.78063Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M6.9095 11.6807C3.25707 11.6807 0.138672 12.2646 0.138672 14.5976C0.138672 16.9297 3.23809 17.5347 6.9095 17.5347C10.561 17.5347 13.6803 16.9508 13.6803 14.6178C13.6803 12.2847 10.5809 11.6807 6.9095 11.6807Z"
                            fill="currentColor"
                          ></path>
                          <path
                            opacity="0.4"
                            d="M6.90984 9.45868C9.39661 9.45868 11.39 7.4396 11.39 4.92078C11.39 2.40196 9.39661 0.381958 6.90984 0.381958C4.42308 0.381958 2.42969 2.40196 2.42969 4.92078C2.42969 7.4396 4.42308 9.45868 6.90984 9.45868Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {user ? (
          episode.type === "cash" ? null : (
            <h2 className=" text-sm md:text-lg my-3 text-green-700">
              ویدیو‌ها رو آنلاین مشاهده کنید و از مزیت‌های مشاهده آنلاین بهرمند
              بشید.
            </h2>
          )
        ) : null}

        <div className=" my-4 ml-10 flex items-center justify-between">
          <div className=" flex items-center">
            {user ? (
              canAccess ? (
                <Formik initialValues={{}} onSubmit={downloadHander}>
                  {({ isSubmitting }) => (
                    <Form>
                      <button
                        type="submit"
                        className=" text-white bg-indigo-800 px-4 py-2 rounded-xl  text-base sm:text-lg md:text-xl ml-6"
                      >
                        {isSubmitting ? (
                          <Loading
                            type="bars"
                            color="#fff"
                            className=" scale-95 text-lg"
                          />
                        ) : (
                          <span>ایجاد لینک دانلود</span>
                        )}
                      </button>
                    </Form>
                  )}
                </Formik>
              ) : null
            ) : null}

            <span className=" text-xl text-gray-300 flex items-center ml-2">
              <p className=" ml-1">5</p>
              <AiFillHeart />
            </span>
            <span className=" text-xl text-gray-300 flex items-center">
              <p className=" ml-1">8</p>
              <FaCommentAlt />
            </span>
          </div>
          <div className=" hidden  md:flex text-lg items-center space-x-3 space-x-reverse">
            <span className="  text-gray-300">اشتراک گزاری</span>
            <FaTelegramPlane />
            <BsTwitter />
          </div>
        </div>
      </div>
      <div className=" w-full lg:w-3/12  max-h-[300px]  lg:max-h-[370px] xl:max-h-[470px]  2xl:max-h-[580px]  bg-gray-800 px-2 py-1 rounded-lg  overflow-y-auto   lg:mr-0 mt-10 lg:mt-20 space-y-1 ">
        {episodes.map((episode) => (
          <EpisodeItemOfMenu key={episode._id} episode={episode} />
        ))}
      </div>
    </div>
  );
}
