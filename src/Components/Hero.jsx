import React from "react";
import { heroImageArray, resources } from "../assets/assets";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="m-[8px] px-[8px] sm:px-0  sm:m-[20px] flex flex-col lg:flex-row  justify-center sm:justify-between items-center gap-3 sm:gap-4">
      {/* Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="one bg-[#FFFFFF] dark:bg-[#1A1A2E] w-full  flex flex-col justify-center items-center sm:justify-start sm:items-start border border-[#d9d9d9] rounded-[20px] pl-[10px] pr-[20px] sm:pl-[20px] py-[25px] sm:py-[40px]  sm:pr-[60px]"
      >
        <img src={resources.herolog} alt="Hero Logo Image" />
        <h1 className="dark:text-[#E0E0E0] literata-italic font-bold text-[32px] sm:text-[48px]">
          Hi, I'm Davood-{" "}
        </h1>
        <h1 className="text-[#FF472F] dark:text-[#FF6B4D] sm:mt-[-14px] literata-italic font-bold text-[24px] sm:text-[48px] whitespace-nowrap">
          Clean Code Craftsmanship
        </h1>
        <p className=" dark:text-[#E0E0E0] manrope text-[13px] sm:text-[18px]  sm:w-[700px] whitespace-normal text-center sm:text-left">
          I’m a passionate self-taught developer with a love for frontend
          development. I believe in writing clean, reusable code and building   
          applications that not only work flawlessly but also leave a lasting
          visual impact.
        </p>
        <div className="px-[5px]  sm:px-[10px] py-[2px] rounded-[30px] bg-[#F6CCC6] mt-2 sm:mt-4">
          <p className="manrope text-[8px] sm:text-[14px] text-[#FF472F] dark:text-[#FF6B4D]">
            *Open for any offers
          </p>
        </div>
      </motion.div>
      {/* Right Side */}
      <div className="flex flex-col gap-3 w-full">
        {/* Image Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="two bg-[#FFFFFF] dark:bg-[#1A1A2E] w-full border border-[#d9d9d9] rounded-[20px] flex justify-center items-center px-[10px]"
        >
          <img className="mt-11 " src={resources.heroimg} alt="Hero" />
        </motion.div>

        {/* Skills Block */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="three bg-[#FFFFFF] dark:bg-[#1A1A2E] w-full slidingImages  h-[111px] border border-[#d9d9d9] rounded-[20px] p-[10px] relative overflow-hidden"
        >
          <h1 className="literata-italic font-semibold text-[16px] text-center">
            My Major <span className="text-[#FF472F] dark:text-[#FF6B4D]">Skills</span>
          </h1>

          {/* Gradient Fade Effects */}
          <div className="absolute left-0 top-0 h-full w-[50px] bg-gradient-to-r from-[#f0f0f0] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 h-full w-[50px] bg-gradient-to-l from-[#f0f0f0] to-transparent z-10 pointer-events-none"></div>

          {/* Sliding Images */}
          <div className="mt-3 overflow-hidden relative">
            <motion.div
              className="flex gap-5"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "linear",
              }}
            >
              {[...heroImageArray, ...heroImageArray].map((image, index) => (
                <img
                  key={index}
                  className="w-[40px] h-[40px]"
                  src={image}
                  alt={`skill-${index}`}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
