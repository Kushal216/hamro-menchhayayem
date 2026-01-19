'use client';
import React from 'react';
import Navbar from './Navbar';
import Menubar from './Menubar';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const NavigationComponents = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const paths = usePathname().replace(/\/$/, '').split('/');
  const route = paths[1];
  const menuNeeded = !(route == 'admin' || route == 'login' || paths.length > 2);

  console.log(`paths : ${paths}`);
  console.log(`route : ${route}`);
  console.log(`menu needed : ${menuNeeded}`);

  return (
    <>
      <header className="col-span-5 sticky top-0 z-100">
        <Navbar
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          showMenu={showMenu}
          closeMenu={closeMenu}
        />
      </header>
      {menuNeeded && (
        <aside
          onClick={closeMenu}
          className={
            (isMenuOpen ? '' : 'hidden ') +
            'col-span-5  md:col-span-1 z-10 md:block  fixed right-0 md:static pt-17 md:pt-0 h-screen md:w-full w-screen bg-[#00000060]'
          }
        >
          <Menubar closeMenu={closeMenu} />
        </aside>
      )}
    </>
  );

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function showMenu() {
    console.log('show menu clicked');
    setIsMenuOpen(true);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }
};

export default NavigationComponents;
