'use client'
import { Episode } from "@/libs/model/episode";
import Link from "next/link";
import { AiFillEye } from "react-icons/ai";
import { GoClockFill } from "react-icons/go";
import { useParams } from 'next/navigation'
interface props {
  episode: Episode;
}
export default function EpisodeItemLayout({ episode }: props) {
  const params = useParams()
  let statusHasEpisode = params.episodeNumber === String(episode?.number) ? true : false

  
  return (
    <>
      <Link href={`/courses/${params.courseSlug}/episodes/${episode?.number}`} className={` p-3 my-2 text-base ${statusHasEpisode ? 'bg-gray-500' :'bg-gray-750'} mr-10 rounded-lg flex items-center`}>
        <div className=" ml-5">
          <span className=" text-gray-400 ">{episode.number}</span>
          <span className=" mr-1">|</span>
        </div>
        <div className=" flex items-center  justify-around   w-full">
          <span className=" text-gray-300">{episode?.title}</span>

          <span className=" flex  text-gray-300 items-center">
            <GoClockFill />
            <span className=" mr-2">{episode?.time}</span>
          </span>


        </div>
      </Link>
    </>
  );
}
