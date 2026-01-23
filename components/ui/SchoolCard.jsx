'use client';
import Image from 'next/image';
import Like from '@/components/sections/Like';
import { BiSolidCommentDots } from 'react-icons/bi';
import { FaLocationDot } from 'react-icons/fa6';
import { IoCall } from 'react-icons/io5';
import ShortText from '../sections/ShortText';
import Link from 'next/link';

export default function SchoolCard({
  title,
  description,
  image,
  phone,
  location,
  id,
}) {
  return (
    <div className="flex justify-center p-4 m-2 mb-3 shadow-lg rounded-2xl w-fit mx-auto">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl">
        <div className="text-2xl sm:text-3xl font-bold border-l-8 border-[#010BB2] pl-2 mb-3">
          {title}
        </div>

        <div className="relative w-full aspect-video mb-3">
          <Image
            src={image}
            alt={title}
            fill
            className="rounded-2xl object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 600px"
          />
          <a href={location} target="_blank" rel="noopener noreferrer">
            <FaLocationDot
              size={30}
              color="#FFFFFF"
              className="absolute bottom-4 right-4"
            />
          </a>
        </div>

        <div className="mt-2 pl-1">
          <div className="text-lg sm:text-xl pb-5 leading-[1.2]">
            <ShortText text={description} limit={200} />
          </div>

          <div className="flex sm:flex-row gap-3 sm:gap-0 sm:items-center ">

            <Link href={`/schools/${id}`} className="w-full">
              <button className=" w-full sm:w-auto border px-4 py-2 rounded-2xl font-bold bg-black text-white hover:bg-gray-800 transition cursor-pointer">
                Read More
              </button>
            </Link>

            <div className="flex gap-5 mt-2 sm:mt-0 ml-auto sm:pr-4 justify-center">
              <a href={`tel:${phone}`}>
                <IoCall size={35} color="#018378" />
              </a>
              <BiSolidCommentDots size={35} color="#00AAFF" />
              <Like totalLikes={10} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
