"use client";

import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-base text-neutral shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo/Name */}
        <div className="text-2xl font-heading">
          <Link href="/" legacyBehavior>
            <a>Ervin Niño Pelonio</a>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
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
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <nav className={`md:flex space-x-6 hidden md:block`}>
          <Link href="/" legacyBehavior>
            <a className="hover:text-accent">Home</a>
          </Link>
          <Link href="#about" legacyBehavior>
            <a className="hover:text-accent">About</a>
          </Link>
          <Link href="/projects" legacyBehavior>
            <a className="hover:text-accent">Projects</a>
          </Link>
          <Link href="#experience" legacyBehavior>
            <a className="hover:text-accent">Experience</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="hover:text-accent">Contact</a>
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-base`}>
        <nav className="px-4 py-2 space-y-2">
          <Link href="/" legacyBehavior>
            <a className="block hover:text-accent">Home</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className="block hover:text-accent">About</a>
          </Link>
          <Link href="/projects" legacyBehavior>
            <a className="block hover:text-accent">Projects</a>
          </Link>
          <Link href="/experience" legacyBehavior>
            <a className="block hover:text-accent">Experience</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="block hover:text-accent">Contact</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
