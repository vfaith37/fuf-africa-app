import React, { useState } from "react";

const Header: React.FC = () => {
  const [activeLink, setActiveLink] = useState("/");
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (link: string) => {
    console.log("agh", link);
    setActiveLink(link);
  };


  const linkClasses = (link: string) =>
    activeLink === link ? "text-blue-600" : "hover:text-blue-600";

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">FUF AFRICA</div>
        <nav className="hidden md:flex space-x-6 flex-grow justify-center">
          <a
            href="/"
            className={linkClasses("/")}
            onClick={() => handleLinkClick("/")}
          >
            Home
          </a>
          <a
            href="/about"
            className={linkClasses("/about")}
            onClick={() => handleLinkClick("/about")}
          >
            About Us
          </a>
          <a
            href="/what-we-do"
            className={linkClasses("/what-we-do")}
            onClick={() => handleLinkClick("/what-we-do")}
          >
            What We Do
          </a>
          <a
            href="/media"
            className={linkClasses("/media")}
            onClick={() => handleLinkClick("/media")}
          >
            Media
          </a>
          <a
            href="/contact"
            className={linkClasses("/contact")}
            onClick={() => handleLinkClick("/contact")}
          >
            Contact
          </a>
          <a
            href="/blog"
            className={linkClasses("/blog")}
            onClick={() => handleLinkClick("/blog")}
          >
            Blog
          </a>
        </nav>
        <a
          href="/donate"
          className="hidden md:inline-block bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Donate
        </a>
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
          <a
            href="/"
            className={`block py-2 ${linkClasses("/")}`}
            onClick={() => handleLinkClick("/")}
          >
            Home
          </a>
          <a
            href="/about"
            className={`block py-2 ${linkClasses("/about")}`}
            onClick={() => handleLinkClick("/about")}
          >
            About Us
          </a>
          <a
            href="/what-we-do"
            className={`block py-2 ${linkClasses("/what-we-do")}`}
            onClick={() => handleLinkClick("/what-we-do")}
          >
            What We Do
          </a>
          <a
            href="/media"
            className={`block py-2 ${linkClasses("/media")}`}
            onClick={() => handleLinkClick("/media")}
          >
            Media
          </a>
          <a
            href="/contact"
            className={`block py-2 ${linkClasses("/contact")}`}
            onClick={() => handleLinkClick("/contact")}
          >
            Contact
          </a>
          <a
            href="/donate"
            className="block py-2 mt-2 bg-gray-900 text-white text-center rounded hover:bg-gray-800"
          >
            Donate
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
