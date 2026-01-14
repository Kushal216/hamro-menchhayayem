import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Menubar from '@/components/layout/Menubar';
import Footer from '@/components/layout/Footer';

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen`}
      >
        {children}

        {/* <footer>
          <Footer />
        </footer> */}
      </body>
    </html>
  );
}
