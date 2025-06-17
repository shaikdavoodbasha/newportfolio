import React from "react";
import Navbar from "../Components/Navbar";
import { projectData, resources } from "../assets/assets";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
      // dark:bg-[#1A1A2E]
  // dark:text-[#FF6B4D] red
  // dark:text-[#E0E0E0] white
const Projects = () => {
  return (
    <>
      <Navbar />
      <motion.div
        className="m-[15px] sm:m-[20px] flex flex-col justify-center items-center gap-4"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Intro Section */}
        <motion.div
          className="flex flex-col sm:flex-row  justify-between items-center bg-[#ffffff] dark:bg-[#1A1A2E] border border-[#d9d9d9] rounded-[20px] px-[10px] sm:px-[30px] pt-[8px] sm:pt-[15px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col justify-center items-center sm:justify-start sm:items-start gap-3 w-auto sm:w-[60%]  ">
            <img src={resources.projectslogo} alt="" />
            <h1 className="literata-italic font-semibold text-center sm:text-left text-[17px] sm:text-[48px] text-[#FF472F] dark:text-[#FF6B4D] whitespace-nowrap">
              A Showcase of – Creativity and Craft
            </h1>
            <p className="manrope-italic text-[15px] sm:text-[20px] dark:text-[#E0E0E0] text-center sm:text-left">
              Explore a collection of thoughtfully designed projects, each
              crafted with care and intention. From concept to completion, these
              works reflect a journey of problem-solving, innovation, and
              artistry.
            </p>
          </div>
          <div className=" w-[300px] sm:w-auto">
            <img src={resources.projectsimg} alt="" />
          </div>
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {projectData.map((project, index) => (
            <motion.div
              variants={cardVariants}
              key={project.id}
              className="px-[28px] py-[20px] rounded-[20px] bg-[#ffffff] dark:bg-[#1A1A2E] border border-[#d9d9d9] flex flex-col justify-between items-start gap-3"
            >
              <img className="w-full" src={project.projectImg} alt="" />
              <h1 className="literata-italic font-semibold text-[20px] dark:text-[#FF6B4D]">
                {project.projectTitle}
              </h1>
              <p className="manrope text-[16px] dark:text-[#E0E0E0]">{project.projectDescription}</p>
              <p className="manrope text-[16px] text-[#F58575] dark:text-[#E0E0E0]">{project.techUsed}</p>
              <a className="w-full" href={project.projectLinks} target="__blank">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-full flex justify-center items-center gap-6 py-[15px] rounded-[10px] bg-[#FF472F] dark:bg-[#FF6B4D] hover:shadow-lg"
                >
                  <p className="text-[18px] manrope text-white dark:text-[#E0E0E0]">Live Demo</p>
                  <motion.div
                    className="text-[30px] text-white"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <HiOutlineArrowNarrowRight />
                  </motion.div>
                </motion.div>
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Projects;
