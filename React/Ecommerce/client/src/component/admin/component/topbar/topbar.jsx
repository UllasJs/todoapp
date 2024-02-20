import React from "react";
import { TbMessage2 } from "react-icons/tb";
import { IoNotifications } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { CgMenuRightAlt } from "react-icons/cg";

function Topbar() {
  return (
    <div className="h-[3.2rem] w-full px-2 py-1 container">
      <div className="w-full h-full flex justify-between items-center text-white text-2xl">
        <h1>Logo</h1>
        <div className="flex items-center gap-5">
          <div>
            <TbMessage2 className="hover:text-red-500 cursor-pointer" />
          </div>
          <div>
            <IoNotifications className="hover:text-red-500 cursor-pointer" />
          </div>
          <div>
            <FaRegUserCircle className="hover:text-red-500 cursor-pointer" />
          </div>
          <div>
            <CgMenuRightAlt className="hover:text-red-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
