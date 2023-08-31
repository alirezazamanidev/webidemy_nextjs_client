import Image from "next/image";
import meImage from '@/public/images/me.jpeg'

export default function UserCommentLayouts(){
    return (
      <div className=" border border-dashed border-gray-400 mt-5 rounded-lg p-4 lg:p-7">
        <div className=" flex items-center  justify-start">
            <div>
                <Image src={meImage} width={300} height={300} className=" aspect-square rounded-full object-cover  transition-all duration-500 opacity-100 w-10 h-10 md:w-12 md:h-12 min-w-10 md:min-w-12"  alt="me"/>
            </div>
            <div className=" mr-3 flex flex-col items-center ">
                <span  className=" text-base text-gray-100 mb-2">علیرضا زمانی</span>
                <span className=" text-sm text-gray-300">سه روز پیش</span>
            </div>
        </div>
        <div>
            <p className=" text-gray-400 text-base mt-4">سلان علیکم و رحنبت الله عله</p>
        </div>
      </div>
    )
}