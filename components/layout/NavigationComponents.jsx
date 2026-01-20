'use client';
import React from 'react';
import Navbar from './Navbar';
import Menubar from './Menubar';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const NavigationComponents = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const paths = usePathname().replace(/\/$/, '').split('/');
  const route = paths[1];
  const menuNeeded = !(
    route == 'admin' ||
    route == 'login' ||
    paths.length > 2
  );

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

      <div className=" col-span-5 flex">
        {menuNeeded && (
          <aside
            onClick={closeMenu}
            className={
              (isMenuOpen ? '' : 'hidden ') +
              'w-screen md:w-fit xl:w-100 z-3 lg:block  fixed right-0 lg:static lg:pt-0 h-screen bg-[#00000060]'
            }
          >
            <Menubar closeMenu={closeMenu} />
          </aside>
        )}
        <main
          className={`w-full h-screen overflow-auto scrollbar-hidden ${!menuNeeded ? '' : 'lg:col-span-4'}`}
        >
          {children}
        </main>
      </div>
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
