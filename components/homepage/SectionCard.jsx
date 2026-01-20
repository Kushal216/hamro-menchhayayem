import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SectionCard = ({ item }) => {
  const scale = item.route == '/places';

  return (
    <Link
      href={item.route ? item.route : '/'}
      className="relative w-[90%] aspect-10/3 md:h-full xl:h-78 col-span-3 md:col-span-1  md:aspect-4/3 inline-block md:w-full  rounded-2xl overflow-clip shadow-lg hover:shadow-[#00000060] hover:scale-101 hover:-translate-y-0.5 select-none cursor-pointer mx-auto md:mb-8"
    >
      <div className="absolute h-full w-full bg-linear-to-t from-[#00000099] to-[#00000040] backdrop-blur-[2px] z-2">
        <div className="flex md:flex-col h-full gap-4 md:gap-1 items-center justify-center px-2">
          <div className="w-10 md:w-12 lg:w-17 xl:w-20 aspect-square relative mb-2 xl:mb-8 ml-2 md:ml-0">
            <Image
              src={item.iconUrl}
              alt={`${item.title} icon`}
              fill
              className={`object-contain ${scale && 'scale-144 group-hover:scale-150 group-hover:-translate-y-0.5'}`}
            />
          </div>
          <div className="md:text-center">
            <div className="font-bold text-white w-full text-xl md:text-2xl xl:text-3xl my-1">
              {item.title}
            </div>
            <div className="text-white w-full xl:text-xl leading-6">
              {item.subtitle}
            </div>
          </div>
        </div>
      </div>
      <Image
        src={item.imageUrl}
        alt="item.title"
        className={`object-cover`}
        fill
      />
    </Link>
  );
};

export default SectionCard;
