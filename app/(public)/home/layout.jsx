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
  title: 'गृहपृष्ठ - हाम्रो मेन्छ्यायेम',
  description: 'This is the homepage of Hamro Menchhayayem Website.',
};

export default function TourismLayout({ children }) {
  return <>{children}</>;
}
