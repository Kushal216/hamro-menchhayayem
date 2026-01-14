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
  title: 'विद्यालयहरु - हाम्रो मेन्छ्यायेम',
  description: 'This site shows all the schools to visit in menchhayayem rm.',
};

export default function TourismLayout({ children }) {
  return <>{children}</>;
}
