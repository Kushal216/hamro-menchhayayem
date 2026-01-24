'use client';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/images/logo.webp';
import MobileMenuButton from './MobileMenuButton';
import getMiti from '@/utils/nepaliDate.js';

function Navbar({ isMenuOpen, showMenu, closeMenu, toggleMenu }) {
  const nepaliDate = getMiti().getString();
  const weekday = getMiti().baar;

  return (
    <div className="">
      <div className=" bg-[#018378] p-5 flex items-center justify-between h-17">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="relative flex justify-between items-center gap-2"
          >
            <div className="relative w-fit h-fit aspect-square">
              <Image
                src={logo}
                alt="Menchhayayem Logo"
                width={44}
                className="rounded-full object-contain"
                sizes="64px"
                priority
              />
            </div>
          </Link>

          <Link
            href="/"
            className="relative flex justify-between items-center gap-2"
          >
            <div className="text-xl md:text-3xl font-bold text-white">
              हाम्रो मेन्छ्यायेम
            </div>
          </Link>
        </div>

        <div className="flex gap-5 items-center justify-between">
          <div className="text-white text-sm md:text-xl text-right">
            <div className="font-bold">{nepaliDate}</div>
            <div>{weekday}</div>
          </div>

          <div className="bg-white text-sm shadow my-auto rounded-md font-bold w-fit h-fit p-1 hidden lg:block">
            en
          </div>
          <MobileMenuButton
            isOpen={isMenuOpen}
            showMenu={showMenu}
            closeMenu={closeMenu}
            toggleMenu={toggleMenu}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
