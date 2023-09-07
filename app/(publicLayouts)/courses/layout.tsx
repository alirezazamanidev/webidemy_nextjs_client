import React from "react";

export const metadata ={
    title:"دوره های آموزشی"
}

export default function CoursesLayout({children}:{children:React.ReactNode}){


    return (
        <>
        {
            children
        }
        </>
    )
}