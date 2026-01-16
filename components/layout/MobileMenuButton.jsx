'use client';
import { TiThMenu } from 'react-icons/ti';
import { CgClose } from 'react-icons/cg';

const MobileMenuButton = ({ isOpen, showMenu, closeMenu, toggleMenu }) => {
  return (
    <div onClick={toggleMenu} className='md:hidden'>
      {!isOpen ? (
        <TiThMenu color="white" size={24} />
      ) : (
        <CgClose color="white" size={24} />
      )}
    </div>
  );
};

export default MobileMenuButton;
