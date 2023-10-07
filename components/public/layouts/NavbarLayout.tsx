"use client";
import LogoPath from "@/public/images/logo.png";
import Image from "next/image";
import BasketSVGPath from '@/public/svg/icons/basket.svg';
import UserSVGPath from '@/public/svg/icons/users.svg';
import LoginSVGPath from '@/public/svg/icons/login.svg'
import {BiMenuAltRight} from 'react-icons/bi'
export default function NavbarLayout() {
  return (
    <>
      <nav className=" pt-10 pb-8  select-none px-5">
        <div className=" container mx-auto flex  items-center  justify-between">
        <BiMenuAltRight className=" text-gray-50 text-4xl mr-3 block  sm:hidden"/>
          <div className=" flex items-center gap-3  sm:hidden  ">
            <Image
              src={LogoPath}
              alt="Logo-webidemy"
              width={60}
              height={60}
              className=""
            />
            <span className="  text-white text-2xl hidden sm:block">وبیدمی</span>
          </div>
          
    <div className=" hidden sm:flex  items-center gap-4">
    <BiMenuAltRight className=" text-gray-50 text-4xl mr-3 block  xl:hidden"/>
          <div className=" flex items-center gap-3   ">
            <Image
              src={LogoPath}
              alt="Logo-webidemy"
              width={60}
              height={60}
              className=""
            />
            <span className="  text-white text-2xl hidden sm:block">وبیدمی</span>
          </div>
          
    </div>
          <ul className=" hidden xl:flex items-center  text-gray-350 text-3xl space-x-10  space-x-reverse">
            <li className=" text-orange-450 relative p-2 text-center after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:-translate-x-1/2 after:rounded-sm after:bg-orange-450 after:transition-all font-bold after:w-1/2 after:opacity-100">
              خانه
            </li>
            <li className="">دوره ها</li>
            <li className="">بلاگ ها</li>
            <li>درباره ما</li>
            <li>تماس با ما</li>
          </ul>
          <div className=" flex items-center gap-4">
            <div className=" hidden sm:block rounded-md border border-gray-600 border-opacity-75  scale-90 md:scale-100  bg-gray-950 shadow-lg backdrop-blur p-2 md:p-3 lg:px-4">
              <Image src={BasketSVGPath} alt="icon" className="  scale-90 md:scale-100"  width={36} height={33}/>
            </div>
            <div className=" rounded-md border border-gray-600 border-opacity-75    bg-gray-950 shadow-lg backdrop-blur-lg p-1 sm:p-2 md:p-3 lg:px-4">
              <Image src={UserSVGPath} alt="icon" width={44} height={33}  className=" scale-50 sm:scale-75 md:scale-100" />
            </div>
              {/* <div className=" flex items-center rounded-md border border-gray-600 border-opacity-75    bg-gray-950 shadow-lg backdrop-blur-lg p-2 md:p-4">
              <Image src={LoginSVGPath} alt="icon"  className="  scale-90 md:scale-100"  width={36} height={27}/>
              <span  className=" text-orange-450 mr-1 text-xl md:text-2xl hidden sm:block">ورود</span>
            </div> */}
          </div>
        </div>
      </nav>
    </>
  );
}
{
}
