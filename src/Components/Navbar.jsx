import React, { useContext, useEffect, useState } from "react";
import { resources } from "../assets/assets";
import { CgDarkMode } from "react-icons/cg";
import { motion } from "framer-motion"; // ✅ Import
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const date = new Date();
  const formattedDate = date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const time = date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  });

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }} // Starts above the screen
      animate={{ y: 0, opacity: 1 }} // Slides down and fades in
      transition={{ duration: 0.8, ease: "easeOut" }}
      className='flex justify-between items-center px-[14px] py-[7px] sm:px-[36px] sm:py-[12px] border transition-all duration-500 border-[#D9D9D9] rounded-[20px] m-[15px] sm:m-[20px] bg-[#ffffff] dark:bg-[#1A1A2E]'>
      <div className="flex justify-center items-center gap-3">
        <img className="rounded-[50px]" src={resources.logo} alt="Logo" />
        <div>
          <p
            className='literata-italic text-[14px] sm:text-[20px] font-semibold dark:text-[#E0E0E0]'
             
          >
            Shaik Davood
          </p>
          <p
            className='manrope text-[10px] sm:text-[16px] sm:mt-[-4px] dark:text-[#E0E0E0]'
              
          >
            Frontend Developer
          </p>
        </div>
      </div>

      <div
        onClick={toggleTheme}
        className="flex justify-between items-center gap-3 sm:gap-10"
      >
        <div className="relative group text-[30px] sm:text-[35px] cursor-pointer hover:text-[#FF472F] dark:text-[#E0E0E0] transition-all duration-500">
          <CgDarkMode />
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 text-[10px] dark:text-black sm:text-[12px] bg-gray-100 px-2 py-[2px] rounded shadow-md hidden group-hover:block">
            Theme
          </div>
        </div>

        <div>
          <p
            className='literata-italic text-[14px] sm:text-[20px] dark:text-[#E0E0E0]'
          >
            {formattedDate}
          </p>
          <p
            className='manrope text-[10px] sm:text-[16px] dark:text-[#E0E0E0]'
            
          >
            India {time}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
