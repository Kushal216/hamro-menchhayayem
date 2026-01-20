import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const oldCard = `
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
`;

const SectionCard = ({ item }) => {
  return (
    <Link
      href={item.route ? item.route : '/'}
      className="relative h-25 md:h-50 w-[90%] md:w-80 lg:w-90 xl:w-100 rounded-2xl overflow-clip shadow-lg hover:shadow-[#00000060] hover:scale-101 hover:-translate-y-0.5 select-none cursor-pointer mx-auto"
    >
      <div className="absolute h-full w-full bg-linear-to-t from-[#00000099] to-[#00000040] backdrop-blur-[2px] z-2">
        <div className="flex md:flex-col h-full gap-4 md:gap-1 items-center justify-center px-2">
          <div className="w-15 md:w-20 aspect-square relative mb-2 ml-2 md:ml-0">
            <Image
              src={item.iconUrl}
              alt={`${item.title} icon`}
              fill
              className="object-contain"
            />
          </div>
          <div className='md:text-center'>
            <div className="font-bold text-white w-full text-2xl my-1">
              {item.title}
            </div>
            <div className="text-white w-full md:text-lg leading-6">
              {item.subtitle}
            </div>
          </div>
        </div>
      </div>
      <Image
        src={item.imageUrl}
        alt="item.title"
        className="object-cover"
        fill
      />
    </Link>
  );
};

export default SectionCard;
