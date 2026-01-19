import HomeHeading from '@/components/homepage/HomeHeading';
import Image from 'next/image';
import React from 'react';
import BackButton from './BackButton';

let images = [
  '/images/image.png',
  '/images/image.png',
  '/images/image.png',
  '/images/image.png',
  '/images/image.png',
  '/images/image.png',
  '/images/image.png',
];

let cover = '/images/image.png';
let i = 0;
const GalleryPage = (item) => {
  return (
    <>
      <BackButton gallery/>

      <div className="grid justify-center md:grid-cols-3 lg:grid-cols-4 m-2 gap-2">
        <Image
          src={cover}
          width={500}
          height={300}
          className="object-cover m-1 col-span-3 md:col-span-2 row-span-2 basis-125"
          alt="image"
        />

        {images.map((url) => (
          <div key={i} className="aspect-square w-40 relative col-span-1">
            <Image
              key={i++}
              src={url}
              fill
              className="object-cover"
              alt="image"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default GalleryPage;
