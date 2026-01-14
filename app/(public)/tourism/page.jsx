"usse client";
import Image from "next/image";
import { FaMapMarkerAlt, FaHeart } from "react-icons/fa";
import { BiSolidCommentDots } from "react-icons/bi";

import pic from "@/public/images/image.png";

export default function TourismPage() {
  const title = "SHREE GAUKHARI DHAM";
  const text =
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat amet saepe sequi ab! Veniam cumque eaque necessitatibus ea consequuntur ad eius commodi corrupti missimos quis. Qui earum enim aperiam repellat.";
  return (
    <>
      <div className=" m-5 rounded-2xl p-2 shadow-[0_4px_6px_-2px_rgba(0,0,0,0.3)] bg-white flex">
        <div className="flex">
          <Image
            src={pic}
            alt="Tourism Place"
            className="rounded-2xl aspect-4/3 "
            width={500}
          />
        </div>
        <div className="pl-3 relative">
          <div className="text-3xl font-bold border-l-8 border-[#010BB2] pl-2 ">
            {title}
          </div>
          <div className="text-xl">{text}</div>
          <div className="w-full flex mt-3 absolute bottom-0 justify-between">
            <button className="border p-2 px-3  rounded-2xl bg-black text-white">
              Read More
            </button>
            <div className="ml-auto mt-2 pr-10 flex gap-5 ">
              <FaMapMarkerAlt size={30} color="#000000" />
              <BiSolidCommentDots size={30} color="#00AAFF" />
              <FaHeart size={30} color="#FF0000" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
