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
  const menuNeeded = !(route == 'admin' || route == 'login' || route == 'docs');

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
              'w-screen fixed lg:w-fit xl:w-100 z-3 lg:block   right-0 lg:static lg:pt-0 min-h-screen bg-[#00000060]'
            }
          >
            <Menubar closeMenu={closeMenu} />
          </aside>
        )}
        <main
          className={`w-full min-h-screen overflow-auto scrollbar-hidden ${!menuNeeded ? '' : 'lg:col-span-4'}`}
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
    setIsMenuOpen(true);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }
};

export default NavigationComponents;
