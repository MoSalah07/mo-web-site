"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "../icons/Icons";
import { motion } from "framer-motion";

const FramerImg = motion(Image);

function FeaturedProjects({
  type,
  title,
  summary,
  img = "",
  link = "/",
  github = "/",
}) {
  return (
    <article className="w-full flex flex-col gap-y-6 p-2 sm:p-0 sm:gap-y-0 sm:flex-row items-center justify-between rounded-3xl border border-solid border-black text-black bg-slate-200 shadow-2xl relative">
      {/* Shape Img */}
      <div className="shape-img" />
      <Link
        href={link}
        target="_blank"
        className="w-full sm:w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImg
          initial
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt={title}
          className="w-full h-auto"
        />
      </Link>
      <div className="w-full sm:w-1/2 flex flex-col gap-4 items-start justify-between sm:pl-6">
        <span className="text-purple-600 text-center block sm:w-auto w-full sm:text-left font-bold md:font-medium text-base md:text-xl">
          {type}
        </span>
        <Link
          className="hover:underline underline-offset-2"
          href={link}
          target="_blank"
        >
          <h2 className="w-full text-center sm:text-left text-xl md:text-2xl lg:text-4xl font-bold">
            {title}
          </h2>
        </Link>
        <p className="font-medium text-black">{summary}</p>
        <div className="flex items-center justify-between sm:justify-start w-full mt-4 mb-2 sm:mt-0 sm:mb-0">
          <Link className="sm:mb-4 block" href={github} target={`_blank`}>
            <GithubIcon className={`w-[40px] h-[40px]`} />
          </Link>
          <Link
            className="ml-4 rounded-lg bg-black text-gray-100 p-2 px-4 sm:px-6 text-sm md:text-lg font-semibold"
            href={link}
            target={`_blank`}
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
}

export default FeaturedProjects;
