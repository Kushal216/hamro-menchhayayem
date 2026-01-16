"use client";

import React from "react";
import { FaDiamond } from "react-icons/fa6";

function Titlebar({ title }) {
  return (
    <>
      <div className="bg-[#010BB2] px-2 py-1  md:text-2xl rounded font-bold text-white flex items-center m-2 mb-0 gap-2">
        <FaDiamond size={10} className="ml-aut text-white" />
        <span>{title}</span>
      </div>
    </>
  );
}

export default Titlebar;
