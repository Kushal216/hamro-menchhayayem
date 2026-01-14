'use client';
import Link from 'next/link';
import React from 'react';

const Menubar = () => {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <Link href="/">गृहपृष्ठ</Link>
          </li>
          <li>
            <Link href="/tourism">पर्यटकिय स्थलहरु</Link>
          </li>
          <li>
            <Link href="/culture">सांस्कृितिक पहिचान</Link>
          </li>
          <li>
            <Link href="/schools">विद्यालयहरु</Link>
          </li>
          <li>
            <Link href="/municipality">पालिका विवरण</Link>
          </li>
          <li>
            <Link href="/about">हाम्रो बारेमा</Link>
          </li>
          <li>
            <Link href="/contact">सम्पर्क</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Menubar;
