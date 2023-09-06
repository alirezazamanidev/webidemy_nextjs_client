'use client'
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Listbox } from "@headlessui/react";

const filterItem = [
  { id: 1, name: "پیش فرض", unavailable: false },
  { id: 2, name: "جدید ترین", unavailable: false },
  { id: 3, name: "قدیمی ترین", unavailable: false },
  { id: 4, name: "محبوب ترین", unavailable: false },
];

const filterItemCategories = [
  { id: 1, name: "همه", unavailable: false },
  { id: 2, name: "فرانت اند", unavailable: false },
  { id: 3, name: " بک اند", unavailable: false },
  { id: 4, name: " دوآپس", unavailable: false },
  { id: 5, name: "عمومی", unavailable: false },
  { id: 6, name: "دیژاین", unavailable: false },
];
export default function SearchBarLayout() {
  const [selectedItem, setSelectedItem] = useState(filterItem[0]);
  const [selectedItemCategires, setSelectedItemCategories] = useState(
    filterItemCategories[0]
  );

  return (
    <>
          {/* search bar */}
          <div className="  border-b border-solid border-gray-700 pb-3 md:pb-5 lg:pb-8 w-full select-none  flex flex-col mx-2 md:flex-row items-center gap-2 lg:gap-5">
            <div className=" w-full md:w-fit    grid grid-cols-2 md:flex gap-2  justify-between items-center">
              <div className=" relative ">
                <Listbox value={selectedItem} onChange={setSelectedItem}>
                  <Listbox.Button className="bg-dark-600 w-full   text-gray-300 transition-all rounded-xl p-3 md:p-3.5 text-lg flex justify-center items-center gap-2 cursor-pointer h-full">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 md:w-6 md:h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                        ></path>
                      </svg>
                    </span>
                    <span className="whitespace-nowrap overflow-hidden text-ellipsis max-w-40">
                      {selectedItem.name}
                    </span>
                  </Listbox.Button>
                  <Listbox.Options className="absolute  mt-3 w-full rounded-xl text-gray-400 bg-dark-600  pt-2 z-50 transition-all space-y-3 ">
                    {filterItem.map((item) => (
                      <Listbox.Option
                        className=" w-full text-center border-b border-solid border-gray-700 cursor-pointer hover:text-blue-250 pb-2 items-center justify-center  text-base"
                        key={item.id}
                        value={item}
                        disabled={item.unavailable}
                      >
                        {item.name}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Listbox>
              </div>
              <div className=" relative">
                <Listbox
                  value={selectedItemCategires}
                  onChange={setSelectedItemCategories}
                >
                  <Listbox.Button className="bg-dark-600  w-full  text-gray-300 transition-all rounded-xl p-3 md:p-3.5 text-lg flex justify-center items-center gap-2 cursor-pointer h-full">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 md:w-6 md:h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                        ></path>
                      </svg>
                    </span>
                    <span className="whitespace-nowrap overflow-hidden text-ellipsis max-w-40">
                      {selectedItemCategires.id === 1
                        ? "دسته بندی ها"
                        : selectedItemCategires.name}
                    </span>
                  </Listbox.Button>
                  <Listbox.Options className="absolute z-50 mt-3 w-full rounded-xl text-gray-400 bg-dark-600  pt-2 z-1 transition-all space-y-3 ">
                    {filterItemCategories.map((item) => (
                      <Listbox.Option
                        className=" w-full text-center  border-b border-solid border-gray-700 cursor-pointer hover:text-blue-250 items-center justify-center pb-2  text-base"
                        key={item.id}
                        value={item}
                        disabled={item.unavailable}
                      >
                        {item.name}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Listbox>
              </div>
            </div>

            <div className=" w-full  relative">
              <input
                className="w-full caret-gray-300 outline-none border-2 border-solid border-transparent transition-all focus:border-gray-700 placeholder:text-gray-100 text-gray-200 placeholder:select-none text-sm md:text-base py-3 md:py-3.5 rounded-xl placeholder:text-right pr-12 md:pr-16 pl-3 md:pl-3.5 bg-dark-600"
                placeholder="جست و جو در میان دوره ها..."
                type="text"
              />
              <span className="flex justify-center items-center absolute top-1/2 -translate-y-1/2 border-solid transition-all border-gray-300 pl-2 md:pl-2.5 right-3 md:right-3.5 border-l-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="transition-all w-5 h-5 md:w-6 md:h-6 text-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
    </>
  );
}
