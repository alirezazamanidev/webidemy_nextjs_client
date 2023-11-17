"use client";
import EditUserPanelForm from "@/libs/forms/home/user/EditUserPanelForm";
import useAuth from "@/libs/hooks/useAuth";
import useRefreshToken from "@/libs/hooks/useRefreshToken";
import { Tab } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ContentUserPanel() {
  const { user, refetch } = useAuth();
  const router = useRouter();
  const refresh = useRefreshToken();
  const refreshToken = async () => {
    await refresh();
    await refetch();
  };

  console.log(user?.savedBlogList);
  

  useEffect(() => {
    if (user) {
      router.push(user.username);
    }
  }, [user, router]);

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
                  className={`flex ${selected ? "opacity-100 " : "opacity-0"}`}
                >
                  <span className="rounded-full w-2 h-2 transition-all  bg-blue-250"></span>
                </span>
                <span
                  className={`${
                    selected ? "text-blue-250" : "text-gray-50"
                  } transition-all whitespace-nowrap`}
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
                  className={`flex ${selected ? "opacity-100 " : "opacity-0"}`}
                >
                  <span className="rounded-full w-2 h-2 transition-all  bg-blue-250"></span>
                </span>
                <span
                  className={`${
                    selected ? "text-blue-250" : "text-gray-50"
                  } transition-all whitespace-nowrap `}
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
                  className={`flex ${selected ? "opacity-100 " : "opacity-0"}`}
                >
                  <span className="rounded-full w-2 h-2 transition-all  bg-blue-250"></span>
                </span>
                <span
                  className={`${
                    selected ? "text-blue-250" : "text-gray-50"
                  } transition-all whitespace-nowrap `}
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
                  className={`flex ${selected ? "opacity-100 " : "opacity-0"}`}
                >
                  <span className="rounded-full w-2 h-2 transition-all  bg-blue-250"></span>
                </span>
                <span
                  className={`${
                    selected ? "text-blue-250" : "text-gray-50"
                  } transition-all whitespace-nowrap `}
                >
                  پادکست های ذخیره شده
                </span>
              </p>
            )}
          </Tab>
        </Tab.List>

        <Tab.Panels className="bg-dark-600 outline-none text-3xl px-4 py-5 my-4  rounded-xl">
          <Tab.Panel>
            <EditUserPanelForm user={user} refresh={refreshToken} />
          </Tab.Panel>
          <Tab.Panel>
            <div>
              <div className="w-full my-4 lg:my-7 flex justify-center items-center select-none flex-col gap-4 lg:gap-7">
                <div className="text-xs sm:text-sm md:text-base transition-colors flex flex-col gap-1 md:gap-2 justify-center items-center text-gray-400 dark:text-cgray-600 undefined">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 md:w-8 md:h-8 transition-colors"
                    fill="currentColor"
                  >
                    <path d="M2.978 8.358l-2.978-2.618 8.707-4.74 3.341 2.345 3.21-2.345 8.742 4.639-3.014 2.68.014.008 3 4.115-3 1.634v4.122l-9 4.802-9-4.802v-4.115l1 .544v2.971l7.501 4.002v-7.889l-2.501 3.634-9-4.893 2.978-4.094zm9.523 5.366v7.875l7.499-4.001v-2.977l-5 2.724-2.499-3.621zm-11.022-1.606l7.208 3.918 1.847-2.684-7.231-3.742-1.824 2.508zm11.989 1.247l1.844 2.671 7.208-3.927-1.822-2.498-7.23 3.754zm-9.477-4.525l8.01-4.43 7.999 4.437-7.971 4.153-8.038-4.16zm-2.256-2.906l2.106 1.851 7.16-3.953-2.361-1.657-6.905 3.759zm11.273-2.052l7.076 3.901 2.176-1.935-6.918-3.671-2.334 1.705z"></path>{" "}
                  </svg>
                  <span className=" transition-colors text-center">
                    هنوز دوره ای خریداری نکردی!
                  </span>
                </div>
                <Link target="_blank" href="/courses">
                  <button className="relative select-none flex justify-center items-center transition-all rounded-lg py-2 px-2 md:px-3 text-xs md:text-sm  bg-gradient-to-r from-blue-750 to-blue-250  opacity-100 cursor-pointer  from-cnBlue-20 to-cnBlue-15  text-white">
                    <span className="transition-allvisible opacity-100">
                      مشاهده دوره ها
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div>
              <div className="w-full my-4 lg:my-7 flex justify-center items-center select-none flex-col gap-4 lg:gap-7">
                <div className="text-xs sm:text-sm md:text-base transition-colors flex flex-col gap-1 md:gap-2 justify-center items-center text-gray-400 dark:text-cgray-600 undefined">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 md:w-8 md:h-8 transition-colors"
                    fill="currentColor"
                  >
                    <path d="M2.978 8.358l-2.978-2.618 8.707-4.74 3.341 2.345 3.21-2.345 8.742 4.639-3.014 2.68.014.008 3 4.115-3 1.634v4.122l-9 4.802-9-4.802v-4.115l1 .544v2.971l7.501 4.002v-7.889l-2.501 3.634-9-4.893 2.978-4.094zm9.523 5.366v7.875l7.499-4.001v-2.977l-5 2.724-2.499-3.621zm-11.022-1.606l7.208 3.918 1.847-2.684-7.231-3.742-1.824 2.508zm11.989 1.247l1.844 2.671 7.208-3.927-1.822-2.498-7.23 3.754zm-9.477-4.525l8.01-4.43 7.999 4.437-7.971 4.153-8.038-4.16zm-2.256-2.906l2.106 1.851 7.16-3.953-2.361-1.657-6.905 3.759zm11.273-2.052l7.076 3.901 2.176-1.935-6.918-3.671-2.334 1.705z"></path>{" "}
                  </svg>
                  <span className=" transition-colors text-center">
                    هنوز مقاله ای سیو نکردی!
                  </span>
                </div>
                <Link target="_blank" href="/courses">
                  <button className="relative select-none flex justify-center items-center transition-all rounded-lg py-2 px-2 md:px-3 text-xs md:text-sm  bg-gradient-to-r from-blue-750 to-blue-250  opacity-100 cursor-pointer  from-cnBlue-20 to-cnBlue-15  text-white">
                    <span className="transition-allvisible opacity-100">
                      مشاهده مقاله ها
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>

          <div>
              <div className="w-full my-4 lg:my-7 flex justify-center items-center select-none flex-col gap-4 lg:gap-7">
                <div className="text-xs sm:text-sm md:text-base transition-colors flex flex-col gap-1 md:gap-2 justify-center items-center text-gray-400 dark:text-cgray-600 undefined">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 md:w-8 md:h-8 transition-colors"
                    fill="currentColor"
                  >
                    <path d="M2.978 8.358l-2.978-2.618 8.707-4.74 3.341 2.345 3.21-2.345 8.742 4.639-3.014 2.68.014.008 3 4.115-3 1.634v4.122l-9 4.802-9-4.802v-4.115l1 .544v2.971l7.501 4.002v-7.889l-2.501 3.634-9-4.893 2.978-4.094zm9.523 5.366v7.875l7.499-4.001v-2.977l-5 2.724-2.499-3.621zm-11.022-1.606l7.208 3.918 1.847-2.684-7.231-3.742-1.824 2.508zm11.989 1.247l1.844 2.671 7.208-3.927-1.822-2.498-7.23 3.754zm-9.477-4.525l8.01-4.43 7.999 4.437-7.971 4.153-8.038-4.16zm-2.256-2.906l2.106 1.851 7.16-3.953-2.361-1.657-6.905 3.759zm11.273-2.052l7.076 3.901 2.176-1.935-6.918-3.671-2.334 1.705z"></path>{" "}
                  </svg>
                  <span className=" transition-colors text-center">
                    هنوز پادکستی سیو نکردی!
                  </span>
                </div>
                <Link target="_blank" href="/courses">
                  <button className="relative select-none flex justify-center items-center transition-all rounded-lg py-2 px-2 md:px-3 text-xs md:text-sm  bg-gradient-to-r from-blue-750 to-blue-250  opacity-100 cursor-pointer  from-cnBlue-20 to-cnBlue-15  text-white">
                    <span className="transition-allvisible opacity-100">
                      مشاهده دوره ها
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
