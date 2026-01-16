"use client";

import React from "react";
import Image from "next/image";
import { BiSolidCommentDots } from "react-icons/bi";
import { FaHeart } from "react-icons/fa6";

export default function CultureCard({ title, description, image }) {
  const isAll = false;
  const shortDescription = (description || "").slice(0, 200) + " ...";

  return (
    <div className="p-3 sm:p-5 md:p-8 mx-auto">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-full sm:max-w-md md:max-w-lg mx-auto">
        {/* Title */}
        <h2 className="font-bold text-lg sm:text-xl md:text-2xl border-l-8 border-[#010BB2] pl-3 m-4">
          {title}
        </h2>

        {/* Image */}
        <div className="flex justify-center px-4">
          <div className="relative w-full aspect-5/3 sm:aspect-4/3 md:aspect-video">
            <Image
              src={image}
              alt={title}
              fill
              className="rounded-2xl object-cover"
              sizes="(max-width: 640px) 100vw,
                     (max-width: 1024px) 80vw,
                     450px"
            />
          </div>
        </div>

        {/* Content */}
        <div className="px-4 pb-4 sm:px-5 sm:pb-5">
          <p className="text-sm sm:text-base md:text-lg leading-relaxed mt-3">
            {isAll ? description : shortDescription}
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-5">
            <button className="w-full sm:w-auto bg-black text-white font-bold rounded-2xl px-5 py-2 hover:bg-gray-800 transition">
              Read More
            </button>

            <div className="flex gap-5">
              <BiSolidCommentDots size={26} className="text-sky-500" />
              <FaHeart size={26} className="text-red-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
