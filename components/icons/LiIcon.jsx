"use client";
import React from "react";
import { useScroll, motion } from "framer-motion";

function LiIcon({ reference }) {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });
  return (
    <figure ref={reference} className="absolute left-0 stroke-[#333]">
      <svg className="rotate-[-165deg] md:-rotate-[100deg]" width={`75`} height={`75`} viewBox={`0 0 100 100`}>
        <circle
          cx={`75`}
          cy={`50`}
          r={`20`}
          className=" stroke-purple-600 stroke-1 fill-none"
        />
        <motion.circle
          cx={`75`}
          cy={`50`}
          r={`20`}
                  className={`stroke-[5px] fill-gray-200`}
                  style={{pathLength: scrollYProgress}}
        />
        <circle
          cx={`75`}
          cy={`50`}
          r={`10`}
          className="stroke-1 fill-purple-700 animate-pulse"
        />
      </svg>
    </figure>
  );
}

export default LiIcon;
