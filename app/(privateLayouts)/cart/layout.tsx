import NavbarLayouts from "@/components/public/layouts/NavbarLayout";
import React from "react";

export const metadata ={
    title:'سبد خرید'
}
export default function CartLyout({children}:{children:React.ReactNode}){

    return (
        <main> 
            <NavbarLayouts/>
            {
                children
            }

        </main>
    )
}