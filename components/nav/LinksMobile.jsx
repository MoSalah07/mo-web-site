"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
// Icons
import {
  TwitterIcon,
  LinkedInIcon,
  GithubIcon,
} from "../../components/icons/Icons";
import { MoonIcon, SunIcon } from "../icons/Icons";
// Motion
import { motion } from "framer-motion";

function LinksMobile({ mode, setMode }) {
  return (
    <div className="flex flex-wrap sm:hidden items-center justify-center mt-8 gap-6 p-4 rounded-lg">
      <motion.a href={`/`} whileHover={{ y: -2 }}>
        <TwitterIcon className={`w-[35px] h-[35px]`} />
      </motion.a>
      <motion.a
        href={`https://www.linkedin.com/in/mohamed-salah-957284282/?trk=public-profile-join-page`}
        target={`_blank`}
        whileHover={{ y: -2 }}
      >
        <LinkedInIcon className={`w-[35px] h-[35px]`} />
      </motion.a>
      <motion.a
        href={`https://github.com/MoSalah07`}
        target={`_blank`}
        whileHover={{ y: -2 }}
      >
        <GithubIcon className={`w-[35px] h-[35px]`} />
      </motion.a>
      <motion.a
        href={`https://www.facebook.com/mido.mohammed.7`}
        target={`_blank`}
        whileHover={{ y: -2 }}
      >
        <Image
          src={`/images/svgs/facebook.svg`}
          priority
          alt="facebook"
          width={35}
          height={35}
        />
      </motion.a>
      <button
        onClick={() => setMode(mode === "light" ? "dark" : "light")}
        className={`ml-1 flex items-center justify-center rounded-full p-1 ${
          mode === "light" ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        {mode === "dark" ? (
          <SunIcon className={`fill-black`} />
        ) : (
          <MoonIcon className={`fill-black`} />
        )}
      </button>
    </div>
  );
}

export default LinksMobile;
