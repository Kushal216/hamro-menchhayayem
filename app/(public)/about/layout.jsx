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
  title: 'हाम्रो बारेमा - हाम्रो मेन्छ्यायेम',
  description: 'This page shows details about the website and the creators.',
};

export default function TourismLayout({ children }) {
  return <>{children}</>;
}
