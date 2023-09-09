'use client'

import LoadingLayout from "@/components/shared/Loading";
import useAuth from "@/libs/hooks/useAuth";
import React from "react";


export default function PrivateLayout({children}:{children:React.ReactNode}){
    const {loading}=useAuth();
    if(loading) return <LoadingLayout/>
    return(
        <main className=" w-full">{children}</main>
    )
}