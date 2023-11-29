"use client";

import CommentLayout from "../comments/CommentLayout";
import CardInfoTeacher from "../layouts/CardInfoTeacher";
import { Episode } from "@/libs/model/episode";

interface props {
  episode: Episode;
}
export default function ContantSingleEpisodePageLayout({ episode }: props) {




  return (
    <>
      <main className=" w-full flex flex-col-reverse xl:flex-row  mt-8 select-none">
        <div className=" w-full xl:w-8/12">

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

              <p className=" text-base text-gray-400">    
                {episode?.body}
              </p>
            </div>
          </div>



          <CommentLayout subject={{ episode: episode._id }} />
          <div className=" space-y-2">

          </div>
        </div>
        <div className=" w-full xl:w-4/12 ">

          <CardInfoTeacher teacher={episode?.season?.course?.teacher} />
        </div>
      </main>
    </>
  );
}
