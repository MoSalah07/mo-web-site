"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// Components
import LinksMobile from "./LinksMobile";
// Framer Motion
import { motion } from "framer-motion";

// Custom LinkMobile
const MobileLinks = ({ href, pathname, title }) => {
  return (
    <Link
      className={`capitalize relative after:absolute after:bottom-[-10px] after:left-0 ${
        pathname === href ? `after:w-full` : `after:w-0`
      } after:h-[2px] after:bg-black dark:after:bg-white after:duration-150 after:transition-all after:ease-in-out hover:after:w-full`}
      href={href}
    >
      {title}
    </Link>
  );
};

function NavMobile({ mode, setMode, setIsOpen }) {
  const pathname = usePathname();

  useEffect(() => {
    window.addEventListener("click", (e) => {
      // console.log(e.target.tagName)
      if (e.target.tagName === "DIV") {
        setIsOpen(false);
      }
    });
  }, [window]);

  useEffect(() => {
    window.addEventListener("keyup", (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    });
  }, [window]);

  return (
    <motion.nav
      initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
      animate={{ scale: 1, opacity: 1 }}
      className="flex flex-col py-4 sm:hidden fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#BFBFBF] text-black w-[90%] h-1/2 backdrop-blur-md"
    >
      <ul className="flex flex-col items-center gap-6 mt-6">
        <MobileLinks
          mode={mode}
          setMode={setMode}
          href={`/`}
          title={`Home`}
          pathname={pathname}
        />
        <MobileLinks
          mode={mode}
          setMode={setMode}
          href={`/about`}
          title={`About`}
          pathname={pathname}
        />
        <MobileLinks
          mode={mode}
          setMode={setMode}
          href={`/projects`}
          title={`Projects`}
          pathname={pathname}
        />
        <MobileLinks
          mode={mode}
          setMode={setMode}
          href={`/skills`}
          title={`Articles`}
          pathname={pathname}
        />
      </ul>
      {/* Icons Mobile */}
      <LinksMobile mode={mode} setMode={setMode} />
    </motion.nav>
  );
}

export default NavMobile;
