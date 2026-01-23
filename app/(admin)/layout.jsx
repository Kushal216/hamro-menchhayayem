import AdminBackButton from '@/components/Admin/AdminBackButton';
import HomeHeading from '@/components/homepage/HomeHeading';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

import { Noto_Sans_Devanagari } from 'next/font/google';
import Link from 'next/link';

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ['devanagari', 'latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-devanagari',
});

export const metadata = {
  title: 'Admin - हाम्रो मेन्छ्यायेम',
  description: 'This is the Admin of Hamro Menchhayayem Website.',
  icons: {
    icon: '/images/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <div className="md:w-[50%] mx-auto">
      <AdminBackButton />
      {children}
    </div>
  );
}
export const dynamic = 'force-dynamic';