"use client";
import Link from "next/link";
import React from "react";

function HireMe() {
  return (
    <div className="fixed bottom-16 left-8 w-20 h-20 rounded-full cursor-pointer">
      <Link
        href={`mailto:mohamed.salah201982@gmail.com`}
        className="bg-white hover:bg-black text-black duration-300 ease-in-out transition-colors hover:text-white w-full h-full rounded-full flex items-center justify-center font-bold"
      >
        Hire Me
      </Link>
    </div>
  );
}

export default HireMe;
