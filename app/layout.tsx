"use client";
import ToastContainerComponnent from "@/components/shared/ToastContainer";
import "@/config/global/enviorment.config";
import useAuth from "@/libs/hooks/useAuth";
import { store } from "@/libs/store";

import "@/public/css/globals.css";

import localFont from "next/font/local";
import Loading from "react-loading";
import { Provider } from "react-redux";
const myfont = localFont({
  src: "./../public/fonts/yekan/Yekan.woff2",
  style: "normal",
  weight: "normal",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { loading } = useAuth();

  return (
    <html lang="fa" dir="rtl" className={myfont.className}>
      <Provider store={store}>
        <body className=" bg-dark-700">
          {loading ? (
            <div className=" w-full  h-screen bg-dark-700 flex justify-center items-center">
              <Loading type="balls" color="#fff" width={100} />
            </div>
          ) : (
            <>
              <ToastContainerComponnent position="top-center" theme="dark" />
              {children}
            </>
          )}
        </body>
      </Provider>
    </html>
  );
}
