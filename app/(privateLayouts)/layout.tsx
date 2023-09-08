import React from "react";


export default function privateLayout({children}:{children:React.ReactNode}){

    
    return(
        <main className=" w-full">{children}</main>
    )
}