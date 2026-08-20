import AdminBackButton from '@/components/Admin/AdminBackButton';
import ToasterContainer from '@/components/ToasterContainer';
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
    <div className="md:w-[50%] mx-auto">
      <AdminBackButton />
      {children}
      <ToasterContainer />
    </div>
  );
}
export const dynamic = 'force-dynamic';