"use client";

import { Menu, X } from "lucide-react";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-black/80 backdrop-blur-sm text-gray-800 dark:text-white py-4 px-6 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          <span className="text-[#3498db]">Luck</span>Box
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="hover:text-[#3498db] transition-colors">
            HOME
          </Link>
          <Link
            href="/training"
            className="hover:text-[#3498db] transition-colors"
          >
            TRAINING
          </Link>
          <Link
            href="/about"
            className="hover:text-[#3498db] transition-colors"
          >
            ABOUT
          </Link>
          <Link
            href="/contact"
            className="hover:text-[#3498db] transition-colors"
          >
            CONTACT
          </Link>
          <Link
            href="/subscribe"
            className="bg-[#3498db] text-white px-4 py-2 rounded hover:bg-[#2980b9] transition-colors"
          >
            START TRAINING
          </Link>
          <ThemeToggle />
        </nav>
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden mt-4 flex flex-col space-y-4">
          <Link href="/" className="hover:text-[#3498db] transition-colors">
            HOME
          </Link>
          <Link
            href="/training"
            className="hover:text-[#3498db] transition-colors"
          >
            TRAINING
          </Link>
          <Link
            href="/about"
            className="hover:text-[#3498db] transition-colors"
          >
            ABOUT
          </Link>
          <Link
            href="/contact"
            className="hover:text-[#3498db] transition-colors"
          >
            CONTACT
          </Link>
          <Link
            href="/subscribe"
            className="bg-[#3498db] text-white px-4 py-2 rounded hover:bg-[#2980b9] transition-colors inline-block"
          >
            START TRAINING
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
