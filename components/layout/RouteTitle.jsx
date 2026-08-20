'use client';
import Link from 'next/link';
import { IoArrowBackSharp } from 'react-icons/io5';

const RouteTitle = ({ title }) => {
  return (
    <div className="flex items-center gap-3 px-4 py-3 mt-4 mx-2 border-l-4 border-[#FF3B00] bg-gray-50 rounded-r-lg">
      <Link
        href="/"
        className="flex items-center justify-center w-9 h-9 rounded-full bg-white shadow hover:bg-gray-100 transition-colors shrink-0"
        aria-label="घर फर्कनुहोस्"
      >
        <IoArrowBackSharp className="text-[#FF3B00] text-lg" />
      </Link>
      <h1 className="font-bold text-xl md:text-2xl text-gray-900 truncate">{title}</h1>
    </div>
  );
};

export default RouteTitle;
