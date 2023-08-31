'use client'
import { useRouter } from "next/navigation";

export default function FilterBox() {
  const router = useRouter();

  return (
    <>
      <span className="text-white text-xl font-bold">نوع دوره</span>
      <hr className="mt-4 mb-6 border-gray-300 " />
      <div>
        <div className="mb-4 last:mb-0 flex justify-between items-center">
          <div className=" flex items-center">
            <input
              className="text-gray-800 w-6 h-6 ml-3 bg-gray-100 border-0 border-transparent cursor-pointer rounded-md bg-75"
              id="checkbox-free"
              type='radio'
              name="type"
              value="free"
              onChange={(e)=>router.push(`/series?type=${e.target.value}`)}
            />
            <label
              className=" text-gray-200 text-base font-medium cursor-pointer"
              htmlFor="checkbox-free"
            >
              رایگان
            </label>
          </div>
          <span className="text-gray-300">20</span>
        </div>
        <div className="mb-4 last:mb-0 flex justify-between items-center">
          <div className=" flex items-center">
            <input
              className="text-gray-100 w-6 h-6 ml-3  bg-gray-100 border-0 border-transparent cursor-pointer rounded-md bg-75"
              id="checkbox-cash"
              type='radio'
              name="type"
              value="cash"
              onChange={(e)=>router.push(`/series?type=${e.target.value}`)}
            />
            <label
              className=" text-gray-50 text-base font-medium cursor-pointer"
              htmlFor="checkbox-cash"
            >
              نقدی
            </label>
          </div>
          <span className="text-gray-300">11</span>
        </div>
        <div className="mb-4 last:mb-0 flex justify-between items-center">
          <div className=" flex items-center">
            <input
              className="text-gray-100 w-6 h-6 ml-3  bg-gray-100-700 border-0 border-transparent cursor-pointer rounded-md bg-75"
              id="checkbox-vip"
              type='radio'
              name="type"
              value="vip"
              onChange={(e)=>router.push(`/series?type=${e.target.value}`)}
            />
            <label
              className=" text-gray-50 text-base font-medium cursor-pointer"
              htmlFor="checkbox-vip"
            >
              اعضای ویژه
            </label>
          </div>
          <span className="text-gray-300">48</span>
        </div>
      </div>
    </>
  );
}
