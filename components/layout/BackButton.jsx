'use client';
import React from 'react';
import HomeHeading from '@/components/homepage/HomeHeading';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Routes = {
schools: "विद्यलयाहरु",
cultures:'संस्कृतीहरु',
places:'ठाऊहरु'
}

const BackButton = () => {
  const path = usePathname();
  let paths = path.split('/');
  console.log(paths)
  return (
    <Link href={'/'+paths[1]}>
      <HomeHeading title={Routes[paths[1]]} color={'black'} back />
    </Link>
  );
};

export default BackButton;
