import HomeHeading from '@/components/homepage/HomeHeading';
import Image from 'next/image';
import React from 'react';
import BackButton from './BackButton';
import { fetchItem } from '@/lib/fetchItem';
import Link from 'next/link';

const GalleryPage = async ({ route, id }) => {
  const res = await fetchItem(route, id);
  const culture = res.data;
  const gallery = culture.gallery;
  const cover = culture.coverImage;

  return (
    <>
      <BackButton gallery />

      <div className="flex flex-wrap m-2 gap-2">
        <Link
          href={cover}
          target="_blank"
          rel="noopener noreferrer"
          key="cover"
          className="hover:shadow-lg hover:scale-105 hover:-translate-y-1 aspect-square w-40 relative col-span-1"
        >
          <Image
            src={cover}
            fill
            className="object-cover rounded"
            alt="Gallery cover image"
          />
        </Link>

        {gallery.map((url, index) => (
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="hover:shadow-lg hover:scale-105 hover:-translate-y-1 aspect-square w-40 relative"
          >
            <Image
              src={url || '/images/fallback-image.jpg'}
              fill
              className="object-cover rounded"
              alt={`Gallery image ${index + 1}`}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default GalleryPage;
