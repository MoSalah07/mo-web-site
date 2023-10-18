"use client";
import React from "react";
import { motion } from "framer-motion";

function Skills() {
  const skillsList = [
    "web",
    "web design",
    "redux",
    "react js",
    "next js",
    "mongodb",
    "firebase",
    "CSS3",
    "HTML5",
    "tailwind",
    "bootstrap",
    "javascript",
    "typescript",
  ];
  return (
    <div>
      <h2 className="font-bold capitalize mt-64 mb-16 text-3xl md:text-8xl w-full text-center">
        skills
      </h2>
      <div className="w-full relative grid grid-cols-2 ms:grid-cols-3 md:grid-cols-5 gap-4">
        {skillsList.map((skill) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={skill}
            className="bg-black dark:bg-white font-semibold text-center cursor-pointer col-span-1 text-white dark:text-black w-full py-2 px-4 h-12 flex items-center justify-center rounded-lg capitalize"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
