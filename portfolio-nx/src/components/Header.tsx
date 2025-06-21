import * as React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-700 text-white py-4 sticky top-0 z-50 shadow-md">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-gray-200 transition">
          Mukul's Portfolio
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-200 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/#about" smooth className="hover:text-gray-200 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/#experience" smooth className="hover:text-gray-200 transition">
              Experience
            </Link>
          </li>
          <li>
            <Link to="/#projects" smooth className="hover:text-gray-200 transition">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/#my-work" className="hover:text-gray-200 transition">
              My Work
            </Link>
          </li>
          <li>
            <Link to="/#contact" smooth className="hover:text-gray-200 transition">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;