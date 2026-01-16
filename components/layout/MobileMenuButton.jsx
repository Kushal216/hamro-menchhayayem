"use client"
import React, { useState } from 'react'
import { TiThMenu } from 'react-icons/ti'
import { CgClose } from 'react-icons/cg';

const MobileMenuButton = () => {
  const [menuToggle, toggleMenu] = useState(false);

  return (
    <div>
      {!menuToggle ? (
        <TiThMenu
          color="white"
          size={24}
          className="md:hidden"
          onClick={handleMenuToggle}
        />
      ) : (
        <CgClose
          color="white"
          size={24}
          className="md:hidden"
          onClick={handleMenuToggle}
         />
      )}
    </div>
  );

  function handleMenuToggle(){toggleMenu(!menuToggle)}
}

export default MobileMenuButton
