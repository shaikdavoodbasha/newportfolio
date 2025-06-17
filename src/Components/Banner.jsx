import React from "react";
import { BannerData } from "../assets/assets";
import { motion } from "framer-motion";

const Banner = () => {
  // Total width of one full cycle
  // dark:bg-[#1A1A2E]
  // dark:text-[#FF6B4D] red
  // dark:text-[#E0E0E0] white

  const marqueeVariants = {
    animate: {
      x: ["0%", "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="relative m-[8px] sm:m-[20px]  overflow-hidden border border-[#d9d9d9] rounded-[20px] bg-white dark:bg-[#1A1A2E] px-[24px] py-[14px]">
      
      {/* Left Light Fade */}
      <div className="absolute top-0 left-0 w-[60px] h-full z-10 bg-gradient-to-r from-white via-white/60 to-transparent pointer-events-none" />

      {/* Right Light Fade */}
      <div className="absolute top-0 right-0 w-[60px] h-full z-10 bg-gradient-to-l from-white via-white/60 to-transparent pointer-events-none" />

      {/* Animated Marquee */}
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        variants={marqueeVariants}
        animate="animate"
      >
        {[...BannerData, ...BannerData].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-[20px] min-w-fit"
          >
            <motion.img
              src={item.image}
              alt=""
              className="w-[30px] sm:w-[40px] h-[30px] sm:h-[40px]"
              animate={{
                rotate: 360,
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "linear",
              }}
            />
            <p className="literata-italic text-[14px] sm:text-[18px] font-semibold text-nowrap dark:text-[#E0E0E0] white">
              {item.text}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Banner;
