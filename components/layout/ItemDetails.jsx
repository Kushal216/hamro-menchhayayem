import HomeHeading from '@/components/homepage/HomeHeading';
import Image from 'next/image';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { BsPlayBtnFill } from 'react-icons/bs';
import BackButton from './BackButton';

export default function ItemDetails(content) {
  const content1 = "पर्खनुहोस ..."

  return (
    <>
      <div className="w-full px-2 relative mt-2 select-none">
        <BackButton />
        <CoverImage />

        <div className="mt-2">
          <div className="font-bold text-3xl text-black border-b-4 border-red-500 w-fill inline-block px-2 pr-4">
            परिचय
          </div>
          <MarkdownViewer content={content1} />
        </div>
      </div>
    </>
  );
}

function CoverImage() {
  return (
    <>
      <div className="aspect-video w-full md:w-[75%] md:float-right  relative mr-2">
        <div className="absolute z-2 top-0 left-0 ">
          <HomeHeading
            title={'श्री गौखुरी उच्च माध्यामिक विद्यालाय'}
            color={'white'}
            fixed
          />
        </div>

        <BsPlayBtnFill className="absolute z-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xl opacity-90" />

        <Image
          src={'/images/image.png'}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          alt="image of something"
          className="object-cover rounded-lg"
        />
        <div className="absolute bottom-0 z-2 w-full text-center bg-[#00000040] pt-0.5 md:pt-1 text-white text-sm rounded-b-lg hover:underline hover:backdrop-blur-[1px]">
          आरु तस्बिर हेर्नुहोस &gt;&gt;
        </div>
      </div>
    </>
  );
}

function MarkdownViewer({ content }) {
  return (
    <div className="prose prose-neutral max-w-none px-2">
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <h1 className="text-3xl font-bold mt-4 mb-2">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl font-semibold mt-4 mb-2">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-semibold mt-3 mb-1">{children}</h3>
          ),
          ul: ({ children }) => (
            <ul className="list-disc ml-6 space-y-1">{children}</ul>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
