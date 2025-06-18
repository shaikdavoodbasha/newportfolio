import React from "react";
import { dummyProjects } from "../assets/assets";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

// Animation variant
const cardVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};
   // dark:bg-[#1A1A2E]
  // dark:text-[#FF6B4D] red
  // dark:text-[#E0E0E0] white
const DummySkills = () => {
  return (
    <div className="m-[20px] sm:m-[20px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
      {dummyProjects.map((project, index) => {
        return (
          <motion.div
            className="px-[28px] py-[20px] rounded-[20px] bg-[#ffffff] dark:bg-[#1A1A2E] border border-[#d9d9d9] flex flex-col justify-between items-start gap-3"
            key={project.id}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <img src={project.projectImg} alt="" />
            <h1 className="literata-italic font-semibold text-[20px] dark:text-[#E0E0E0]">
              {project.projectTitle}
            </h1>
            <p className="manrope text-[16px] dark:text-[#E0E0E0]">{project.projectDescription}</p>
            <p className="manrope text-[16px] text-[#F58575] dark:text-[#FF6B4D]">
              {project.techUsed}
            </p>

            <a className="w-full" href={project.projectLinks} target="_blank" rel="noreferrer">
              <div className="w-full flex justify-center items-center gap-6 py-[15px] rounded-[10px] bg-[#FF472F] dark:bg-[#FF6B4D] hover:bg-[#e63c24] transition-all duration-300 cursor-pointer hover:shadow-lg">
                <p className="text-[18px] manrope text-white dark:text-[#E0E0E0]">Live Demo</p>
                <motion.div
                  className="text-[30px] text-white dark:text-[#E0E0E0]"
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <HiOutlineArrowNarrowRight />
                </motion.div>
              </div>
            </a>
          </motion.div>
        );
      })}
    </div>
  );
};

export default DummySkills;
