"use client";
import React, { useEffect, useState } from "react";
import LinksPages from "./LinksPages";
import Logo from "./Logo";
// ReactIcons
import { AiOutlineMenu } from "react-icons/ai";
// hook Dark Mode
import useThemeSwitcher from "../../hooks/useThemeSwitcher";

function Nav() {
  const { mode, setMode } = useThemeSwitcher();
  const [isRanderModeSvg, setIsRanderModeSvg] = useState(false);

  useEffect(() => {
    setIsRanderModeSvg(true);
  }, []);

  return (
    <>
      {isRanderModeSvg && (
        <nav className="h-[10vh] shadow-lg flex items-center">
          {/* Desktop */}
          <div className="container mx-auto flex justify-between items-center">
            <Logo />
            <LinksPages mode={mode} setMode={setMode} />
            {/* Mobile */}
            <div className="sm:hidden text-2xl cursor-pointer">
              <AiOutlineMenu />
            </div>
          </div>
        </nav>
      )}
    </>
  );
}

export default Nav;
