"use client";
import Link from "next/link";
import React from "react";

function HireMe() {
  return (
    <div className="fixed bottom-16 left-8 w-20 h-20 rounded-full cursor-pointer z-50">
      <Link
        href={`mailto:mohamed.salah201982@gmail.com`}
        className="bg-[#e0d5ca] dark:bg-[#36235a] hover:bg-[#e9dfd5] dark:hover:bg-[#483869] shadow-lg duration-300 ease-in-out transition-colors  w-full h-full rounded-full flex items-center justify-center font-bold"
      >
        Hire Me
      </Link>
    </div>
  );
}

export default HireMe;
