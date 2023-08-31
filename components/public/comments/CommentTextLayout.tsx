export default function CommentTextLayout() {
  return (
    <>
      <div className=" select-none border border-dashed flex flex-col   border-gray-600 mt-4 p-4 lg:p-7  rounded-lg">
        <span className=" text-gray-100 text-xl mb-3"> دیدگاه شما : </span>
        <textarea
        
          className=" bg-gray-700 rounded-lg px-4 py-2 text-gray-200 text-lg placeholder:text-gray-300"
          placeholder=" نظر یا پرسش خود را وارد کنید ..."
        />
        <button className=" bg-gradient-to-r from-blue-750 to-blue-250 text-base mt-3  px-4 py-3 rounded-lg  text-white flex justify-center  w-24 ">
          ارسال نظر
        </button>
      </div>
    </>
  );
}
