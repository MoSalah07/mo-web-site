"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";

const FramerImg = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  const handleMouse = (event) => {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  };
  const handleMouseLeave = (event) => {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  };

  return (
    <Link
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      href={link}
      target={`_blank`}
    >
      <h2 className=" capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImg
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="w-96 h-auto hidden absolute rounded-lg z-50"
      />
    </Link>
  );
};

function Article({ title = "", img = "", link = "/", date = "" }) {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{once: true}}
      className=" relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-gray-200 text-black first:mt-0 border border-solid border-black border-r-4 border-b-4"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-purple-600 font-semibold pl-4">{date}</span>
    </motion.li>
  );
}

export default Article;
