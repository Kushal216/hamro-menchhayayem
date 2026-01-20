import React from 'react';
import SectionCard from './SectionCard';

const places = [
  {
    title: 'हाम्रा संस्कृती',
    subtitle: 'हाम्रो मेन्छ्यायेमका रमणीय स्थानहरु भ्रमण गर्नुहोस',
    imageUrl: '/images/image.png',
    route: '/cultures',
    iconUrl: '/section-icons/cultures.png',
  },
  {
    title: 'हाम्रा ठाउँहरु',
    subtitle: 'हाम्रो मेन्छ्यायेमका रमणीय स्थानहरु भ्रमण गर्नुहोस',
    imageUrl: '/images/image.png',
    iconUrl: '/section-icons/places.png',
    route: '/places',
  },
  {
    title: 'हाम्रा विद्यालयहरु',
    subtitle: 'हाम्रो मेन्छ्यायेमका रमणीय स्थानहरु भ्रमण गर्नुहोस',
    imageUrl: '/images/image.png',
    route: '/schools',
    iconUrl: '/section-icons/schools.png',
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
