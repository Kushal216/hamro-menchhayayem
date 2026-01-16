'use client'
import React from 'react'
import Navbar from './Navbar';
import Menubar from './Menubar';
import { useState } from 'react';

const NavigationComponents = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="col-span-5 sticky top-0 z-100">
        <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} showMenu={showMenu} closeMenu={closeMenu} />
      </header>
      {isMenuOpen && <aside className={"col-span-5  md:col-span-1 z-10 md:block  fixed pt-17 h-screen"}>
        <Menubar/>
      </aside>}
    </>
  );

  function toggleMenu(){
    setIsMenuOpen(!isMenuOpen)
  }

  function showMenu(){
    console.log('show menu clicked')
    setIsMenuOpen(true);
  }

  function closeMenu(){
    setIsMenuOpen(false)
  }
}

export default NavigationComponents
