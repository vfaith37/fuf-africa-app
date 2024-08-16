import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">FUF AFRICA</div>
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="/about" className="hover:text-blue-600">About Us</a>
          <a href="/what-we-do" className="hover:text-blue-600">What We Do</a>
          <a href="/media" className="hover:text-blue-600">Media</a>
          <a href="/contact" className="hover:text-blue-600">Contact</a>
        </nav>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md p-4">
          <a href="/" className="block py-2">Home</a>
          <a href="/about" className="block py-2">About Us</a>
          <a href="/what-we-do" className="block py-2">What We Do</a>
          <a href="/media" className="block py-2">Media</a>
          <a href="/contact" className="block py-2">Contact</a>
        </div>
      )}
    </header>
  );
}

export default Header;
