"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const Main = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="pt-2 bg-white rounded-lg">
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              className="flex justify-between mx-5"
            >
              <Tab className="font-bold text-xs" label="Primary" value="1" />
              <Tab
                className="mx-10 font-bold text-xs"
                label="Promotions"
                value="2"
              />
              <Tab
                className="mx-10 font-bold font-bold text-xs"
                label="Social"
                value="3"
              />
            </TabList>
          </Box>
          <div className="w-full  bg-gray-500 h-[1px] mb-[1px]"></div>
          <TabPanel
            className="border border-gray-500 h-screen "
            value="1"
          ></TabPanel>
          <TabPanel
            className="border border-gray-500 h-screen"
            value="2"
          ></TabPanel>
          <TabPanel
            className="border border-gray-500 h-screen"
            value="3"
          ></TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default Main;
