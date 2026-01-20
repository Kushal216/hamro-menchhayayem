import './globals.css';
import RootLayoutBody from '@/components/layout/RootLayoutBody';
import Footer from '@/components/layout/Footer';
import { Noto_Sans_Devanagari } from 'next/font/google';
import ToasterContainer from '@/components/ToasterContainer';

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
        <RootLayoutBody>{children}</RootLayoutBody>
        <ToasterContainer />
        <footer className="w-full">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
