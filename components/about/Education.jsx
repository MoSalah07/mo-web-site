"use client";
import Link from "next/link";
import React, { useRef } from "react";
// Components
import LiIcon from "../icons/LiIcon";
// Motion
import { useScroll, motion } from "framer-motion";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[80%] md:w-[60%] mx-auto flex flex-col items-center justify-between">
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">{type}&nbsp;</h3>
        <span className="capitalize font-medium text-gray-400">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

function Education() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold capitalize mt-64 mb-16 text-3xl md:text-8xl w-full text-center">
        education
      </h2>
      <div ref={ref} className="w-full md:w-[75%] mx-auto relative">
        {/* Shape */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-4 md:left-8 top-0 w-[4px] h-full bg-black origin-top"
        />
        <ul>
          <Details
            type={`Bachelor Of Science In Computer Science`}
            time={`2016-2020`}
            place={`www.google.com`}
            info={`2022-Present`}
          />
          <Details
            type={`Bachelor Of Science In Computer Science`}
            time={`2016-2020`}
            place={`www.google.com`}
            info={`2022-Present`}
          />
          <Details
            type={`Bachelor Of Science In Computer Science`}
            time={`2016-2020`}
            place={`www.google.com`}
            info={`2022-Present`}
          />
          <Details
            type={`Bachelor Of Science In Computer Science`}
            time={`2016-2020`}
            place={`www.google.com`}
            info={`2022-Present`}
          />
        </ul>
      </div>
    </div>
  );
}

export default Education;
