'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Menubar = ({ closeMenu }) => {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'गृहपृष्ठ' },
    { href: '/tourism', label: 'पर्यटकिय स्थलहरु' },
    { href: '/culture', label: 'सांस्कृितिक पहिचान' },
    { href: '/schools', label: 'विद्यालयहरु' },
    { href: '/municipality', label: 'पालिका विवरण' },
    { href: '/about', label: 'हाम्रो बारेमा' },
    { href: '/contact', label: 'सम्पर्क' },
  ];

  return (
    <>
      <nav className="bg-[#D9D9D9] border border-[#00000000] box-border min-w-fit text-xl h-full">
        <ul className="flex-row bg-[#D9D9D9]">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li
                key={link.href}
                className={
                  'active:font-bold active:box-border active:border-l-5 active:pl-2 active:border-[#FF3B00] ' +
                  (isActive ? 'bg-[#C4C4C4]' : '') +
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
