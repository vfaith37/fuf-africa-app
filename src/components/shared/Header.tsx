import { getDownloadURL, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { storage } from "../../config/firebase";

const Header: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const storageRef = ref(
          storage,
          "430967010_816809673600509_6241911341346948533_n.png"
        );
        const url = await getDownloadURL(storageRef);
        setImageUrl(url);
      } catch (error) {
        console.error("Error fetching image: ", error);
      }
    };

    fetchImage();
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const linkClasses = (link: string) =>
    location.pathname === link ? "text-blue-600" : "hover:text-blue-600";

  return (
    <header className="bg-white shadow-md font-Roboto">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-xl font-bold">
          <img
            src={imageUrl}
            alt="fuf-africa"
            className="h-16 w-32 left-5 object-cover"
          />
        </div>
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
          {/* <Link to="/media" className={linkClasses("/media")}>
            Media
          </Link> */}
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
          <Link
            to="/"
            className={`block py-2 ${linkClasses("/")}`}
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`block py-2 ${linkClasses("/about")}`}
            onClick={handleLinkClick}
          >
            About Us
          </Link>
          <Link
            to="/what-we-do"
            className={`block py-2 ${linkClasses("/what-we-do")}`}
            onClick={handleLinkClick}
          >
            What We Do
          </Link>
          {/* <Link
            to="/media"
            className={`block py-2 ${linkClasses("/media")}`}
            onClick={handleLinkClick}
          >
            Media
          </Link> */}
          <Link
            to="/contact"
            className={`block py-2 ${linkClasses("/contact")}`}
            onClick={handleLinkClick}
          >
            Contact
          </Link>
          <Link
            to="/blog"
            className={`block py-2 $linkClasses("/blog")`}
            onClick={handleLinkClick}
          >
            Blog
          </Link>
          <Link
            to="/donate"
            className="block py-2 mt-2 bg-gray-900 text-white text-center rounded hover:bg-gray-800"
            onClick={handleLinkClick}
          >
            Donate
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
