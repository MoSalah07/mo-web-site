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
// Motion
import { motion } from "framer-motion";

function StaticBar() {
  return (
    <div className="hidden sm:flex flex-col justify-between gap-6 fixed z-50 right-8 top-1/2 translate-y-[-50%] bg-[#e0d5ca] dark:bg-[#281a42] p-4 rounded-lg">
      <motion.a href={`/`} whileHover={{ x: -2 }}>
        <TwitterIcon className={`w-6`} />
      </motion.a>
      <motion.a
        href={`https://www.linkedin.com/in/mohamed-salah-957284282/?trk=public-profile-join-page`}
        target={`_blank`}
        whileHover={{ x: -2 }}
      >
        <LinkedInIcon />
      </motion.a>
      <motion.a
        href={`https://github.com/MoSalah07`}
        target={`_blank`}
        whileHover={{ x: -2 }}
      >
        <GithubIcon />
      </motion.a>
      <motion.a
        href={`https://www.facebook.com/mido.mohammed.7`}
        target={`_blank`}
        whileHover={{ x: -2 }}
      >
        <Image
          src={`/images/svgs/facebook.svg`}
          priority
          alt="facebook"
          width={30}
          height={30}
        />
      </motion.a>
    </div>
  );
}

export default StaticBar;
