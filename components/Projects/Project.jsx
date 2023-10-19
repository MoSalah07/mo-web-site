"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GithubIcon } from "../icons/Icons";
import { motion } from "framer-motion";

const FramerImg = motion(Image);

function Project({ title, type, img = "", link = "/", github = "/" }) {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border broder-solid border-[#333] dark:border-white bg-gray-200 dark:bg-[#201234] p-6 relative">
      <Link
        href={link}
        target={`_blank`}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImg
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt={title}
          className="w-full h-auto"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-[#B63E96] dark:text-[#3EC3B4] font-medium text-xl">
          {type}
        </span>
        <Link
          href={link}
          target={`_blank`}
          className="hover:underline underline-offset-1 text-black dark:text-white"
        >
          <h2 className="my-2 text-black dark:text-white w-full text-left text-xl md:text-3xl font-bold">
            {title}
          </h2>
        </Link>
        <div className="mt-2 flex items-center justify-between w-full">
          <Link
            href={link}
            target={`_blank`}
            className="text-black dark:text-white text-lg font-semibold underline"
          >
            Visit
          </Link>
          <Link
            href={github}
            target={`_blank`}
            className="w-8 text-black dark:text-white"
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default Project;
