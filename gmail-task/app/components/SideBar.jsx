"use client";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import InboxIcon from "@mui/icons-material/Inbox";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ForwardIcon from "@mui/icons-material/Forward";
import GroupIcon from "@mui/icons-material/Group";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
const SideBar = ({ setNavRoute, navRoute }) => {
  const clas =
    navRoute === false
      ? "hidden "
      : "w-[310px] flex flex-col h-auto  absolute top-24 left-[90px] ";
  return (
    <div className="flex flex-col justify-center items-center px-5 py-8 relative">
      <div
        className="w-full flex items-center justify-center cursor-pointer "
        onClick={() => setNavRoute(!navRoute)}
      >
        <MenuIcon />
      </div>
      <div className="flex flex-col items-center justify-center pt-8">
        <div>
          <MarkunreadIcon />
        </div>
        <div className="pt-1 text-sm font-semibold">Mail</div>
      </div>
      <div className="flex flex-col items-center justify-center pt-5">
        <div>
          <ChatBubbleOutlineIcon />
        </div>
        <div className="text-sm pt-1 font-semibold">Chat</div>
      </div>
      <div className={clas}>
        <div className="flex justify-between bg-gray-300 rounded-lg pl-4 py-2">
          <div className="flex ml-2">
            <div>
              <InboxIcon sx={{ height: 23, width: 23 }} />
            </div>
            <div className="font-bold mx-5 text-gray-600 text-md">Inbox</div>
          </div>
          <div className="font-bold text-sm flex items-center mr-2">43</div>
        </div>
        <div className="flex   py-2">
          <div>
            <KeyboardArrowDownIcon />
          </div>
          <div>
            <ForwardIcon />
          </div>
          <div className="font-medium text-gray-500 ml-4 text-md">
            Categories
          </div>
        </div>
        <div className="flex justify-between  rounded-lg pl-4 py-2">
          <div className="flex ml-6">
            <div>
              <GroupIcon sx={{ height: 23, width: 23 }} />
            </div>
            <div className="font-bold mx-5 text-gray-600 text-md">Social</div>
          </div>
          <div className="font-medium text-sm flex text-gray-600 items-center mr-2">
            2
          </div>
        </div>{" "}
        <div className="flex justify-between rounded-lg pl-4 py-2">
          <div className="flex ml-6">
            <div>
              <ErrorOutlineIcon sx={{ height: 23, width: 23 }} />
            </div>
            <div className="font-bold mx-5 text-gray-600 text-md">Updates</div>
          </div>
          <div className="font-semibold text-sm text-gray-600 flex items-center mr-2">
            43
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
