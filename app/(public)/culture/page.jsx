"usse client";
import Image from "next/image";
import Titlebar from "@/components/ui/Titlebar";
import { FaHeart } from "react-icons/fa";
import { BiSolidCommentDots } from "react-icons/bi";

import pic from "@/public/images/image.png";

export default function TourismPage() {
  const title = "SHREE GAUKHARI DHAM";
  const text =
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat amet saepe sequi ab! Veniam cumque eaque necessitatibus ea consequuntur ad eius commodi corrupti missimos quis. Qui earum enim";
  return (
    <>
      <div className="flex-4/5 p-4">
        <Titlebar title="परीचय" />

        <div className=" m-5 rounded-2xl p-2 shadow-[0_4px_6px_-2px_rgba(0,0,0,0.3)] bg-white w-100 h-130 relative">
          <div className="text-2xl font-bold border-l-8 border-[#010BB2] pl-2 mb-3 ">
            {title}
          </div>
          <div className="flex">
            <Image
              src={pic}
              alt="Tourism Place"
              className="rounded-2xl  aspect-3/2 "
              width={1000}
            />
          </div>
          <div className="mt-2 pl-1">
            <div className="text-xl pb-5 leading-[1.1]">{text}</div>
            <div className="w-full flex gap-5 mt-3 absolute bottom-2 items-center">
              <button className="border p-2 px-3 w-full  rounded-2xl font-bold bg-black text-white">
                Read More
              </button>
              <div className="ml-auto mt-2 pr-10 flex gap-5 justify-center ">
                <BiSolidCommentDots size={35} color="#00AAFF" />
                <FaHeart size={35} color="#FF0000" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
