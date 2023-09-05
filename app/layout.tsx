"use client";
import ToastContainerComponnent from "@/components/shared/ToastContainer";
import { store } from "@/libs/store";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
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
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime:10000,
        cacheTime: 0,
       

      },
    },
  });

  return (
    <html lang="fa" dir="rtl" className={myfont.className}>
        <body className=" bg-dark-700">
          <QueryClientProvider client={queryClient}>
            <ToastContainerComponnent position="top-center" theme="dark" />
            {children}
            <ReactQueryDevtools initialIsOpen={true} position="top-left" />
          </QueryClientProvider>
        </body>
    </html>
  );
}
