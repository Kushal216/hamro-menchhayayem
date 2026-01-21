"use client"
import HomeHeading from '@/components/homepage/HomeHeading';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext, useState } from 'react';
import { BsPlayBtnFill } from 'react-icons/bs';
import YoutubeIframe from './YoutubeIframe';

export default function CoverImage({ title, route }) {
    const paths = usePathname().replace(/\/$/, '').split('/');
    const path = paths[1];

    const [showVideo, setShowVideo] = useState(false)

  return (
    <div className="md:float-right md:aspect-video md:w-fit md:flex md:flex-col items-center">
      <div className="aspect-video w-full md:w-[55vw] md:float-right  relative mr-2">
        {!showVideo ? (
          <>
            <div className="absolute z-2 top-0 left-0 ">
              <HomeHeading title={title} color={'white'} fixed />
            </div>

            <BsPlayBtnFill
              onClick={() => {
                setShowVideo(true);
              }}
              className="absolute z-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl opacity-95"
            />

            <Image
              src={'/images/image.png'}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              alt="image of something"
              className="object-cover rounded-lg"
            />
          </>
        ) : (
          <YoutubeIframe id="53gNFOqDFcE" start="1:20" end="2:30" autoplay />
        )}
      </div>
      {path != 'literature' && (
        <Link
          href={`${route}/gallery`}
          className="text-blue-800 text-right text-sm lg:text-lg xl:text-xl  md:w-full md:mr-4 pl-2 block pt-1"
        >
          अन्य तस्बिरहरु &gt;&gt;
        </Link>
      )}
    </div>
  );
}
