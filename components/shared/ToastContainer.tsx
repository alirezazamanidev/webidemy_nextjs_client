'use client'
import localFont from "next/font/local";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ToastPosition,Theme } from "react-toastify";
interface props {
  position: ToastPosition;
  theme: Theme;
}

const myfont = localFont({
    src: "./../../public/fonts/yekan/Yekan.woff2",
    style: "normal",
    weight: "normal",
  });
export default function ToastContainerComponnent({ position, theme }: props) {
  return (
    <ToastContainer
    bodyClassName={myfont.className}
      position={position}
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={true}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={theme}
    />
  );
}
