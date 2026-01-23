'use client';
import HomeHeading from '@/components/homepage/HomeHeading';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext, useState } from 'react';
import { BsPlayBtnFill } from 'react-icons/bs';
import YoutubeIframe from './YoutubeIframe';

export default function CoverImage({ title, coverImage, route, video }) {
  const [showVideo, setShowVideo] = useState(false);
  const paths = usePathname().replace(/\/$/, '').split('/');
  const path = paths[1];

  const { id, start, end } = video;

  // videoId = 'PhOMPJWPDLU'; //testing

  return (
    <div className="md:float-right md:w-fit md:flex md:flex-col items-center md:ml-4">
      <div className="aspect-32/15 w-full md:w-[55vw] md:float-right  relative mr-2">
        {!showVideo ? (
          <>
            <div className="absolute z-2 top-0 left-0 ">
              <HomeHeading title={title} color={'white'} fixed />
            </div>

            {id && (
              <BsPlayBtnFill
                onClick={() => {
                  setShowVideo(true);
                }}
                className="absolute z-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl md:text-3xl xl:text-5xl  opacity-95"
              />
            )}

            <Image
              src={coverImage}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              alt="image of something"
              className="object-cover rounded-lg"
            />
          </>
        ) : (
          <YoutubeIframe id={id} start={start} end={end} autoplay />
        )}
      </div>
      {path != 'literature' && (
        <div
          href={`${route}/gallery`}
          className="text-blue-800 hover:underline active:text-red-500 text-right text-sm lg:text-lg xl:text-xl  md:w-full md:mr-4 pl-2 block pt-1"
        >
          <Link href={`${route}/gallery`}>अन्य तस्बिरहरु &gt;&gt;</Link>
        </div>
      )}
    </div>
  );
}
