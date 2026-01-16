import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Footer from '@/components/layout/Footer';
import NavigationComponents from '@/components/layout/NavigationComponents';
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
    <html lang="en" className="scrollbar-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
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
