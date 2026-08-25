'use client';
import React, { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Menubar from './Menubar';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const NavigationComponents = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const paths = usePathname().replace(/\/$/, '').split('/');
  const route = paths[1];
  const menuNeeded = !(route == 'admin' || route == 'login' || route == 'docs');
  const menuRef = useRef(null);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen || !menuRef.current) return;
    const focusable = menuRef.current.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
    if (focusable.length) focusable[0].focus();
  }, [isMenuOpen]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:rounded focus:shadow-lg focus:text-black"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-100">
        <Navbar
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          showMenu={showMenu}
          closeMenu={closeMenu}
        />
      </header>

      <div className="flex">
        {menuNeeded && (
          <>
            <div
              className={
                `fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 lg:hidden ${
                  isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`
              }
              onClick={closeMenu}
              aria-hidden="true"
            />
            <aside
              ref={menuRef}
              className={
                `fixed top-17 right-0 z-50 h-[calc(100vh-4.25rem)] w-72 bg-white shadow-xl transition-transform duration-300 ease-in-out lg:hidden ${
                  isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`
              }
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              <Menubar closeMenu={closeMenu} />
            </aside>
          </>
        )}

        {menuNeeded && (
          <aside className="hidden lg:block lg:w-fit xl:w-50 bg-[#cacaca] min-h-screen pt-0 static">
            <Menubar />
          </aside>
        )}

        <main
          id="main-content"
          className={`w-full min-h-screen overflow-auto scrollbar-hidden ${!menuNeeded ? '' : 'lg:flex-1'}`}
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
