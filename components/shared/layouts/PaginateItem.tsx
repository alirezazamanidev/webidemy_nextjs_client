"use client";


import ReactPaginate from "react-paginate";
import React from "react";
import {BiSolidRightArrow} from 'react-icons/bi'

interface Props {
    pageRangeDisplayed? : number,
    marginPagesDisplayed? : number,
    pageCount? : number,
    page? : number,
    onPageChangeHandler : (selected : { selected : number }) => void
}

export default function ReactCustomPaginate({ pageRangeDisplayed = 3 ,  marginPagesDisplayed = 2 , pageCount = 0 , page = 0 , onPageChangeHandler } : Props) {

    return (
        pageCount > 1
            ? (
                <ReactPaginate
                    className=" w-full select-none  flex justify-center relative mt-4 z-0  rounded-md shadow-sm -space-x-px"
                    breakLabel="..."
                    breakClassName="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-dark-600 text-sm font-medium text-gray-700"
                    nextLabel='>'
                    nextClassName="relative cursor-pointer   inline-flex items-center px-3 py-2 rounded-l-md border border-gray-800 bg-dark-600 text-base font-bold text-gray-100 hover:bg-dark-700"
                    pageRangeDisplayed={pageRangeDisplayed}
                    marginPagesDisplayed={marginPagesDisplayed}
                    activeClassName="z-10 bg-dark-700 border-sky-500 text-sky-300 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                    onPageChange={onPageChangeHandler}
                    forcePage={page - 1}
                    pageCount={pageCount}
                    pageClassName="bg-dark-600 border-gray-800 text-gray-100 hover:bg-dark-700 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                    previousLabel="<"
                    previousClassName="relative cursor-pointer   inline-flex items-center px-3 py-2 rounded-l-md border border-gray-800 bg-dark-600 text-base font-bold text-gray-100 hover:bg-dark-700"
                    renderOnZeroPageCount={undefined}
                />
            )
            : null
    )
}