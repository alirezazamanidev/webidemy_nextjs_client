"use client";

import { useSearchParams } from "next/navigation";
import CourseItemLayout from "./EpisodeItemLayout";
import useSWR from "swr";
import { useEffect, useState } from "react";
import { getCourses } from "@/libs/services/admin/course";
import Loading from "react-loading";
import { Course } from "@/libs/model/course";
import EmptyIcon from "@/components/shared/EmptyIcon";
import PaginateItem from "@/components/shared/layouts/PaginateItem";
import { GetEpisodes } from "@/libs/services/admin/episode";
import { Episode } from "@/libs/model/episode";

export default function TableEpisodesLayout() {
  const [page, setPage] = useState<number>(1);
  const searchParams = useSearchParams();

  const { data, isLoading, mutate } = useSWR(
    { url: "/admin/episodes", page },
    GetEpisodes
  );
  console.log(data);
  

  const querypage = searchParams.get("page");
  useEffect(() => {
    if (querypage) setPage(parseInt(querypage));
  }, [querypage]);
  return (
    <>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              {isLoading ? (
                <div className=" w-full flex   items-center px-3 py-4">
                  <Loading
                    type="spin"
                    color="#fff"
                    className="  text-center"
                    width={50}
                    height={50}
                  />
                  <h2 className=" text-xl text-gray-300 mr-3">
                    در حال دریافت اطلاعات ...
                  </h2>
                </div>
              ) : data?.data?.length === 0 ? (
                <div className=" w-full flex flex-col border border-dashed rounded-lg border-gray-600 p-3 justify-center items-center">
                  <h2 className=" text-3xl text-gray-500 mb-4">
                    جلسه ای جهت نمایش وجود ندارد
                  </h2>
                  <EmptyIcon className=" w-80" />
                </div>
              ) : (
                <table className="min-w-full text-center text-sm font-light">
                  <thead className="border-b  bg-gradient-to-r from-blue-750 to-blue-800 font-medium text-white border-neutral-500">
                    <tr>
                      <th scope="col" className=" px-6 py-4">
                         شماره جلسه
                      </th>
                      <th scope="col" className=" px-6 py-4">
                        {" "}
                        عنوان جلسه
                      </th>
                      <th scope="col" className=" px-6 py-4">
                        {" "}
                        فصل جلسه
                      </th>
                      <th scope="col" className=" px-6 py-4">
                        زمان جلسه
                      </th>
                      <th scope="col" className=" px-6 py-4">
                         نوع جلسه
                      </th>
                    
                      <th scope="col" className=" px-6 py-4">
                        {" "}
                        تنظیمات
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {data?.data?.map((episode: Episode) => (
                      <CourseItemLayout
                        key={episode._id}
                        episode={episode}
                        episodeMuted={mutate}
                      />
                    ))}
                  </tbody>
                </table>
              )}
            </div>
              <PaginateItem page={data?.page} pages={data?.pages} url="/admin/courses" />
          </div>
        </div>
      </div>
    </>
  );
}