import React, { useState, useCallback } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const menuItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#project" },
  { name: "Contact me", link: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  return (
    <div id="home">
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#0a283bf5] p-5 z-10 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <button onClick={toggleMenu} aria-label="Close menu" className="float-right">
          <IoClose className="h-10 w-10 text-white" />
        </button>
        <ul className="text-xl flex flex-col mt-16 items-center w-full">
          {menuItems.map((item) => (
            <li key={item.name} >
            <a
              href={item.link}
              className="w-full text-center py-3 hover:text-primary"
              onClick={toggleMenu}
              aria-label="Links"
            >
              {item.name}
            </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Navbar */}
      <div className="flex justify-between items-center py-2 w-full">
        <p className="text-3xl p-2 px-4 font-semibold">Portfolio</p>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="lg:hidden mr-2" aria-label="Open menu">
          <IoMenu className="h-9 w-9 text-white" />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex text-xl p-2">
          {menuItems.map((item) => (
            <li key={item.name} className="px-4 hover:text-primary transition-all duration-300">
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
