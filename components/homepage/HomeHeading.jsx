import React from 'react'

const HomeHeading = ({title, color}) => {
  return (
    <div className="font-bold text-2xl box-border border-l-8 pl-2 border-[#FF3B00] m-2 my-4">
      {title}
    </div>
  );
}

export default HomeHeading
