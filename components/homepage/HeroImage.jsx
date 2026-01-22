'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { RiArrowLeftWideFill, RiArrowRightWideFill } from 'react-icons/ri';

const HeroImage = () => {
  const heroPhotos = [
    { src: '/images/image.png', title: 'हाम्रो मेन्छ्यायेम बजार' },
    { src: '/images/logo.png', title: 'हाम्रो मेन्छ्यायेम बजार' },
    { src: '/images/sb-pp.jpeg', title: 'सुनिल भट्टराई' },
    { src: '/images/kd-pp.jpeg', title: 'कुशल ढकाल' },
  ];

  const [heroIndex, setHeroIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setHeroIndex((prev) => (prev + 1) % heroPhotos.length);
  }, 3000);

  return () => clearInterval(interval);
}, [heroPhotos.length]);


  const photo = heroPhotos[heroIndex];
  return (
    <div className="relative w-full aspect-video xl:aspect-5/2 select-none">

      <Image
        src={photo.src}
        alt="hamro  menchhayayem"
        fill
        className="object-cover"
      />

      <div className="arrows absolute text-white flex justify-between w-full font-bold top-[35%]">
        <div
          className="p-1 pl-0 rounded-r-sm h-10 md:h-fit hover:bg-[#FFFFFF50] "
          onClick={showPreviousImage}
        >
          <RiArrowLeftWideFill className="h-full text-2xl md:text-[48px]" />
        </div>
        <div
          className="p-1 pr-0 rounded-l-sm h-10 md:h-fit hover:bg-[#FFFFFF50]"
          onClick={showNextImage}
        >
          <RiArrowRightWideFill className="h-full text-2xl md:text-[48px]" />
        </div>
      </div>

      <div className="gradient h-30 md:h-40 pt-10 bg-linear-to-t from-[#00000090] to-[#00000000]  absolute bottom-0 w-full text-center text-white">
        <div className="text text-3xl  md:text-5xl font-bold ">
          {photo.title}
        </div>

        <div className="text-6xl leading-0">
          {heroPhotos.map((_, index) => (
            <Dot key={index} active={index === heroIndex} />
          ))}
        </div>
      </div>
    </div>
  );

  function showNextImage() {
    setHeroIndex((prev) => (prev + 1) % heroPhotos.length);
  }

  function showPreviousImage() {
    setHeroIndex((prev) => (prev - 1 + heroPhotos.length) % heroPhotos.length);
  }

  function Dot({ active }) {
    return <span className={active ? 'opacity-100' : 'opacity-70'}>.</span>;
  }
};

export default HeroImage;
