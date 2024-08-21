import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface SignOutProps {
  signUserOut: () => void;
}
const AdminHeader: React.FC<SignOutProps> = ({signUserOut}) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = (link: string) =>
    location.pathname === link ? "text-blue-600" : "hover:text-blue-600";

  return (
    <header className="bg-white shadow-md font-Roboto">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">FUF AFRICA</div>
        <nav className="hidden md:flex space-x-6 flex-grow justify-center">
          <Link to="/admin/createuser" className={linkClasses("createuser")}>
            Create User
          </Link>
          <Link to="/admin" className={linkClasses("createpost")}>
            Create Post
          </Link>
          <Link to="/admin/manageusers" className={linkClasses("#")}>
            Manage Users
          </Link>
          <Link to="/admin/media" className={linkClasses("/media")}>
            Media
          </Link>
          <Link to="#" className={linkClasses("#")}>
            Contact
          </Link>
          <Link to="#" className={linkClasses("#")}>
            Blog
          </Link>
        </nav>
        <button
        onClick={signUserOut}
          // to="/admin/signout"
          className="hidden md:inline-block bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Sign out
        </button>
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
          <Link to="/admin/createuser" className={`block py-2 ${linkClasses("createuser")}`}>
            Create User
          </Link>
          <Link to="/admin/createpost" className={`block py-2 ${linkClasses("createpost")}`}>
            Create Post
          </Link>
          <Link
            to="#"
            className={`block py-2 ${linkClasses("#")}`}
          >
            What We Do
          </Link>
          <Link to="/admin/media" className={`block py-2 ${linkClasses("/media")}`}>
            Media
          </Link>
          <Link
            to="#"
            className={`block py-2 ${linkClasses("#")}`}
          >
            Contact
          </Link>
          <Link to="#" className={`block py-2 $linkClasses("#")`}>
            Blog
          </Link>
          <Link
            to="/admin/signout"
            className="block py-2 mt-2 bg-gray-900 text-white text-center rounded hover:bg-gray-800"
          >
            Sign out
          </Link>
        </div>
      )}
    </header>
  );
};

export default AdminHeader;
