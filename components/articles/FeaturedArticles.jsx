"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const FramerImg = motion(Image);

function FeaturedArticles({
  link = "/",
  img = "",
  title = "",
  summary = "",
  time = "",
}) {
  return (
    <li className="col-span-1 w-full p-4 bg-gray-200 text-black border border-solid border-black rounded-2xl">
      <Link
        href={link}
        target={`_blank`}
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImg
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt={title}
          className="w-full h-auto"
        />
      </Link>
      <Link href={link} target={`_blank`}>
        <h2 className=" capitalize text-2xl font-bold my-2 hover:underline">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-purple-600 font-semibold">{time}</span>
    </li>
  );
}

export default FeaturedArticles;
