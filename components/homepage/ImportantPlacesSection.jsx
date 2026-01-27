import React from "react";
import SectionCard from "./SectionCard";

const places = [
  {
    title: 'हाम्रा संस्कृती',
    subtitle: 'हाम्रो मेन्छ्यायेमका रमणीय स्थानहरु भ्रमण गर्नुहोस ।',
    imageUrl: '/section-icons/culture-bg.webp',
    route: '/cultures',
    iconUrl: '/section-icons/cultures.png',
  },
  {
    title: 'हाम्रा ठाउँहरु',
    subtitle: 'हाम्रो मेन्छ्यायेमका रमणीय स्थानहरु भ्रमण गर्नुहोस ।',
    imageUrl: '/images/hero-images/hero1.webp',
    iconUrl: '/section-icons/places.png',
    route: '/places',
  },
  {
    title: 'लेखहरु',
    subtitle: 'हाम्रो मेन्छ्यायेमका लेखकहरुले लेख्नु भएका लेखहरु पढ्नुहोस ।',
    imageUrl: '/section-icons/literature-bg.webp',
    route: '/literature',
    iconUrl: '/section-icons/schools.png',
  },
];

const ImportantPlacesSection = () => {
  return (
    <div className="grid grid-cols-3 justify-between px-2 gap-3 mb-5 min-w-full w-fit">
      {places.map((item, index) => (
        <SectionCard key={index} item={item} />
      ))}
    </div>
  );
};

export default ImportantPlacesSection;
