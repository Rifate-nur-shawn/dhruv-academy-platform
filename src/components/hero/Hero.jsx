import React from "react";
import BgImage from "../../assets/hero-bg.png";
import HeroImg from "../../assets/hero.png";
import learners from "../../assets/learners.png";
import Navbar from "../navbar/Navbar";

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const Hero = () => {
  return (
    <>
      <section style={bgStyle} className="pt-3">
        {/* Navbar section */}
        <div className="container">
          <div className="fixed top-3 left-0 w-full z-[999999]">
            <Navbar />
          </div>
        </div>
        <div className="container min-h-[700px] grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Text content section */}
          <div className="flex flex-col justify-center pt-20 md:pt-10 text-center md:text-left order-2 md:order-1">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4">
                LEARN WHAT SCHOOL DOESN'T TEACH YOU
              </h1>
              <p className="text-gray-300 text-sm md:text-base mt-4 max-w-lg leading-relaxed">
                At Dhruv Rathee Academy, you can gain practical knowledge and
                learn real-world skills that will help you transform your life
                at work, school, and home.
              </p>
              <div className="mt-8">
                <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors text-sm md:text-base">
                  EXPLORE COURSES
                </button>
              </div>
              <div className="flex items-center gap-4 mt-6 flex-wrap">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <img
                      src={learners}
                      alt="learners"
                      className="w-16 h-8 object-cover rounded"
                    />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold">10000+</p>
                    <p className="text-xs text-gray-400">Happy Learners</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400 font-semibold">4.8+</span>
                  <div className="flex text-yellow-400 text-sm">
                    <span>★★★★★</span>
                  </div>
                  <span className="text-xs text-gray-400">(600+ Ratings)</span>
                </div>
              </div>
            </div>
          </div>
          {/* Hero Image section */}
          <div className="flex justify-center items-center order-1 md:order-2">
            <img
              src={HeroImg}
              alt="Hero"
              className="mt-20 sm:mt-30 md:mt-40 w-full max-w-[250px] sm:max-w-[300px] md:max-w-[450px] lg:max-w-[550px] object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
