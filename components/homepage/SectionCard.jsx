import Image from 'next/image';
import React from 'react';

const SectionCard = ({ item }) => {
  return (
    <div className="bg-white hover:-translate-y-1 hover:scale-102 select-none p-2 rounded-2xl shadow-[0_4px_6px_-2px_rgba(0,0,0,0.3)]">
      <div className="p-1">
        <Image
          src={item.imageUrl}
          alt="cover Image"
          width={400}
          height={300}
          className="object-cover rounded-2xl "
        />
      </div>
      <div className="font-bold text-center">{item.title}</div>
      <div className="text-center text-gray-500">{item.subtitle}</div>
    </div>
  );
};

export default SectionCard;
