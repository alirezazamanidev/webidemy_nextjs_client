'use client'
import { Episode } from "@/libs/model/episode";
import Link from "next/link";
import { AiFillEye } from "react-icons/ai";
import { GoClockFill } from "react-icons/go";
import { useParams } from 'next/navigation'
import { canAccess } from "@/libs/utils/access.tools";
import { RiLock2Fill } from "react-icons/ri";
interface props {
  episode: Episode;
}
export default function EpisodeItemLayout({ episode }: props) {
  const params = useParams()
  let statusHasEpisode = params.episodeNumber === String(episode?.number) ? true : false

  
  return (
    <>
      <Link href={`/courses/${params.courseSlug}/episodes/${episode?.number}`} className={` p-3 my-2 text-base ${statusHasEpisode ? 'bg-gray-500' :'bg-gray-750'} mr-5 rounded-lg flex items-center`}>
        <div className=" ml-3 flex items-center gap-3">
        {
            canAccess(episode?.type) ?(
              <span className=" text-gray-400 text-xl">{episode.number}</span>
              
            ):<span className=" text-red-600">
              <RiLock2Fill  className=" text-xl"/>
            </span>
          }
          <span className=" mr-1">|</span>
        </div>
        <div className=" flex items-center  justify-around   w-full">
          <span className=" text-gray-300">{episode?.title}</span>

          <span className=" flex  text-gray-300 items-center">
            <GoClockFill />
            <span className=" mr-1">{episode?.time}</span>
          </span>


        </div>
      </Link>
    </>
  );
}
