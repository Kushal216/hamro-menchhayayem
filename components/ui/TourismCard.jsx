'use client';
import Image from 'next/image';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Like from '@/components/sections/Like';
import { BiSolidCommentDots } from 'react-icons/bi';
import ShortText from '../sections/ShortText';
import Link from 'next/link';

export default function TourismCard({ image, title, description, id }) {
  return (
    <div className="w-full mx-auto p-4">
      <div className="bg-white rounded-2xl shadow-[0_4px_6px_-2px_rgba(0,0,0,0.3)] overflow-hidden">
        <div className="flex flex-col md:flex-row gap-4 p-4">
          <div className="w-full md:w-2/5">
            <Image
              src={image}
              alt={title}
              width={200}
              height={150}
              className="w-full h-full rounded-xl object-cover aspect-6/3"
              priority
            />
          </div>

          <div className="w-full md:w-2/3 flex flex-col">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold border-l-8 border-[#010BB2] pl-3">
              {title}
            </h2>

            <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              <ShortText text={description} limit={300} />
            </p>

            <div className="mt-auto pt-3 flex items-center justify-between font-bold">
              <Link href={`/places/${id}`} className=" w-full">
                <button className=" px-4 py-2 cursor-pointer rounded-xl bg-black text-white text-sm sm:text-base hover:bg-gray-800 transition">
                  Read More
                </button>
              </Link>

              <div className="flex items-center gap-5">
                <a
                  href="https://maps.app.goo.gl/TWWj8hvyH3dsuDsm8"
                  target="_blank"
                >
                  <FaMapMarkerAlt
                    size={33}
                    className="text-black text-lg cursor-pointer hover:scale-110 transition"
                  />
                </a>
                <BiSolidCommentDots
                  size={33}
                  className="text-[#00AAFF] text-lg cursor-pointer hover:scale-110 transition"
                />
                <Like totalLikes={10} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
