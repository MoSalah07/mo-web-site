"use client";
import Link from "next/link";
import React, { useRef } from "react";
// Components
import LiIcon from "../icons/LiIcon";
// Motion
import { useScroll, motion } from "framer-motion";

const Details = ({
  position,
  company,
  companyLink = "/",
  time,
  address,
  work,
}) => {
  const ref = useRef(null);
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[80%] md:w-[60%] mx-auto flex flex-col items-center justify-between">
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <Link
            target={`_blank`}
            className="text-purple-600 dark:text-[#58E6D9]"
            href={companyLink}
          >
            @{company}
          </Link>
        </h3>
        <span className="capitalize font-medium text-gray-600 dark:text-gray-400 block my-2">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

function Experience() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold capitalize mt-64 mb-16 text-3xl md:text-8xl w-full text-center">
        experience
      </h2>
      <div ref={ref} className="w-full md:w-[75%] mx-auto relative">
        {/* Shape */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-4 md:left-8 top-0 w-[4px] h-full bg-black origin-top"
        />
        <ul>
          <Details
            position={`Software Engineer`}
            company={`Google`}
            time={`2022-Present`}
            address={`Mountain View, CA`}
            work={`Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization.`}
          />
          <Details
            position={`Software Engineer`}
            company={`Google`}
            time={`2022-Present`}
            address={`Mountain View, CA`}
            work={`Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization.`}
          />
          <Details
            position={`Software Engineer`}
            company={`Google`}
            time={`2022-Present`}
            address={`Mountain View, CA`}
            work={`Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization.`}
          />
          <Details
            position={`Software Engineer`}
            company={`Google`}
            time={`2022-Present`}
            address={`Mountain View, CA`}
            work={`Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization.`}
          />
        </ul>
      </div>
    </div>
  );
}

export default Experience;
