import HeroImage from '@/components/homepage/HeroImage';
import HomeHeading from '@/components/homepage/HomeHeading';
import ImportantPlacesSection from '@/components/homepage/ImportantPlacesSection';
import ToastTrigger from '@/components/ToastTrigger';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-full pt-1">
      <HeroImage />
      <HomeHeading title={'महत्वपूर्ण स्थानहरु'} color={'red'} />
      <ImportantPlacesSection />
      <ToastTrigger
        message={'Welcome to Hamro Menchhayayem'}
        type={'success'}
      />
    </div>
  );
}
