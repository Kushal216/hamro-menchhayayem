'use client';
import BackButton from '@/components/layout/BackButton';
import React from 'react';

export default function Loading() {
  const paragraphArray = Array(6).fill(0);

  return (
    <div className="px-2 mt-2">
      <BackButton />

      <div className="md:flex md:flex-row-reverse">
        <div className="aspect-32/15 w-full md:w-[55vw] md:float-right  relative mr-2 md:aspect-video  md:flex md:flex-col items-center md:ml-4 animate-pulse">
          {/* Image Placeholder with gradient shimmer */}
          <div className="bg-gray-200 relative overflow-hidden rounded-lg md:float-right md:aspect-video md:w-[55vw]  items-center md:ml-4">
            <div className="absolute inset-0 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 animate-[shimmer_1.5s_infinite]"></div>
            <div className="aspect-32/15 w-full md:w-[55vw] relative"></div>
          </div>
        </div>

        <div className='md:w-full'>
          <div className="font-bold text-xl lg:text-3xl text-black border-b-2 lg:border-b-4 border-red-500 w-fill inline-block px-2 mt-2 mb-2">
            परिचय
          </div>
          <div className="space-y-2 md:flex-1">
            {paragraphArray.map((_, i) => (
              <div
                key={i}
                className={`h-4 bg-gray-200 rounded ${
                  i % 3 === 0 ? 'w-5/6' : i % 3 === 1 ? 'w-3/4' : 'w-2/3'
                } relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 animate-[shimmer_1.5s_infinite]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-[shimmer_1.5s_infinite] {
          animation: shimmer 1.5s infinite linear;
        }
      `}</style>
    </div>
  );
}
