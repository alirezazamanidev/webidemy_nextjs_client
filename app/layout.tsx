"use client";
import ToastContainerComponnent from "@/components/shared/ToastContainer";
import { store } from "@/libs/store";

import "@/public/css/globals.css";

import localFont from "next/font/local";
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

  
  return (
    <html lang="fa" dir="rtl" className={myfont.className}>
      <Provider store={store}>
        <body className=" bg-dark-700">
           
            
              <ToastContainerComponnent position="top-center" theme="dark" />
              {children}
          
          
        </body>
      </Provider>
    </html>
  );
}
