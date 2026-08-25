import "./globals.css";
import RootLayoutBody from "@/components/layout/RootLayoutBody";
import Footer from "@/components/layout/Footer";
import { Noto_Sans_Devanagari } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-devanagari",
});

export const metadata = {
  title: "गृहपृष्ठ - हाम्रो मेन्छ्यायेम",
  description: "हाम्रो मेन्छ्यायेम — कला, साहित्य, इतिहास, पर्यटकिय स्थलहरु र सम्पुर्ण जानकारी एकै ठाउँमा।",
  icons: {
    icon: "/images/logo.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ne" className="scrollbar-hidden">
      <body
        className={`${notoDevanagari.variable} font-devanagari antialiased flex flex-col min-h-screen`}
      >
        <RootLayoutBody>{children}</RootLayoutBody>
        <Analytics />
        <footer className="w-full mt-auto">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
