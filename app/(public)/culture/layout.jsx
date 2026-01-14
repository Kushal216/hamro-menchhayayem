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
  title: 'सांस्कृिती - हाम्रो मेन्छ्यायेम',
  description:
    'This page shows the cultural identities of the people living in menchhayayem rm',
};

export default function TourismLayout({ children }) {
  return <>{children}</>;
}
