import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [show, setShow] = useState(false);
  console.log(show);

  return (
    <header className="flex  justify-between h-20 shadow items-center px-4 md:px-10 lg:px-20">
      <div>
        <h2 className="font-aladin text-xl">Habib-Ram</h2>
      </div>
      <nav className="flex items-center gap-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 lg:hidden"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          onClick={() => setShow((prevState) => !prevState)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        {show && (
          <ul className="flex flex-col items-center lg:hidden  gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full bg-purple-50 h-screen mt-20 pt-32">
            <li className="border-b-2 border-transparent hover:border-b-2 hover:border-purple-500">
              <Link to="#">Home</Link>
            </li>
            <li className="border-b-2 border-transparent hover:border-b-2 hover:border-purple-500">
              <Link to="#">About</Link>
            </li>
            <li className="border-b-2 border-transparent hover:border-b-2 hover:border-purple-500">
              <Link to="#">Skill</Link>
            </li>
            <li className="border-b-2 border-transparent hover:border-b-2 hover:border-purple-500">
              <Link to="#">Project</Link>
            </li>
            <li className="border-b-2 border-transparent hover:border-b-2 hover:border-purple-500">
              <Link to="#">Contact</Link>
            </li>
            <li className="nav-item">
              <button className="px-6 py-3 border-2 border-purple-500 hover:bg-purple-500 hover:text-white rounded-full transition-all duration-300">
                Download Resume
              </button>
            </li>
          </ul>
        )}
        <ul className="hidden lg:flex md:items-center gap-8">
          <li className="border-b-2 border-transparent hover:border-b-2 hover:border-purple-500">
            <Link to="#">Home</Link>
          </li>
          <li className="border-b-2 border-transparent hover:border-b-2 hover:border-purple-500">
            <Link to="#">About</Link>
          </li>
          <li className="border-b-2 border-transparent hover:border-b-2 hover:border-purple-500">
            <Link to="#">Skill</Link>
          </li>
          <li className="border-b-2 border-transparent hover:border-b-2 hover:border-purple-500">
            <Link to="#">Project</Link>
          </li>
          <li className="border-b-2 border-transparent hover:border-b-2 hover:border-purple-500">
            <Link to="#">Contact</Link>
          </li>
          <li className="nav-item">
            <button className="px-6 py-3 border-2 border-purple-500 hover:bg-purple-500 hover:text-white rounded-full transition-all duration-300">
              Download Resume
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
