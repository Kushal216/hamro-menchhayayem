"use client";
import Image from "next/image";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedinIn,
  FaInstagram,
  FaFacebook,
  FaLink,
} from "react-icons/fa";
function OurCard({
  image,
  name,
  position,
  website = false,
  phone,
  email,
  linkedin = false,
  instagram = false,
  facebook = false,
  imgHeight = 200,
  imgWidth=200,
  height = 100,
  width = 100,
})

{
  return (
    <div className="flex justify-center">
      <div className=" mt-3 p-2  rounded-2xl shadow-lg "
      style={{ height: `${height}px`, width:`${width}`}}
      >
        <div className="flex justify-center">

        <Image
          src={image}
          alt="Photo"
          className="rounded-3xl pt-2 p-1"
          height={imgHeight}
          width={imgWidth}
          priority
          />
          </div>

        <div className="flex text-2xl font-bold justify-center ">
          {name}
          {website ? (
            <a href={website} target="_blank" rel="noopener noreferrer">
              <FaLink size={30} className="pl-2" />
            </a>
          ) : (
            ""
          )}
        </div>
        {position ? (
          <div
            className="text-[#303030]  flex justify-center pr-9"
            target="_blank"
          >
            {position}
          </div>
        ) : (
          ""
        )}
        <div className="flex mt-2 gap-4 justify-center ">
          {phone ? (
            <a href={`tel:${phone}`} rel="noopener noreferrer">
              <FaPhoneAlt size={20} className="text-[#018378]" />
            </a>
          ) : (
            ""
          )}

          {email ? (
            <a href={`mailto:${email}`} rel="noopener noreferrer">
              <FaEnvelope
                size={20}
                className="text-[#018378]"
                target="_blank"
              />
            </a>
          ) : (
            ""
          )}
          {linkedin ? (
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn size={20} className="text-[#018378]" />
            </a>
          ) : (
            ""
          )}
          {instagram ? (
            <a href={instagram} target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} className="text-[#018378]" />
            </a>
          ) : (
            ""
          )}
          {facebook ? (
            <a href={facebook} target="_blank " rel="noopener noreferrer">
              <FaFacebook size={20} className="text-[#018378]" />
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default OurCard;
