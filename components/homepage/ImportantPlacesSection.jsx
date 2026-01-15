import React from 'react';
import SectionCard from './SectionCard';

const places = [
  {
    title: 'गौखुरी मा. वी.',
    subtitle: 'मेन्छ्यायेम-०५ मोराहाङ्ग',
    imageUrl: '/images/image.png',
  },
  {
    title: 'Gaukhuri mavi',
    subtitle: 'Menchhayayem -5, Morahang',
    imageUrl: '/images/image.png',
  },
  {
    title: 'Gaukhuri mavi',
    subtitle: 'Menchhayayem -5, Morahang',
    imageUrl: '/images/image.png',
  },
  {
    title: 'Gaukhuri mavi',
    subtitle: 'Menchhayayem -5, Morahang',
    imageUrl: '/images/image.png',
  },
];

const ImportantPlacesSection = () => {
  return (
    <div className="flex flex-wrap justify-around px-2 gap-3 mb-5">
      {places.map((item, index) => (
        <SectionCard key={index} item={item} />
      ))}
    </div>
  );
};

export default ImportantPlacesSection;
