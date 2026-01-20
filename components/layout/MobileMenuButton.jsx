'use client';
import { CgClose } from 'react-icons/cg';
import { HiDotsVertical } from 'react-icons/hi';

const MobileMenuButton = ({ isOpen, toggleMenu }) => {
  return (
    <div onClick={toggleMenu} className="lg:hidden">
      {!isOpen ? (
        <HiDotsVertical color="white" size={24} />
      ) : (
        <CgClose color="white" size={24} />
      )}
    </div>
  );
};

export default MobileMenuButton;
