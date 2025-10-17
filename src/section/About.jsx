"use client";

import React from "react";

function About() {
  return (
    <div
      id="About"
      className=" grid lg:grid-cols-1  w-full h-screen relative p-5"
    >
      {/* <div className="w-full  h-full flex  justify-center items-center ">
        <div className="lg:h-[70%] flex rounded-[50%] bg-[#202022]">
          <img
            src="IMG_20250329_151923 (4)-min.png"
            className="  h-full w-full rounded-[50%]"
          />
        </div>
      </div> */}
      
      <div className="w-full h-full flex flex-col justify-center items-center p-4 sm:p-6 lg:p-8">
          <p className="text-gray-200 text-base sm:text-lg md:text-2xl lg:text-3xl text-center font-semibold leading-relaxed">
            As a{" "}
            <b className="text-green-400 anton">
              proficient Software Developer 💻{" "}
            </b>{" "}
            , I look forward to the challenges that high-quality, performant
            applications present. To this end, I leverage Next.js, React.js, and
            most importantly, Tailwind CSS ✨, to create sleek and responsive UI
            experiences. I design scalable and performant backends with Spring
            Boot and Express.js ⚡. My passion for mobile development involves
            building mobile apps with React Native 📱, enabling cross-platform
            development. Besides writing code, I'm an enthusiastic robotics nerd
            🤖 with a keen interest in software and automation innovation.
          </p>
        
      </div>
    </div>
  );
}

export default About;
