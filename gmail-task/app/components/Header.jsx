"use client";
import React, { useState } from "react";
import Image from "next/image";
import Input from "./Input";
import SettingsIcon from "@mui/icons-material/Settings";
import Drawer from "@mui/material/Drawer";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <div className="flex flex-row justify-between  h-full py-5 justify-center items-center ">
      <div className="flex">
        <div>
          <Image width={30} height={30} alt="Logo" src="/logo.png" />
        </div>
        <div className="ml-2 text-lg font-semibold text-gray-600">Gmail</div>
      </div>
      <div className="w-1/2 py-3 px-5 bg-gray-300 rounded-lg focus-within:bg-white relative">
        <Input />
      </div>
      <div>
        <div className="cursor-pointer">
          <SettingsIcon onClick={handleDrawerToggle} />
          <div></div>
        </div>
      </div>
      <div className="cursor-pointer">
        <AppsIcon />
      </div>
      <div className="cursor-pointer">
        <AccountCircleIcon />
      </div>
      <Drawer
        className="mt-5"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
      >
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Settings</h2>
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
