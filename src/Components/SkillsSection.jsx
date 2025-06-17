import React from "react";
import { resources, smallProjectData } from "../assets/assets";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

const SkillsSection = () => {
    // dark:bg-[#1A1A2E]
  // dark:text-[#FF6B4D] red
  // dark:text-[#E0E0E0] white
  return (
    <motion.div
      className="sm:m-[20px] m-[8px] flex md:flex-row flex-col md:justify-between justify-center items-center gap-3 transition-all duration-500"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* ONE SECTION - LEFT BOX */}
      <motion.div
        className="one w-full sm:w-auto border border-[#d9d9d9] rounded-[20px] bg-[#ffffff] dark:bg-[#1A1A2E] px-[10px] py-[12px] sm:px-[20px] sm:pt-[24px] flex flex-col justify-start items-start gap-3"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="literata-italic text-[28px] sm:text-[32px] font-semibold dark:text-[#E0E0E0] white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          📂 <motion.span whileHover={{ scale: 1.1, color: "#FF472F" }}>My Creative</motion.span>{" "}
          <span className="text-[#FF472F] dark:text-[#FF6B4D] red">Showcase</span>
        </motion.h1>

        <motion.p
          className="manrope text-[10px] sm:text-[16px] w-auto sm:w-[420px] text-center sm:text-left dark:text-[#E0E0E0] white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Welcome to the heart of my portfolio, where creativity meets code.
          Each project showcased here is a testament to my journey as a
          front-end developer, blending intuitive design with seamless
          functionality.
        </motion.p>

        <motion.img
          className="ml-[50px]"
          src={resources.porojectsimg}
          alt=""
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
      </motion.div>

      {/* TWO SECTION - RIGHT PROJECTS LIST */}
      <motion.div
        className="two w-full flex flex-col justify-between items-center gap-2 cursor-pointer"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        {smallProjectData.map((project, index) => (
          <motion.div
            key={index}
            className="w-full flex justify-between items-center bg-[#ffffff] dark:bg-[#1A1A2E] border border-[#d9d9d9] rounded-[20px] px-[20px] py-[16px]"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-4">
              <motion.img
                src={project.projectImg}
                alt=""
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              />
              <div className="flex flex-col gap-1">
                <p className="literata-italic text-[14px] sm:text-[24px] font-medium dark:text-[#E0E0E0]">
                  {project.projectTitle}
                </p>
                <p className="manrope text-[14px] sm:text-[12px] font-medium dark:text-[#E0E0E0]">
                  {project.projectDescription}
                </p>
              </div>
            </div>

            {/* ARROW WITH HOVER ANIMATION */}
            <motion.div
              className="arrow relative group px-[12px] py-[12px] bg-[#f0f0f0] dark:bg-[#1A1A2E] border border-[#d9d9d9] rounded-[50px] text-[20px] sm:text-[30px]"
              whileHover={{ rotate: -50, scale: 0.7 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a className="dark:text-[#E0E0E0]" href={project.projectLinks} target="__blank">
                <HiOutlineArrowNarrowRight />
              </a>
              <div className="manrope absolute top-full left-1/2 transform -translate-x-1/2 mt-1 text-[12px] bg-gray-100 px-[15px] py-[8px] rounded shadow-md hidden group-hover:block transition-all duration-500 whitespace-nowrap">
                <p>Open Project</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SkillsSection;
