"use client";

const Footer = () => {
  return (
    <footer className="bg-[#010BB2] text-gray-300 py-5 text-center">
      <div>
        <h2 className="text-xl font-bold text-white ">हाम्रो मेन्छ्यायेम</h2>
        <p className=" mt-2">
          हाम्रो मेन्छ्यायेमको कला, साहित्य, इतिहास, पर्यटकिय स्थलहरु लगायत
          सम्पुर्ण जानकारी एकै ठाउँमा।
        </p>
      </div>

      <div className=" border-t border-gray-700 pt-2 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Hamro Menchhayayem. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
