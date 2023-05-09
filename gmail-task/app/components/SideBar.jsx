"use client";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
const SideBar = () => {
  return (
    <div className="flex flex-col justify-center items-center px-5 py-8">
      <div className="w-full flex items-center justify-center">
        <MenuIcon />
      </div>
      <div className="flex flex-col items-center justify-center pt-8">
        <div>
          <MarkunreadIcon />
        </div>
        <div className="pt-1 text-sm font-bold">Mail</div>
      </div>
      <div className="flex flex-col items-center justify-center pt-5">
        <div>
          <ChatBubbleOutlineIcon />
        </div>
        <div className="text-sm pt-1">Chat</div>
      </div>
    </div>
  );
};

export default SideBar;
