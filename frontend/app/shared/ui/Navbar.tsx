"use client"

import Link from "next/link"
import { useState } from "react";
import { ILink } from "../interfaces/Link/ILink";
import { navConfig } from "../lib/navConfig";

export const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
  };

  return (
      <header className="bg-gradient-to-t from-indigo-600 to-blue-500 text-white shadow-lg">
        {/* Logo or Brand */}
        <div className="flex items-center justify-between py-3 px-6 max-w-7xl mx-auto">
          <div className="text-xl font-semibold">Mi tienda</div>
          {/* Button to toggle menu on small screens */}
          <button
            className="md:hidden text-3xl p-2 rounded-full focus:outline-none"
            onClick={toggleMenu}
            >
            <span className="text-white">☰</span>
          </button>
          <ul
          className={`md:flex flex-col md:flex-row items-center space-x-6 md:space-x-8 mt-4 md:mt-0 ${
          isMenuOpen ? "block absolute top-10 right-2 bg-color1" : "hidden"
          }`}
          >
          {navConfig.map((elemento: ILink) => (
            <li key={elemento.text} className="text-center">
              <Link href={elemento.path}>
                <span className="text-lg font-semibold hover:text-yellow-300 transition duration-300">
                {elemento.text}
                </span>
              </Link>
            </li>
          ))}
          </ul>
        </div>
    </header>
  )
}

