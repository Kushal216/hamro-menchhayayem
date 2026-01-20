import { Geist, Geist_Mono } from 'next/font/google';
import Footer from '@/components/layout/Footer';
import NavigationComponents from '@/components/layout/NavigationComponents';
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

import { Noto_Sans_Devanagari } from 'next/font/google';

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
     <div>
      {children}
     </div>
  );
}
