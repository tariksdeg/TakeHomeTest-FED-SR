"use client";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import { Input as InputItem } from "@mui/material";
const Input = () => {
  return (
    <div className="flex justify-between">
      <div>
        <SearchIcon />
      </div>
      <div className="w-full">
        <input
          className="bg-gray-300 text-black focus:bg-white focus:outline-none mx-5"
          placeholder="Search in mail"
        />
      </div>
      <div>
        <TuneIcon />
      </div>
    </div>
  );
};

export default Input;
