import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/images/logo.png';
import MobileMenuButton from './MobileMenuButton';

function Navbar() {
  const nepaliDate = 'पौष ३०, २०८२';
  const weekday = 'बुधबार';

  return (
    <div className="bg-[#018378] p-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MobileMenuButton/>
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

        <div className="flex gap-3 justify-between">
          <div className="text-white text-sm md:text-xl text-right">
            <div className="font-bold">{nepaliDate}</div>
            <div>{weekday}</div>
          </div>

          <div
            className="bg-white text-sm shadow my-auto rounded-md
        font-bold w-fit h-fit p-1"
          >
            en
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
