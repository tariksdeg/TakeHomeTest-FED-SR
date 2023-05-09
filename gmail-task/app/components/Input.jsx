"use client";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
const Input = () => {
  const [value, setValue] = useState(false);
  const clas =
    value === false
      ? " hidden "
      : "absolute bg-white w-full h-auto border border-gray-300 rounded-lg top-12 right-0 z-[2] group ";
  return (
    <div className="flex justify-between  group ">
      <div>
        <SearchIcon />
      </div>
      <div className="w-full ">
        <input
          className="bg-gray-300 text-black focus:bg-white focus:outline-none mx-5 group-focus-within:bg-white"
          placeholder="Search in mail"
        />
      </div>
      <div>
        <div className="cursor-pointer" onClick={() => setValue(!value)}>
          <TuneIcon />
        </div>
      </div>
      <div className={clas}>
        <div className="flex flex-col">
          <div className="flex p-10 justify-between">
            <div className="text-gray-600 font-medium">From </div>
            <input
              className="border-b border-blue-500 w-3/4 focus:outline-none"
              placeholder=""
            />
          </div>
          <div className="flex p-10 justify-between">
            <div className="text-gray-600 font-medium">To </div>
            <input
              className="border-b border-blue-500 w-3/4 focus:outline-none"
              placeholder=""
            />
          </div>
          <div className="w-full flex justify-end p-10">
            <button className="bg-blue-500 p-2 rounded-lg font-semibold text-white ">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
