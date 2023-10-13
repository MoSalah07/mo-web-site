import React from "react";
import Link from "next/link";
// Icons
import { HiOutlineExternalLink } from "react-icons/hi";
import AnimatedText from "../animated/AnimatedText";

function Content() {
  return (
    <div className="flex flex-col justify-center items-center gap-6 col-span-2 ">
      <AnimatedText text={`Mohamed Salah Web Developer`} />
      <p className="text-white text-base md:text-lg] leading-10 sm:leading-8 text-left md:text-justify w-full sm:w-[80%]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem maxime
        repudiandae perferendis repellat. Labore dolor aperiam illo rerum
        laborum nisi voluptates distinctio quos magnam! Molestiae ullam qui fuga
        voluptatum expedita!
      </p>
      <div className="flex items-center gap-10 sm:flex-row flex-col">
        <Link
          className="btn btn-lg flex items-center justify-center gap-4"
          download={true}
          href={`/Mo-Salah-CV.pdf`}
          target={`_blank`}
        >
          <span>resume</span>
          <HiOutlineExternalLink size={24} />
        </Link>
        <Link
          className="capitalize text-logo"
          href="mailto:mohamed.salah201982@gmail.com"
          target={`_blank`}
        >
          content
        </Link>
      </div>
    </div>
  );
}

export default Content;
