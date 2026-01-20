'use client';
import React from 'react';
import NavigationComponents from './NavigationComponents';
import { usePathname } from 'next/navigation';

const RootLayoutBody = ({ children }) => {
  const paths = usePathname().replace(/\/$/, '').split('/');
  const route = paths[1];
  const menuNeeded = !(
    route == 'admin' ||
    route == 'login' ||
    paths.length > 2
  );

  return (
    <div className={`grid grid-cols-5 min-h-screen`}>
      <NavigationComponents >{children}</NavigationComponents>
    </div>
  );
};

export default RootLayoutBody;
