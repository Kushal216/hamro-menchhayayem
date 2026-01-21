import HomeHeading from '@/components/homepage/HomeHeading';
import Image from 'next/image';
import React from 'react';
import BackButton from './BackButton';
import { fetchItem } from '@/lib/fetchItem';

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
const GalleryPage = async ({ route, id }) => {
  const res = await fetchItem(route, id);
  const culture = res.data;
  const gallery = culture.gallery;

  return (
    <>
      <BackButton gallery />

      <div className="flex flex-wrap m-2 gap-2">
        <div key={i} className="aspect-square w-40 relative col-span-1">
          <Image
            src={cover}
            fill
            className="object-cover rounded"
            alt="image"
          />
        </div>

        {gallery.map((url) => (
          <div key={i} className="aspect-square w-40 relative">
            <Image
              key={i++}
              src={url}
              fill
              className="object-cover rounded"
              alt="image"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default GalleryPage;
