'use client';
import React from 'react';
import HomeHeading from '@/components/homepage/HomeHeading';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Routes = {
  schools: 'विद्यलयाहरु',
  cultures: 'संस्कृतीहरु',
  places: 'ठाऊहरु',
};

const BackButton = ({ gallery }) => {
  const paths = usePathname().split('/');
  return (
    <Link href={`/${paths[1]}${gallery ? `/${paths[2]}` : ''}`}>
      <HomeHeading
        title={gallery ? 'फर्कनुहोस' : Routes[paths[1]]}
        color={'black'}
        back
      />
    </Link>
  );
};

export default BackButton;
