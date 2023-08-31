'use client'
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
interface props {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function SearchBarLayout({ show, setShow }: props) {
  const [searchText, SetsearchText] = useState<string>("");
  const router=useRouter();
  const handSearch=(e:any)=>{
    e.preventDefault();
    router.push(`/series?search=${searchText}`)
    
  }
  return (
    <>
      {show ? (
        <form className="absolute container  text-gray-900  h-20 mt-10 rounded-lg " onSubmit={handSearch}>
          <div className=" relative h-full w-full">
            <button type='submit'>
            <BsSearch className=" absolute  w-6 h-6 top-7 right-4 " />

            </button>
            <input
              onChange={(e) => SetsearchText(e.target.value)}
              type="text"
              placeholder="متن خود را وارد کنید"
              className=" placeholder:text-gray-500 placeholder:text-lg w-full  h-full rounded-lg px-14 hover:outline-none outline-none text-lg "
            />
            <AiOutlineClose
              onClick={() => setShow(false)}
              className=" absolute  w-5 h-5  bottom-7   cursor-pointer left-8"
            />
          </div>
        </form>
      ) : null}
    </>
  );
}
