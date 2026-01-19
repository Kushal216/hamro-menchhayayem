import HomeHeading from '@/components/homepage/HomeHeading';
import Titlebar from '@/components/ui/Titlebar';
import Image from 'next/image';
import React from 'react';

const page = (content) => {
  return (
    <>
      <div className="w-full flex flex-col justify-center px-2 relative mt-2 select-none">
        <div className="aspect-video w-full lg:w-[90%] xl:w-[80%] md:w-full relative mx-auto">
          <div className="absolute z-2 top-0 left-0 ">
            <HomeHeading
              title={'श्री गौखुरी उच्च माध्यामिक विद्यालाय'}
              color={'white'}
              fixed
            />
          </div>
          <Image
            src={'/images/image.png'}
            fill
            alt="image of something"
            className="object-cover rounded-lg"
          />
          <div className='absolute bottom-0 z-2 w-full text-center bg-[#00000040] pt-0.5 md:pt-1 text-white text-sm rounded-b-lg hover:underline hover:backdrop-blur-[1px]'>आरु तस्बिर हेर्नुहोस &gt;&gt;</div>
        </div>

        <div>परिचय</div>
      </div>
    </>
  );
};

export default page;
