"use client";
import ToastContainerComponnent from "@/components/shared/ToastContainer";
import { store } from "@/libs/store";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "@/public/css/globals.css";

import localFont from "next/font/local";
import { Provider } from "react-redux";
import { useEffect } from "react";
const myfont = localFont({
  src: "./../public/fonts/yekan-plus/BYekan+ Bold.ttf",
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
        staleTime: 0,
        cacheTime: 0,
      },
    },
  });

  return (
    <html lang="fa" dir="rtl" className={myfont.className}>
      <body >
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <ToastContainerComponnent position="top-center" theme="dark" />
            {children}
          </Provider>
          <ReactQueryDevtools initialIsOpen={true} position='bottom-left' />
        </QueryClientProvider>
      </body>
    </html>
  );
}
