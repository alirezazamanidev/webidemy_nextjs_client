'use client'
import { Episode } from "@/libs/model/episode";
import Link from "next/link";
import { AiFillEye } from "react-icons/ai";
import { GoClockFill } from "react-icons/go";
import { useParams } from 'next/navigation';
import { canAccess } from "@/libs/utils/access.tools";
import { RiLock2Fill } from "react-icons/ri";
interface props {
  episode: Episode;
}
export default function EpisodeItemLayout({ episode }: props) {
  const params = useParams()

  return (
    <>
      <div className=" p-3 my-2 bg-gray-750 mr-7 rounded-lg flex justify-center items-center">
        <div className=" ml-5 flex  items-center gasp-2">
          {
            canAccess(episode?.type) ?(
              <span className=" text-gray-400 text-xl">{episode.number}</span>
              
            ):<span className=" text-red-600">
              <RiLock2Fill  className=" text-2xl"/>
            </span>
          }
          <span className=" mr-5">|</span>
        </div>
        <div className=" flex items-center  justify-around w-full">
          <span className=" text-gray-300 text-xl">{episode?.title}</span>

          <span className=" flex text-xl text-gray-300 items-center">
            <GoClockFill />
            <span className=" mr-2">{episode?.time}</span>
          </span>

          <Link href={`${params.courseSlug}/episodes/${episode?.number}`} className=" flex  items-center text-gray-300 text-lg bg-gray-900 px-3 py-2  rounded-lg">
            <AiFillEye />
            <p className=" mr-2">مشاهده</p>
          </Link>
        </div>
      </div>
    </>
  );
}
