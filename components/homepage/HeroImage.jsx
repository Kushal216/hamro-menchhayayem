'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { RiArrowLeftWideFill, RiArrowRightWideFill } from 'react-icons/ri';

const HeroImage = () => {
  const heroPhotos = [
    { src: '/images/hero-images/hero0.webp', title: 'हाम्रो मोराहाङ्ग बजार' },
    { src: '/images/hero-images/hero1.webp', title: 'पालिका कार्यलय' },
    { src: '/images/hero-images/hero3.webp', title: 'गौखुरिधाम' },
    { src: '/images/hero-images/hero2.webp', title: 'ऐतिहासिक गुम्बा' },
    { src: '/images/hero-images/hero4.webp', title: 'पालिका सदस्यहरु' },
    { src: '/images/hero-images/hero5.webp', title: 'धान नाच' },
  ];

  const [heroIndex, setHeroIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const showNextImage = useCallback(() => {
    setHeroIndex((prev) => (prev + 1) % heroPhotos.length);
  }, [heroPhotos.length]);

  const showPreviousImage = useCallback(() => {
    setHeroIndex((prev) => (prev - 1 + heroPhotos.length) % heroPhotos.length);
  }, [heroPhotos.length]);

  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(showNextImage, 3000);
    return () => clearInterval(intervalRef.current);
  }, [isPaused, showNextImage]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') showPreviousImage();
      if (e.key === 'ArrowRight') showNextImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showNextImage, showPreviousImage]);

  const photo = heroPhotos[heroIndex];
  const nextPhoto = heroPhotos[(heroIndex + 1) % heroPhotos.length];

  return (
    <div
      className="relative w-full aspect-video xl:aspect-5/2 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Image
        sizes="(max-width: 768px) 100vw, 50vw"
        src={photo.src}
        alt={photo.title}
        fill
        priority
        className="object-cover"
      />
      <Image
        src={nextPhoto.src}
        alt=""
        fill
        className="object-cover absolute opacity-0"
        priority={false}
      />

      <div className="arrows absolute text-white flex justify-between w-full font-bold top-[35%]">
        <button
          onClick={showPreviousImage}
          aria-label="Previous slide"
          className="p-1 pl-0 rounded-r-sm h-10 md:h-fit hover:bg-[#FFFFFF50] min-w-[44px] min-h-[44px] flex items-center justify-center"
        >
          <RiArrowLeftWideFill className="h-full text-2xl md:text-[48px]" />
        </button>
        <button
          onClick={showNextImage}
          aria-label="Next slide"
          className="p-1 pr-0 rounded-l-sm h-10 md:h-fit hover:bg-[#FFFFFF50] min-w-[44px] min-h-[44px] flex items-center justify-center"
        >
          <RiArrowRightWideFill className="h-full text-2xl md:text-[48px]" />
        </button>
      </div>

      <div className="gradient h-30 md:h-40 pt-10 bg-linear-to-t from-[#00000090] to-[#00000000]  absolute bottom-0 w-full text-center text-white">
        <div className="text text-3xl  md:text-5xl font-bold ">
          {photo.title}
        </div>

        <div className="flex justify-center gap-2 mt-2">
          {heroPhotos.map((_, index) => (
            <button
              key={index}
              onClick={() => setHeroIndex(index)}
              aria-label={`Go to slide ${index + 1}: ${heroPhotos[index].title}`}
              className={`w-3 h-3 rounded-full transition-all ${
                index === heroIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
