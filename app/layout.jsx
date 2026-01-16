import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
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
  title: 'गृहपृष्ठ - हाम्रो मेन्छ्यायेम',
  description: 'This is the homepage of Hamro Menchhayayem Website.',
  icons: {
    icon: '/images/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scrollbar-hidden">
      <body
        className={`${notoDevanagari.variable} font-devanagari antialiased`}
      >
        <div className={`grid grid-cols-5 min-h-screen`}>
          <NavigationComponents />

          <main className="col-span-5 md:col-span-4 h-screen overflow-auto scrollbar-hidden">
            {children}
          </main>
        </div>
        <footer className="w-full">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
