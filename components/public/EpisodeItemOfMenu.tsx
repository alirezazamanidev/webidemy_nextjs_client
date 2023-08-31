"use client";
import useAuth from "@/libs/hooks/useAuth";
import { Episode } from "@/libs/model/episode";
import { ShowCanAccessForPayment, checkLearning } from "@/libs/utility/tools";
import { useParams, useRouter } from "next/navigation";
import { BsCircle } from "react-icons/bs";
import { IoIosLock } from "react-icons/io";
interface props {
  episode: Episode;
}

export default function EpisodeItemOfMenu({ episode }: props) {
  const router = useRouter();
  const params = useParams();
  const { user, loading } = useAuth();
  if (loading) return <></>;
  const canAccess = ShowCanAccessForPayment(episode, user);
  return (
    <div
      onClick={(e) =>
        router.push(`/episodes/${episode.course.slug}/${episode.number}`)
      }
      className={` border  cursor-pointer hover:bg-gray-900 ${
        parseInt(params.episodeNumber) == episode.number
          ? " bg-gray-900"
          : "bg-gray-800"
      } flex items-center py-3 px-3 rounded-md`}
    >
      {!canAccess ? (
        <IoIosLock className=" text-red-600 text-lg" />
      ) : (
        <BsCircle className=" text-blue-300 text-lg" />
      )}
      <div className="  mr-3">
        <span className=" mb-1">{episode.title}</span>
        <span className=" flex items-center text-xs xl:text-sm  space-x-1 space-x-reverse">
          <p className=" text-gray-500 ">ویدعو آموزشی /</p>
          <p className=" text-gray-300 ">{episode.time}</p>
        </span>
      </div>
    </div>
  );
}
