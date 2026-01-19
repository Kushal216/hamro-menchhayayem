import React from 'react';

const HomeHeading = ({ title, color, fixed }) => {
  return (
    <div
      className={
        `font-bold text-${color}  box-border border-l-8 pl-2 border-[#FF3B00] m-2 my-4` +
        (fixed === true
          ? ' bg-[#00000090] backdrop-blur-[1px] rounded-r mt-2 p-1 pr-2 ml-0 text-md md:rounded-r-lg md:text-xl'
          : ' text-lg md:text-2xl')
      }
    >
      {title}
    </div>
  );
};

export default HomeHeading;
