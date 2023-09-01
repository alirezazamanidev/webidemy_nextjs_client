'use client'
import Loading from "react-loading";

export default function LoadingLayout() {
  return (
    <>
      <div className=" fixed inset-0 bg-dark-700 bg-opacity-75 flex justify-center items-center ">
        <Loading type='bars' color="#fff"  className=" scale-125" />
      </div>
    </>
  );
}
