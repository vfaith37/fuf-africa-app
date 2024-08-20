import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = (link: string) =>
    location.pathname === link ? "text-blue-600" : "hover:text-blue-600";

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">FUF AFRICA</div>
        <nav className="hidden md:flex space-x-6 flex-grow justify-center">
          <Link to="/" className={linkClasses("/")}>
            Home
          </Link>
          <Link to="/about" className={linkClasses("/about")}>
            About Us
          </Link>
          <Link to="/what-we-do" className={linkClasses("/what-we-do")}>
            What We Do
          </Link>
          <Link to="/media" className={linkClasses("/media")}>
            Media
          </Link>
          <Link to="/contact" className={linkClasses("/contact")}>
            Contact
          </Link>
          <Link to="/blog" className={linkClasses("/blog")}>
            Blog
          </Link>
        </nav>
        <Link
          to="/donate"
          className="hidden md:inline-block bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Donate
        </Link>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md p-4">
          <Link to="/" className={`block py-2 ${linkClasses("/")}`}>
            Home
          </Link>
          <Link to="/about" className={`block py-2 ${linkClasses("/about")}`}>
            About Us
          </Link>
          <Link
            to="/what-we-do"
            className={`block py-2 ${linkClasses("/what-we-do")}`}
          >
            What We Do
          </Link>
          <Link to="/media" className={`block py-2 ${linkClasses("/media")}`}>
            Media
          </Link>
          <Link
            to="/contact"
            className={`block py-2 ${linkClasses("/contact")}`}
          >
            Contact
          </Link>
          <Link
            to="/donate"
            className="block py-2 mt-2 bg-gray-900 text-white text-center rounded hover:bg-gray-800"
          >
            Donate
          </Link>
          <Link to="/blog" className={linkClasses("/blog")}>
            Blog
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
