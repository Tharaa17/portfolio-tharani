import React from 'react';
import { FaLinkedin } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';

const NavBar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      {/* Left Section */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <span>Portfolio</span> {/* Changed <text> to <span> */}
      </div>
      
      {/* Right Section with Links */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/tharani-de-silva-085059287/" // Replace with your LinkedIn URL
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Tharaa17" // Replace with your GitHub URL
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-600"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
