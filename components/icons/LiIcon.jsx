"use client";
import React from "react";
import { useScroll, motion } from "framer-motion";

function LiIcon({ reference }) {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });
  return (
    <figure
      ref={reference}
      className="absolute left-0 stroke-[#333] dark:stroke-white"
    >
      <svg
        className="rotate-[-110deg] md:rotate-[80deg] w-[40px] h-[40px]  md:w-[60px] md:h-[60px]"
        width={`75`}
        height={`75`}
        viewBox={`0 0 100 100`}
      >
        <circle
          cx={`75`}
          cy={`50`}
          r={`20`}
          className=" stroke-purple-600 dark:stroke-[#58E6D9] stroke-1 fill-none"
        />
        <motion.circle
          cx={`75`}
          cy={`50`}
          r={`20`}
          className={`stroke-[5px] fill-gray-200 dark:fill-black`}
          style={{ pathLength: scrollYProgress }}
        />
        <circle
          cx={`75`}
          cy={`50`}
          r={`10`}
          className="stroke-1 fill-purple-700 dark:fill-[#58E6D9] animate-pulse"
        />
      </svg>
    </figure>
  );
}

export default LiIcon;
