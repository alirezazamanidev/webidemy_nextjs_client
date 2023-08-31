"use client";
import useAuth from "@/libs/hooks/useAuth";
import { Course } from "@/libs/model/course";
import { Episode } from "@/libs/model/episode";
import { ShowCanAccessForPayment, checkLearning } from "@/libs/utility/tools";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AiFillEye, AiOutlineClockCircle } from "react-icons/ai";
import { HiOutlineLockClosed } from "react-icons/hi";
interface props {
  episode: Episode;
  course: Course;
}

export default function EpisodeItem({ episode, course }: props) {
  const router = useRouter();
  const { user, loading } = useAuth();

  if (loading) return <></>;
  const canAccess = ShowCanAccessForPayment(episode, user);
  

  return (
    <>
      <li
        onClick={() =>
          router.push(`/episodes/${course.slug}/${episode.number}`)
        }
        className=" cursor-pointer border flex items-center justify-between border-gray-500  text-gray-100 px-4 py-3 rounded-lg"
      >
        <div className=" flex text-xl items-center ">
          {canAccess ? (
            <span className=" ">{episode.number}</span>
          ) : (
            <span className=" bg-red-700  px-1 py-1 rounded-lg">
              <HiOutlineLockClosed className="" />
            </span>
          )}
          <span className=" mx-3 text-gray-500"> | </span>
          <span>{episode.title}</span>
        </div>
        <span className=" flex items-center">
          <p className=" ml-1">{episode.time}</p>
          <AiOutlineClockCircle />
        </span>
        <div>
          <Link
            href={`episodes/${course.slug}/${episode.number}`}
            className=" flex text-sm hover:bg-gray-800 hover:text-gray-100  items-center bg-gray-200 text-gray-800 px-2 py-1 rounded-xl"
          >
            <p className=" ml-1">مشاهده</p>
            <AiFillEye />
          </Link>
        </div>
      </li>
    </>
  );
}
