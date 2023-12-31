import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="h-[13vh] flex flex-col justify-center border-t-2 border-black dark:border-white">
      <div className="container mx-auto capitalize flex flex-col md:flex-row gap-y-2 items-center justify-between">
        <div className="text-xl">
          {year}
          <span className="mx-2">&copy;</span>
          all rights reserved
        </div>

        <div className="capitalize text-xl">
          built with <span className="text-accent dark:text-[#58E6D9]">♡</span> by{" "}
          <span className="text-xl underline underline-offset-2">MoSalah</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
