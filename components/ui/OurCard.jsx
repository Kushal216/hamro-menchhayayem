"use client";
import Image from "next/image";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedinIn,
  FaInstagram,
  FaLink,
} from "react-icons/fa";
function OurCard({
  image,
  name,
  position,
  website,
  phone,
  email,
  linkedin,
  instagram,
}) {
  return (
    <div className=" mt-3 p-2 w-80 h-128 rounded-2xl shadow-[0_4px_6px_-2px_rgba(0,0,0,0.3)] ">
      <Image
        src={image}
        alt="down arrow"
        className="rounded-3xl p-1"
          height={300}
        width={300}
        priority
      />

      <div className="flex text-2xl font-bold justify-center ">
        {name}
        <a href={website} target="_blank">
          <FaLink size={30} className="pl-2" />
        </a>
      </div>
      <div className="text-[#303030]  flex justify-center pr-9" target="_blank">
        {position}
      </div>
      <div className="flex mt-2 gap-4 justify-center ">
        <a href={`tel:${phone}`}>
          <FaPhoneAlt size={20} className="text-[#018378]" />
        </a>
        <a href={`mailto:${email}`}>
          <FaEnvelope size={20} className="text-[#018378]" target="_blank" />
        </a>
        <a href={linkedin} target="_blank">
          <FaLinkedinIn size={20} className="text-[#018378]" />
        </a>
        <a href={instagram} target="_blank">
          <FaInstagram size={20} className="text-[#018378]" />
        </a>
      </div>
    </div>
  );
}

export default OurCard;
