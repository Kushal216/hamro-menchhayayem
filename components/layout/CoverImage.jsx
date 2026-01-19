import HomeHeading from '@/components/homepage/HomeHeading';
import Image from 'next/image';
import Link from 'next/link';
import { BsPlayBtnFill } from 'react-icons/bs';

export default function CoverImage({ title, route }) {
  return (
    <>
      <div className="aspect-video w-full md:w-[75%] md:float-right  relative mr-2">
        <div className="absolute z-2 top-0 left-0 ">
          <HomeHeading title={title} color={'white'} fixed />
        </div>

        <BsPlayBtnFill className="absolute z-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xl opacity-90" />

        <Image
          src={'/images/image.png'}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          alt="image of something"
          className="object-cover rounded-lg"
        />
        <Link href={`${route}/gallery`} className="absolute bottom-0 z-2 w-full text-center bg-[#00000040] pt-0.5 md:pt-1 text-white text-sm rounded-b-lg hover:underline hover:backdrop-blur-[1px]">
          आरु तस्बिर हेर्नुहोस &gt;&gt;
        </Link>
      </div>
    </>
  );
}
