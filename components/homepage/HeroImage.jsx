'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { RiArrowLeftWideFill, RiArrowRightWideFill } from 'react-icons/ri';

const HeroImage = () => {
  const heroPhotos = [
    { src: '/images/image.png', title: 'हाम्रो मेन्छ्यायेम बजार' },
    { src: '/images/logo.png', title: 'हाम्रो मेन्छ्यायेम बजार 1' },
    { src: '/images/sb-pp.jpeg', title: 'हाम्रो मेन्छ्यायेम बजार 2' },
    { src: '/images/kd-pp.jpeg', title: 'हाम्रो मेन्छ्यायेम बजार 3' },
  ];

  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      showNextImage();
    }, 3000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const photo = heroPhotos[heroIndex];
  return (
    <div className="relative w-fill h-[55vh] select-none">
      <Image
        src={photo.src}
        alt="hamro  menchhayayem"
        fill
        className="object-cover"
      />

      <div className="arrows absolute text-white flex justify-between w-full font-bold top-[35%]">
        <div
          className="larrow  p-1 pl-0 rounded-r-sm hover:bg-[#FFFFFF50] "
          onClick={showPreviousImage}
        >
          <RiArrowLeftWideFill size={48} />
        </div>
        <div
          className="larrow p-1 pr-0 rounded-l-sm hover:bg-[#FFFFFF50]"
          onClick={showNextImage}
        >
          <RiArrowRightWideFill size={48} />
        </div>
      </div>

      <div className="gradient h-40 pt-10 bg-linear-to-t from-[#00000090] to-[#00000000]  absolute bottom-0 w-full text-center text-white">
        <div className="text  text-5xl font-bold ">{photo.title}</div>

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
