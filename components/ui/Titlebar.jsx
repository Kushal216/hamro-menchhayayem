"use client";

import React from "react";
import { FaDiamond } from "react-icons/fa6";

function Titlebar({ title }) {
  return (
    <>
      <div className="bg-[#010BB2] px-4 py-1 text-2xl rounded font-bold text-white flex items-center m-2 mb-0 gap-2">
        <span>{title}</span>
        <FaDiamond size={18} className="ml-auto text-white" />
      </div>
    </>
  );
}

export default Titlebar;
