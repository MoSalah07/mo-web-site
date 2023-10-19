"use client";
import React, { useEffect, useState } from "react";
import LinksPages from "./LinksPages";
import Logo from "./Logo";
// hook Dark Mode
import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import NavMobile from "./NavMobile";

function Nav() {
  const { mode, setMode } = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };


  return (
    <header className="h-[10vh] shadow-lg flex items-center">
      {/* Desktop */}
      <nav className="container mx-auto flex justify-between items-center">
        <Logo />
        <LinksPages mode={mode} setMode={setMode} />
        {/* Mobile */}
        <section
          className="sm:hidden text-2xl cursor-pointer"
          onClick={handleClick}
        >
          {/* <AiOutlineMenu /> */}
          <span
            className={`bg-black dark:bg-white block h-0.5 w-6 transition-all duration-300 ease-out rounded-sm  ${
              isOpen ? "rotate-45 translate-y-1" : " -translate-y-0.5"
            }`}
          ></span>
          <span
            className={`bg-black dark:bg-white block h-0.5 w-6 transition-all duration-300 ease-out rounded-sm my-0.5 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bg-black dark:bg-white block h-0.5 w-6 transition-all duration-300 ease-out rounded-sm ${
              isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          ></span>
        </section>
      </nav>
      {/* Nav Mobile */}
      {isOpen && <NavMobile mode={mode} setMode={setMode} setIsOpen={setIsOpen} />}
    </header>
  );
}

export default Nav;
