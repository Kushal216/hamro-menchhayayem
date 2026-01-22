import React from 'react';
import { IoArrowBackSharp } from 'react-icons/io5';

const HomeHeading = ({ title, fixed, back }) => {
  return (
    <div
      className={
        `font-bold text-black  box-border   m-2 my-4 flex items-center` +
        (fixed === true
          ? ' bg-[#00000090] backdrop-blur-[1px] rounded-r mt-2 p-1 pr-2 ml-0 text-md md:rounded-r-lg md:text-xl'
          : ' text-lg md:text-2xl') +
        (back ? ' ' : ' border-l-8 pl-2 border-[#FF3B00]')
      }
    >
      {back && <IoArrowBackSharp className="text-red-500 text-2xl mr-3" />}{' '}
      {title}
    </div>
  );
};

export default HomeHeading;
