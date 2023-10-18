import React from "react";
import Content from "./Content";
// Images
import Image from "next/image";
import MoSalahImg from "../../public/images/profile/mo-profile.webp";

function HomeLanding() {
  return (
    <div className="grid grid-cols-1 gap-x-4 gap-y-12 lg:gap-y-0 lg:grid-cols-3">
      <div className="hidden lg:block aspect-auto rounded-lg mb-8">
        <Image
          src={MoSalahImg}
          alt="MoSalah"
          priority
          quality={80}
          placeholder="blur"
          width={300}
          height={300}
          className=" rounded-lg overflow-hidden aspect-auto"
        />
      </div>
      <Content />
    </div>
  );
}

export default HomeLanding;
