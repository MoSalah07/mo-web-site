"use client";
import React from "react";
// Motion
import {motion } from "framer-motion";

const transitionVariants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

function TransitionPages() {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-full h-screen z-[50000] bg-[#2e2257]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit={"exit"}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-full h-screen z-[40000] bg-[#3b2d71]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit={"exit"}
        transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-full h-screen z-[30000] bg-[#4b3792]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit={"exit"}
        transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
      ></motion.div>
    </>
  );
}

export default TransitionPages;
