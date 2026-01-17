'use client';
import React from 'react';
import Navbar from './Navbar';
import Menubar from './Menubar';
import { useState } from 'react';

const NavigationComponents = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      {
        <aside onClick={closeMenu}
          className={
            (isMenuOpen ? '' : 'hidden ') +
            'col-span-5  md:col-span-1 z-10 md:block  fixed right-0 md:static pt-17 md:pt-0 h-screen md:w-full w-screen bg-[#00000060]'
          }
        >
          <Menubar closeMenu={closeMenu} />
        </aside>
      }
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
