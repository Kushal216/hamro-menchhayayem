'use client';
import { CgClose } from 'react-icons/cg';
import { HiMenu } from 'react-icons/hi';

const MobileMenuButton = ({ isOpen, toggleMenu }) => {
  return (
    <button
      onClick={toggleMenu}
      className="lg:hidden p-3 -mr-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
      aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
      aria-expanded={isOpen}
    >
      {!isOpen ? (
        <HiMenu color="white" size={24} />
      ) : (
        <CgClose color="white" size={24} />
      )}
    </button>
  );
};

export default MobileMenuButton;
