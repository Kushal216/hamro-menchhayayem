"use client";

import React from "react";
import Image from "next/image";
import { BiSolidCommentDots } from "react-icons/bi";
import { FaHeart } from "react-icons/fa6";

export default function CultureCard({ title, description, image }) {
  const isAll = false;
  const shortDescription = (description || "").slice(0, 200) + " ...";
  return (
    <div className="p-4 sm:p-6 md:p-8">
      <div className="rounded-2xl shadow-lg bg-white overflow-hidden  max-w-full sm:max-w-md md:max-w-lg mx-auto">
        <div className="md:text-2xl  font-bold border-l-8 border-[#010BB2]  pl-3 m-3 mx-4">
          {title}
        </div>

        <div className="w-full">
          <Image
            src={image}
            alt={title}
            className="rounded-2xl h-auto object-cover p-3"
            width={450}
            height={200}
          />
        </div>

        <div className="pb-3 sm:p-4">
          <p className="text-base sm:text-lg leading-5">
            {isAll ? description : shortDescription}
          </p>

          <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-3 mt-4">
            <button className="w-full sm:w-auto bg-black text-white font-bold rounded-2xl px-4 py-2 hover:bg-gray-800 transition">
              Read More
            </button>

            <div className="flex gap-4 text-center">
              <BiSolidCommentDots size={28} color="#00AAFF" />
              <FaHeart size={28} color="#FF0000" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
