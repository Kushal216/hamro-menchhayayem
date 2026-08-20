'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';

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

  const [activeLink, setActiveLink] = useState(pathname);

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  return (
    <nav className="text-xl h-full">
      <ul className="flex flex-col p-4 gap-1">
        {links.map((link) => {
          const isActive = activeLink === link.href;

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={
                  'whitespace-nowrap inline-block w-full flex-1 px-3 py-2.5 rounded-lg transition-colors ' +
                  (isActive
                    ? 'bg-[#eaeaea] lg:bg-[#b3b3b3] font-bold border-l-4 pl-3 border-[#FF3B00]'
                    : 'hover:bg-gray-100')
                }
                onClick={() => {
                  setActiveLink(link.href);
                  if (closeMenu) closeMenu();
                }}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menubar;
