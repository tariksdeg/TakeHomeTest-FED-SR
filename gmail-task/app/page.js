"use client";
import React, { useState } from "react";
import Sidebar from "../app/components/SideBar";
import Header from "../app/components/Header";
import Main from "../app/components/Main";
export default function Home() {
  const [navRoute, setNavRoute] = useState(false);
  const clas = navRoute === false ? "w-full" : "w-10/12";
  return (
    <main className="flex min-h-screen flex-row">
      <div className="bg-gray-300 w-[5%]">
        <Sidebar
          setNavRoute={(data) => setNavRoute(data)}
          navRoute={navRoute}
        />
      </div>
      <div className=" w-full px-5 flex flex-col">
        <div>
          <Header />
        </div>
        <div className="w-full flex justify-end">
          <div className={clas}>
            <Main
              setNavRoute={(data) => setNavRoute(data)}
              navRoute={navRoute}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
