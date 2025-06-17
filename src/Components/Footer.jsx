import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { resources } from "../assets/assets";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
    // dark:bg-[#1A1A2E]
  // dark:text-[#FF6B4D] red
  // dark:text-[#E0E0E0] white
const Footer = () => {
  return (
    <motion.div
      className="m-[15px] sm:m-[20px] flex flex-col justify-center items-center gap-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
    >
      {/* Upper Section */}
      <motion.div
        className="bg-[#ffffff] border dark:bg-[#1A1A2E] border-[#d9d9d9] rounded-[20px] flex justify-between items-center px-[20px] py-[30px] flex-col lg:flex-row gap-6 w-full"
        variants={fadeIn}
      >
        <div className="flex flex-col justify-start items-start gap-4 w-full lg:w-[40%]">
          <h1 className="literata-italic font-semibold text-[32px] dark:text-[#E0E0E0]">
            🌟 Let’s Stay Connected!
          </h1>
          <p className="manrope-italic text-[18px] dark:text-[#E0E0E0]">
            Follow me on social media for design inspiration, behind-the-scenes
            updates, and the latest projects. Let’s create and grow together!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-[34px] py-[11px] rounded-[30px] manrope text-[18px] text-white bg-[#FF472F] hover:bg-[#e93e26] dark:bg-[#FF6B4D]  transition duration-300"
          >
            Connect
          </motion.button>
        </div>

        <div className="grid grid-cols-2 gap-3 w-full lg:w-auto">
          {[
            { icon: <FaLinkedin />, label: "Linkedin",link: "https://www.linkedin.com/in/shaikdavood/" },
            { icon: <VscGithub />, label: "Github",link:"https://github.com/shaikdavoodbasha" },
            { icon: <PiInstagramLogoFill />, label: "Instagram",link: "https://www.linkedin.com/in/shaikdavood/" },
            { icon: <FaSquareXTwitter />, label: "Twitter",link:"https://github.com/shaikdavoodbasha" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col justify-start items-start px-[25px] dark:bg-[#1A1A2E] bg-[#ffffff] border border-[#d9d9d9] gap-5 rounded-[10px] py-[20px] hover:shadow-md transition duration-300 cursor-pointer"
              whileHover={{ scale: 1.03 }}
            >
              <motion.div
                className="text-[30px] text-[#FF472F] dark:text-[#FF6B4D]"
                whileHover={{ y: -5 }}
              >
                {item.icon}
              </motion.div>
              <div className="flex justify-between items-center gap-7">
                <p className="text-[23px] manrope-italic hover:text-[#FF472F] dark:hover:text-[#FF6B4D] n-200 dark:text-[#E0E0E0]">
                  {item.label}
                </p>
                <motion.div
                  className="text-[30px]"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <a href={item.link}  target="__blank" className="dark:text-[#E0E0E0]"> <HiOutlineArrowNarrowRight /></a>
                 
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bottom Section */}
      <motion.div
        className="bg-[#ffffff] border dark:bg-[#1A1A2E] border-[#d9d9d9] rounded-[20px] w-full flex justify-between items-center px-[20px] py-[20px]  gap-6"
        variants={fadeIn}
      >
        <div className="flex items-center gap-3">
          <img src={resources.logo} alt="Logo" />
          <div className="flex flex-col ">
            <h1 className="literata-italic text-[14px]  sm:text-[20px] dark:text-[#E0E0E0]">Shaik Davood</h1>
            <h2 className="manrope-italic text-[12px] sm:text-[18px] dark:text-[#E0E0E0]">Frontend Developer</h2>
          </div>
        </div>

        <div className="flex flex-col gap-2 text-center lg:text-right">
          <h1 className="literata-italic text-[12px]  sm:text-[20px] hover:text-[#FF472F] dark:hover:text-[#FF6B4D] transition duration-300 dark:text-[#E0E0E0]">
            shaik.davoodbasha2@gmail.com
          </h1>
          <p className="manrope-italic  text-[12px] sm:text-[18px] dark:text-[#E0E0E0]">
            © 2025 Portfolio, All Rights Reserved.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
