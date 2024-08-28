import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <header className="bg-sectiong1 font-sans text-black py-2 h-20 fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-opacity-70 border-b border-gray-200 shadow-lg rounded-md">
      <div className="flex items-center justify-between px-6 lg:px-12 h-full">
        <div className="flex items-center">
          <img
            src={logo}
            alt="DJS CODESTARS Logo"
            className="h-12 w-12 mr-4"
          />
          <h1 className="text-2xl font-extrabold text-gray-800 sm:text-4xl">
            DJS CODESTARS
          </h1>
        </div>
        <nav className="hidden md:flex space-x-6 text-xl">
          <button className='bg-transparent text-black hover:bg-white hover:text-headerorange px-4 py-2 rounded-md transition-transform transform hover:scale-105'>
            Home
          </button>
          <button className='bg-transparent text-black hover:bg-white hover:text-headerorange px-4 py-2 rounded-md transition-transform transform hover:scale-105'>
            Events
          </button>
          <button className='bg-transparent text-black hover:bg-white hover:text-headerorange px-4 py-2 rounded-md transition-transform transform hover:scale-105'>
            About
          </button>
          <button className='bg-transparent text-black hover:bg-white hover:text-headerorange px-4 py-2 rounded-md transition-transform transform hover:scale-105'>
            Contact
          </button>
        </nav>
        <button
          className="md:hidden text-xl p-2 rounded-md hover:bg-gray-200 focus:outline-none"
          onClick={toggleNav}
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      {isNavOpen && (
        <div className="md:hidden fixed top-20 left-0 w-full bg-white shadow-lg rounded-md border border-gray-300 z-40">
          <div className="flex flex-col items-center py-4">
            <button className='w-full text-center bg-transparent text-black hover:bg-gray-100 px-4 py-2 rounded-md transition-transform transform hover:scale-105'>
              Home
            </button>
            <button className='w-full text-center bg-transparent text-black hover:bg-gray-100 px-4 py-2 rounded-md transition-transform transform hover:scale-105'>
              Events
            </button>
            <button className='w-full text-center bg-transparent text-black hover:bg-gray-100 px-4 py-2 rounded-md transition-transform transform hover:scale-105'>
              About
            </button>
            <button className='w-full text-center bg-transparent text-black hover:bg-gray-100 px-4 py-2 rounded-md transition-transform transform hover:scale-105'>
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
