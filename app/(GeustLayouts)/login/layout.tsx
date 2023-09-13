import NavbarLayouts from "@/components/public/layouts/NavbarLayout";
import React from "react";

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'ورود و عضویت',
}
 
export default function LoginLayout({children}:{children:React.ReactNode}){

    return (
        <main>
       <NavbarLayouts/>
        {
            children
        }
        </main>
    )
}