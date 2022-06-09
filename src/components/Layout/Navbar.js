import React, { useState } from 'react';

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <header className="flex  justify-between h-20 shadow items-center px-4 md:px-10 lg:px-20">
      <div>
        <h2 className="font-aladin text-2xl">Habib-Ram</h2>
      </div>
      <nav className="flex items-center gap-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 lg:hidden hover:cursor-pointer"
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
              <a href="#">Home</a>
            </li>
            <li className="border-b-2 border-transparent hover:border-b-2 hover:border-purple-500">
              <a href="#aboutme">About Me</a>
            </li>
            <li className="border-b-2 border-transparent hover:border-b-2 hover:border-purple-500">
              <a href="#skills">Skills</a>
            </li>
            <li className="border-b-2 border-transparent hover:border-b-2 hover:border-purple-500">
              <a href="#project">Project</a>
            </li>
            <li className="border-b-2 border-transparent hover:border-b-2 hover:border-purple-500">
              <a href="#contactme">Contact Me</a>
            </li>
            <li className="nav-item">
              <a
                href="https://drive.google.com/file/d/1pW5zY7ryBObPeMROxc1PCMXpOl38Lnnq/view"
                target="_blank"
                rel="noreferrer"
              >
                <button className="px-6 py-3 border-2  border-purple-500 hover:bg-purple-500 hover:text-white rounded-full transition-all duration-300">
                  Download Resume
                </button>
              </a>
            </li>
          </ul>
        )}
        <ul className="hidden lg:flex md:items-center gap-8">
          <li className="border-b-2 border-transparent hover:border-b-2 hover:border-purple-500">
            <a href="#">Home</a>
          </li>
          <li className="border-b-2 border-transparent hover:border-b-2 hover:border-purple-500">
            <a href="#aboutme">About Me</a>
          </li>
          <li className="border-b-2 border-transparent hover:border-b-2 hover:border-purple-500">
            <a href="#skills">Skills</a>
          </li>
          <li className="border-b-2 border-transparent hover:border-b-2 hover:border-purple-500">
            <a href="#project">Project</a>
          </li>
          <li className="border-b-2 border-transparent hover:border-b-2 hover:border-purple-500">
            <a href="#contactme">Contact Me</a>
          </li>
          <li className="nav-item">
            <a
              href="https://drive.google.com/file/d/1pW5zY7ryBObPeMROxc1PCMXpOl38Lnnq/view"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-6 py-3 border-2  border-purple-500 hover:bg-purple-500 hover:text-white rounded-full transition-all duration-300">
                Download Resume
              </button>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
