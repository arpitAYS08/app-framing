'use client';

import React, { useRef } from "react";
import { firstStep } from "../app/assets/index";
import Reveal from "../components/common/Reveal";

const Home1 = () => {
  const videoRef = useRef(null);

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  return (
    <section
      id="home"
      className="home bg-white scroll-smooth"
      style={{ backgroundColor: "#214245" }}
    >
      <div className="py-16 px-4 mx-auto max-w-screen-xl lg:py-32 lg:px-12 mx-auto px-6 py-16 lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-1/2">
        <Reveal>
          <h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-6xl">
            Empower Your Enterprise with AI-Powered Knowledge Retrieval
          </h1>
          </Reveal>
          <Reveal>
          <p className="mt-4 text-lg font-normal text-gray-200 lg:text-xl">
          Unlock the full potential of your knowledge base with App Framing. 
          Seamlessly integrate AI into your enterprise applications to retrieve vital information from varioud sources.
          Customize the platform to meet your unique business needs and transform the way you access and use data.
          </p>
          </Reveal>
          <Reveal>
          <a
            href="/contact"
            className="inline-block mt-8 px-6 py-3 text-lg font-semibold text-white bg-black rounded-lg hover:bg-secondary"
          >
            Try for free
          </a>
          </Reveal>
        </div>
        <div className="lg:w-1/2 lg:mt-0 mt-8 flex justify-center">
          <div className="relative w-120 h-50 lg:h-60 shadow-lg rounded-lg overflow-hidden">
          {/* <Reveal> */}
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              controls
              preload="none"
              autoPlay
              muted
              aria-label="Video player"
            >
              
              <source src={firstStep} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* </Reveal> */}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
            {/* <Reveal> */}
            <button
              onClick={handleFullscreen}
              className="absolute bottom-4 right-4 bg-white text-black px-3 py-1 rounded-lg hover:bg-gray-200"
            >
              Fullscreen
            </button>
            {/* </Reveal> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home1;
