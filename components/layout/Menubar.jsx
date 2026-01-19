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
    { href: '/municipality', label: 'पालिका विवरण' },
    { href: '/about', label: 'हाम्रो बारेमा' },
    { href: '/contact', label: 'सम्पर्क' },
  ];

  return (
    <>
      <nav className="border border-[#00000000] box-border min-w-fit text-xl shadow-xl bg-white md:bg-[#cacaca] rounded-b-xl w-full fixed md:static md:h-screen right-0">
        <ul className="flex-row">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li
                key={link.href}
                className={
                  'hover:bg-[#dadada] active:font-bold active:box-border active:border-l-5 active:pl-2 active:border-[#FF3B00] ' +
                  (isActive ? 'bg-[#eaeaea] md:bg-[#b3b3b3] ' : '') +
                  ' flex-1 px-3 my-2 py-1'
                }
                onClick={closeMenu}
              >
                <Link
                  href={link.href}
                  className={
                    isActive
                      ? 'font-bold box-border border-l-5 pl-2 border-[#FF3B00]'
                      : 'pl-3'
                  }
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Menubar;
