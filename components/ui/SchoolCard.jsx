'use client';
import Image from 'next/image';
import Like from '@/components/sections/Like';
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
  likes = 0,
}) {
  return (
    <div className="p-4 mx-4 m-2 mb-3">
      <Link href={`/schools/${id}`} className="block">
        <div className="flex flex-col justify-center shadow-lg rounded-2xl w-full max-w-md sm:max-w-lg md:max-w-xl hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer">
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
            {location && (
              <a
                href={location}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <FaLocationDot
                  size={30}
                  color="#FFFFFF"
                  className="absolute bottom-4 right-4"
                />
              </a>
            )}
          </div>

          <div className="mt-2 pl-1">
            <div className="text-lg sm:text-xl pb-5 leading-[1.2]">
              <ShortText text={description} limit={200} />
            </div>

            <div className="flex gap-3 sm:gap-0 sm:items-center">
              <span className="w-full sm:w-auto border px-4 py-2 rounded-2xl font-bold bg-black text-white text-center">
                थप पढ्नुहोस्
              </span>

              <div className="flex gap-5 items-center mt-2 sm:mt-0 ml-auto sm:pr-4 justify-center">
                {phone && (
                  <a href={`tel:+977${phone.replace(/-/g, '').replace(/^0/, '')}`} onClick={(e) => e.stopPropagation()}>
                    <IoCall size={30} color="#018378" />
                  </a>
                )}
                <Like totalLikes={likes} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
