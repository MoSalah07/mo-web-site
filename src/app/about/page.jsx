"use client";
import React from "react";
// Img
import Image from "next/image";
import MoImage from "../../../public/images/profile/mo-profile.webp";
// Components
import AnimatedText from "../../../components/animated/AnimatedText";
import AnimatedNumbers from "../../../components/animated/AnimatedNumbers";
import Skills from "../../../components/about/Skills";
import Experience from "../../../components/about/Experience";
import Education from "../../../components/about/Education";


function AboutPage() {
  return (
    <>
      <title>About Page</title>
      <meta name="description" content="Created About Page By Mohamed Salah" />
      <div className="about">
        <AnimatedText text="Passion Fuels Purpose!" />
        <div className="about-container-box">
          <div className="col-1">
            <h2 className="mb-4 text-lg font-bold uppercase about-heading">
              Biography
            </h2>
            <p className="font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              architecto ducimus, nam amet perspiciatis cupiditate!
            </p>
            <p className={`font-medium my-4`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              architecto ducimus, nam amet perspiciatis cupiditate!
            </p>
            <p className="font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              architecto ducimus, nam amet perspiciatis cupiditate!
            </p>
          </div>
          <div className="col-2">
            <div className="overlay-img-about" />
            <Image
              src={MoImage}
              // priority
              alt="Profile-About"
              className="img-about"
              width={300}
              height={300}
              loading="lazy"
            />
          </div>
          <div className="col-3">
            <div className="sub-col-3">
              <AnimatedNumbers value={50} />
              <h2>satisfied clients</h2>
            </div>
            <div className="sub-col-3">
              <AnimatedNumbers value={40} />
              <h2>projects completed</h2>
            </div>
            <div className="sub-col-3">
              <AnimatedNumbers value={3} />
              <h2>years of experience</h2>
            </div>
          </div>
        </div>
        {/* Skills */}
        <Skills />
        {/* Experience */}
        <Experience />
        {/* Education */}
        <Education />
      </div>
    </>
  );
}

export default AboutPage;
