"use client"
import Link from 'next/link';
import React from 'react'
import HomeHeading from '../homepage/HomeHeading';
import { usePathname } from 'next/navigation';

const AdminBackButton = () => {
  const paths = usePathname().replace(/\/$/, '').split('/');
  const showCa = (paths.length != 2);
  return (
    (showCa) ? (
      <Link href={'/admin'}>
      <HomeHeading back title={'admin'} />
    </Link>)
    :null
  );
}

export default AdminBackButton
