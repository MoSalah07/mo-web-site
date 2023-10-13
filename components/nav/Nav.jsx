"use client";
import React from "react";
import LinksPages from "./LinksPages";
import Logo from "./Logo";
// ReactIcons
import {AiOutlineMenu} from 'react-icons/ai'

function Nav() {
  return (
    <nav className="h-[10vh] shadow-lg flex items-center">
      {/* Desktop */}
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <LinksPages />
        {/* Mobile */}
        <div className="sm:hidden text-2xl cursor-pointer">
          <AiOutlineMenu />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
