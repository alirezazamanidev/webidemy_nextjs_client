
'use client'
import { FaSearch } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { FC,useState } from "react";
import SideBarLayout from './SidebarLayout'
const NavbarLayout: FC = () => {
    const [openSideBar,setOpenSidebar]=useState(false);
  return (
    <>
      <nav className="  bg-dark-600   py-5 px-4 md:px-10 lg:px-20  flex  justify-between">
    <SideBarLayout open={openSideBar} setOpen={setOpenSidebar} />
        <div className=" flex items-center">
          <button className=" ml-8 md:hidden " onClick={()=>setOpenSidebar(true)}>
            <HiMenuAlt3 className=" text-2xl"/>
          </button>

          <form className=" flex bg-gray-200 items-center p-2 rounded-lg shadow-md">
            <input
              type="text"
              placeholder="جستجو ..."
              className=" outline-none  bg-transparent "
            />
            <button>
              <FaSearch />
            </button>
          </form>
        </div>
        <div className=" hidden sm:flex items-center text-yellow-50 text-xs ">
          <button className=" bg-indigo-600 px-2 py-1 rounded-lg">3</button>
          <button className=" bg-red-700 px-2 py-1 mr-3 rounded-lg">15</button>
        </div>
      </nav>
    </>
  );
};

export default NavbarLayout;
