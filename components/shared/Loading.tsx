'use client'
import Loading from "react-loading";

export default function LoadingLayout() {
  return (
    <>
      <div className=" fixed inset-0 xl:hidden bg-dark-600 bg-opacity-75 flex justify-center items-center ">
        <Loading type="spinningBubbles" color="#fff" className=" scale-125" />
      </div>
    </>
  );
}
