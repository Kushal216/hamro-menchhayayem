import HeroImage from '@/components/homepage/HeroImage';
import HomeHeading from '@/components/homepage/HomeHeading';
import ImportantPlacesSection from '@/components/homepage/ImportantPlacesSection';
import ToastTrigger from '@/components/ToastTrigger';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-full pt-4">
      <HeroImage />
      <HomeHeading title={'हाम्रो विशेषता'} color={'red'} />
      <ImportantPlacesSection />
      <ToastTrigger
        message={'Welcome to Hamro Menchhayayem'}
        type={'success'}
        sessionKey="welcome-toast"
      />
    </div>
  );
}

export async function generateMetadata({ params }) {
  return {
    title: 'हाम्रो मेन्छयायेम',
    openGraph: {
      title: 'हाम्रो मेन्छयायेम',
      type: 'article',
      url: process.env.NEXT_PUBLIC_SITE_URL || 'https://hamromenchhayayem.vercel.app',
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://hamromenchhayayem.vercel.app'}/images/og-image.webp`,
          width: 1200,
          height: 630,
          alt: 'हाम्रो मेन्छयायेम',
        },
      ],
    },
  };
}
