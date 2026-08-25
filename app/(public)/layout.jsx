export const metadata = {
  title: 'थलहरू - हाम्रो मेन्छ्यायेम',
  description: 'हाम्रो मेन्छ्यायेमको कला, साहित्य, इतिहास, पर्यटकिय स्थलहरु लगायत सम्पुर्ण जानकारी एकै ठाउँमा।',
};

export default function RootLayout({ children }) {
  return (<div>
    { children }
    </div>
  );
}
