"use client";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 text-sm">
      <div className="max-w-6xl mx-auto px-4 py-8 text-center">
        <h2 className="text-lg font-bold text-white mb-2">
          हाम्रो मेन्छ्यायेम
        </h2>
        <p className="text-gray-300">
          हाम्रो मेन्छ्यायेमको कला, साहित्य, इतिहास, पर्यटकिय स्थलहरु लगायत
          सम्पुर्ण जानकारी एकै ठाउँमा।
        </p>
      </div>

      <div className="border-t border-gray-700 py-4 text-gray-400 text-xs text-center">
        &copy; {new Date().getFullYear()} Hamro Menchhayayem. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
