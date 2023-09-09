import Link from "next/link";
import NotfoundImage from '@/public/images/photo/not-found-image.webp';
import Image from "next/image";
export default function NotFound() {
  return (
    <>
    
    <div className="flex justify-center items-center w-full">
      <div className="bg-white/10 p-7 mt-20 lg:p-9 rounded-2xl shadow-none transition-all w-[41rem] ">
        <div className="flex flex-col justify-center items-center">
          <Image
          src={NotfoundImage}
            alt="صفحه مد نظر یافت نشد!"
            loading="lazy"
            width="500"
            height="500"
            decoding="async"
            data-nimg="1"
            className="max-w-[12rem]"
        
          />
          <h1 className="font-black text-xl lg:text-3xl text-center lg:mt-6 text-gray-50  select-none">
            404
          </h1>
          <h2 className="font-bold text-base lg:text-2xl text-center mt-2 text-gray-50 lg:mt-3 select-none">
            صفحه مد نظر یافت نشد!
          </h2>
          <Link className="mt-7 lg:mt-9" href="/">
            <button className="relative select-none flex justify-center items-center transition-all text-sm px-3 py-4 rounded-lg  opacity-100 cursor-pointer  from-cnBlue-20 to-cnBlue-15 bg-gradient-to-r from-blue-750 to-blue-250 text-white">
              <span className="transition-allvisible opacity-100">
                بازگشت به صفحه اصلی
              </span>
              
            </button>
          </Link>
        </div>
      </div>
    </div>
    </>
 
  );
}
