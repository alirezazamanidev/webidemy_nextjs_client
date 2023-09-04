import { Episode } from "@/libs/model/episode";
import { AiFillEye } from "react-icons/ai";
import { GoClockFill } from "react-icons/go";
interface props {
  episode: Episode;
}
export default function EpisodeItemLayout({ episode }: props) {
  return (
    <>
      <div className=" p-3 my-2 bg-gray-1010 mr-10 rounded-lg flex items-center">
        <div className=" ml-5">
          <span className=" text-gray-400 text-xl">{episode.number}</span>
          <span className=" mr-5">|</span>
        </div>
        <div className=" flex items-center  justify-around w-full">
          <span className=" text-gray-300 text-xl">{episode?.title}</span>

          <span className=" flex text-xl text-gray-300 items-center">
            <GoClockFill />
            <span className=" mr-2">{episode?.time}</span>
          </span>

          <span className=" flex  items-center text-gray-300 text-lg bg-gray-900 px-3 py-2  rounded-lg">
            <AiFillEye />
            <p className=" mr-2">مشاهده</p>
          </span>
        </div>
      </div>
    </>
  );
}
