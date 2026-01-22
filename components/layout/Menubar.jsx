'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Menubar = ({ closeMenu }) => {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'गृहपृष्ठ' },
    { href: '/places', label: 'पर्यटकिय स्थलहरु' },
    { href: '/cultures', label: 'सांस्कृितिक पहिचान' },
    { href: '/schools', label: 'विद्यालयहरु' },
    { href: '/literature', label: 'साहित्य' },
    { href: '/municipality', label: 'पालिका विवरण' },
    { href: '/about', label: 'हाम्रो बारेमा' },
    { href: '/contact', label: 'सम्पर्क' },
  ];

  return (
    <>
      <nav className="border border-[#00000000] box-border min-w-fit text-xl shadow-xl bg-white lg:bg-[#cacaca] rounded-b-xl lg:w-fit xl:w-full fixed lg:static lg:h-screen right-0">
        <ul className="flex flex-col">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                href={link.href}
                key={link.href}
                className={
                  'whitespace-nowrap inline-block w-full hover:bg-[#dadada] active:font-bold active:box-border active:border-l-5 active:pl-2 active:border-[#FF3B00] ' +
                  (isActive ? 'bg-[#eaeaea] md:bg-[#b3b3b3] ' : '') +
                  ' flex-1 px-3 my-2 py-1'
                }
                onClick={closeMenu}
              >
                <li
                  className={
                    isActive
                      ? 'font-bold box-border border-l-5 pl-2 border-[#FF3B00]'
                      : 'inline-block pl-3'
                  }
                >
                  {link.label}
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Menubar;
