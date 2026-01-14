import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'सम्पर्क - हाम्रो मेन्छ्यायेम',
  description:
    'This page shows important contact information related to menchhayayem rm.',
};

export default function TourismLayout({ children }) {
  return <>{children}</>;
}
