"use client";

import PlayerLayout from "@/components/shared/PlayerLayout";
import { Episode } from "@/libs/model/episode";
import SeasonLayout from "./season/seasonLayout";
import { GetSingleCourse } from "@/libs/services/home/course";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Season } from "@/libs/model/seasson";
interface props {
  episode: Episode;
}
export default function HeaderSingleEpisode({ episode }: props) {

  const [seasons,setSeasons]=useState<Season[]>([]);
  const params=useParams();

  
  
  useEffect(()=>{
    GetAllSeasonsCourse();
  

  },[])

  const GetAllSeasonsCourse=async()=>{
    const data=await GetSingleCourse(params.courseSlug as string);
    setSeasons(data.course.seasons);
    
  }
  
  

  return (
    <>
      <div className=" bg-dark-600 flex flex-col-reverse   lg:grid lg:grid-cols-12 rounded-2xl select-none p-4 lg:p-7 gap-3 ">
        <div className=" lg:col-span-3 bg-dark-700 p-4  overflow-y-auto hideSB max-h-[42.5rem]" >
         {
           seasons?.map((season:Season)=>( 
            <SeasonLayout key={season?._id} season={season}/>           

           )) 
        }
        </div>
        <div className=" lg:col-span-9">

          <div className=" flex flex-col items-center">
            <div className=" flex w-full justify-between items-center mb-6">
            <h2 className=" text-gray-400 text-xl lg:text-2xl font-bold ">
              {episode?.title}
            </h2>
            <h2 className="text-gray-300 text-xl lg:text-2xl">
              <span>فصل : </span>
              <span>{episode?.season?.title}</span>
            </h2>
            </div>
            <PlayerLayout videoUrl={episode?.videoUrl} width="100%" height="100%" />

          </div>
        </div>
      </div>
    </>
  );
}
