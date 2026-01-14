"use client";
import Image from "next/image";
import logo from "@/public/images/logo.png";

function Navbar() {
  const nepaliDate = "पौष ३०, २०८२";
  const weekday = "बुधबार";

  return (
    <div className="bg-[#018378] p-3">
      <div className="flex items-center space-x-4">
        <Image
          src={logo}
          alt="Menchhayayem Logo"
          width={60}
          height={60}
          className="rounded-full"
          priority
        />

        <div className="text-3xl font-bold text-white">हाम्रो मेन्छ्यायेम</div>

        <div className="flex-1"></div>

        <div className="text-white text-xl text-right">
          <div className="font-bold">{nepaliDate}</div>
          <div>{weekday}</div>
        </div>

        <div className="bg-white shadow rounded-full font-bold w-12 h-8 flex items-center justify-center ml-4">
          EN
        </div>
      </div>
    </div>
  );
}

export default Navbar;
