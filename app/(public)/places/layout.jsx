import { Geist, Geist_Mono } from 'next/font/google';
import Menubar from '@/components/layout/Menubar';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'पर्यटन - हाम्रो मेन्छ्यायेम',
  description: 'This site shows all the places to visit in menchhayayem rm.',
};

export default function TourismLayout({ children }) {
  return <>{children}</>;
}
