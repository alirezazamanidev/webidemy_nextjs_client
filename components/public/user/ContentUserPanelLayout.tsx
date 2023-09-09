"use client";
import { Tab } from "@headlessui/react";

export default function ContentUserPanel() {
  return (
    <div className=" container  mx-auto select-none">
      <Tab.Group defaultIndex={0} as="div">
        <Tab.List
          as="div"
          className=" bg-dark-600 flex items-center transition-all  justify-between overflow-x-auto hideSB my-4 p-4 lg:p-7  rounded-xl gap-4"
        >
        <Tab
              as="button"
              className="   outline-none text-sm md:text-base lg:text-lg"
            >
              {({ selected }) => (
                <p className=" flex items-center justify-center  w-fit gap-2">
                  <span
                    className={`flex ${
                      selected ? "opacity-100 " : "opacity-0"
                    }`}
                  >
                    <span className="rounded-full w-2 h-2 transition-all  bg-blue-250"></span>
                  </span>
                  <span
                    className={`${selected ? "text-blue-250" : "text-gray-50"} transition-all whitespace-nowrap`}
                  >
                    مشخصات کاربری
                  </span>
                </p>
              )}
            </Tab>
            <Tab
              as="button"
              className="  selected-tab  outline-none text-sm md:text-base lg:text-lg   text-blue-250 "
            >
              {({ selected }) => (
                <p className=" flex items-center justify-center  w-fit gap-2">
                  <span
                    className={`flex ${
                      selected ? "opacity-100 " : "opacity-0"
                    }`}
                  >
                    <span className="rounded-full w-2 h-2 transition-all  bg-blue-250"></span>
                  </span>
                  <span
                    className={`${selected ? "text-blue-250" : "text-gray-50"} transition-all whitespace-nowrap `}
                  >
                    {" "}
                    دوره های خریداری شده
                  </span>
                </p>
              )}
            </Tab>
            <Tab
              as="button"
              className="  selected-tab  outline-none text-sm md:text-base lg:text-lg"
            >
              {({ selected }) => (
                <p className=" flex items-center justify-center  w-fit gap-2">
                  <span
                    className={`flex ${
                      selected ? "opacity-100 " : "opacity-0"
                    }`}
                  >
                    <span className="rounded-full w-2 h-2 transition-all  bg-blue-250"></span>
                  </span>
                  <span
                    className={`${selected ? "text-blue-250" : "text-gray-50"} transition-all whitespace-nowrap `}
                  >
                    مقالات ذخیره شده
                  </span>
                </p>
              )}
            </Tab>
            <Tab
              as="button"
              className="  selected-tab  outline-none text-sm md:text-base lg:text-lg "
            >
              {({ selected }) => (
                <p className=" flex items-center justify-center  w-fit gap-2">
                  <span
                    className={`flex ${
                      selected ? "opacity-100 " : "opacity-0"
                    }`}
                  >
                    <span className="rounded-full w-2 h-2 transition-all  bg-blue-250"></span>
                  </span>
                  <span
                    className={`${selected ? "text-blue-250" : "text-gray-50"} transition-all whitespace-nowrap `}
                  >
                    پادکست های ذخیره شده
                  </span>
                </p>
              )}
            </Tab>
        </Tab.List>

        <Tab.Panels className="bg-dark-600 text-3xl px-4 py-5 my-4  rounded-xl">
          <Tab.Panel>Content 1</Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
          <Tab.Panel>Content 4</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
