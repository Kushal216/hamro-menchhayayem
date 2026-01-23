'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BiBookOpen, BiSolidCommentDots } from 'react-icons/bi';
import Like from '@/components/sections/Like';
import ShortText from '../sections/ShortText';

const categories = {
  story: 'कथा',
  poem: 'कविता',
  article: 'लेख',
};

export default function LiteratureCard({
  title,
  description,
  image,
  author,
  category = 'article',
  id,
}) {
  return (
    <div className="p-5 py-3 mx-2 flex flex-col justify-between h-full w-full bg-white rounded-2xl shadow-lg">
      {/* Title */}
      <h2 className="font-bold text-lg sm:text-xl md:text-2xl border-l-8 border-purple-700 pl-3 m-4">
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
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 450px"
          />
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pb-4 sm:px-5 sm:pb-5">
        {author && (
          <p className="text-sm text-gray-500 mt-3 italic">
            {author}
            <span className="font-bold mr-2 float-right">
              {categories[category]}
            </span>
          </p>
        )}

        <p className="text-sm sm:text-base md:text-lg leading-relaxed mt-2 h-20">
          <ShortText text={description} limit={180} />
        </p>

        {/* Actions */}
        <div className="flex sm:flex-row items-center justify-between gap-4 mt-5">
          <Link href={`/literature/${id}`} className="w-full">
            <button className="w-full bg-purple-800 text-white font-bold rounded-2xl px-5 py-2 hover:bg-purple-700 transition cursor-pointer flex items-center justify-center gap-2">
              <BiBookOpen size={18} />
              Read Literature
            </button>
          </Link>

          <div className="flex gap-5 items-center">
            <BiSolidCommentDots size={26} className="text-purple-500" />
            <Like totalLikes={10} />
          </div>
        </div>
      </div>
    </div>
  );
}
