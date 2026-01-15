import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
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
  title: 'गृहपृष्ठ - हाम्रो मेन्छ्यायेम',
  description: 'This is the homepage of Hamro Menchhayayem Website.',
  icons: {
    icon: '/images/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen`}
      >
        <div className={`flex flex-col`}>
          <header>
            <Navbar />
          </header>

          <div className="body flex-1 flex">
            <aside className="flex-1/5 hidden md:block">
              <Menubar />
            </aside>

            <main className="flex-4/5 ">{children}</main>
          </div>

          <footer>
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
