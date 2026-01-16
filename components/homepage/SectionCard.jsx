import Image from 'next/image';
import React from 'react';

const SectionCard = ({ item }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
      <div className="bg-white w-full h-full hover:-translate-y-1 hover:scale-105 select-none p-2 rounded-2xl shadow-[0_4px_6px_-2px_rgba(0,0,0,0.3)] transition-transform duration-300">
        <div className="p-1">
          <Image
            src={item.imageUrl}
            alt="cover Image"
            width={400}
            height={300}
            className="object-cover w-full h-auto rounded-2xl"
          />
        </div>
        <div className="font-bold text-center mt-2">{item.title}</div>
        <div className="text-center text-gray-500">{item.subtitle}</div>
      </div>
    </div>
  );
};

export default SectionCard;
