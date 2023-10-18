"use client";
import React from "react";
import { motion } from "framer-motion";

const quote = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

function AnimatedText({ text = "" }) {
  return (
    <motion.h2
      variants={quote}
      initial="initial"
      animate="animate"
      className={`text-center  break-words text-xl sm:text-2xl md:text-4xl xl:text-[40px] font-semibold `}
    >
      {text.split(" ").map((word, index) => (
        <motion.span
          variants={singleWord}
          initial={`initial`}
          animate={`animate`}
          key={`${word}-${index}`}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.h2>
  );
}

export default AnimatedText;
