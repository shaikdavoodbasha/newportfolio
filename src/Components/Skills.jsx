import React from "react";
import { resources, skillsData } from "../assets/assets";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};
   // dark:bg-[#1A1A2E]
  // dark:text-[#FF6B4D] red
  // dark:text-[#E0E0E0] white
const Skills = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="m-[8px] sm:m-[20px] flex flex-col-reverse sm:flex-row justify-between items-center gap-6 sm:gap-3"
    >
      {/* Left Grid Section */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full sm:w-auto"
        variants={fadeInUp}
        custom={0}
      >
        {skillsData.map((item, index) => (
          <motion.div
            key={index}
            className="bg-[#ffffff] border dark:bg-[#1A1A2E] border-[#d9d9d9] rounded-[20px] flex flex-col justify-between items-start gap-3 px-[20px] py-[16px] sm:px-[50px] sm:py-[50px] hover:shadow-lg transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <motion.img
              src={item.image}
              alt=""
              className="w-[40px] sm:w-[50px]"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1, ease: "linear" }}
            />
            <div className="flex flex-col gap-2">
              <h1 className="literata-italic text-[18px] font-medium dark:text-[#E0E0E0]">{item.text}</h1>
              <p className="manrope text-[16px] text-[#3F3E3A] dark:text-[#E0E0E0]">{item.heading}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Right Side Section */}
      <motion.div
        className="w-full sm:w-auto bg-[#ffffff] dark:bg-[#1A1A2E] border border-[#d9d9d9] rounded-[20px] flex flex-col justify-between items-center sm:items-start px-[20px] pt-[6px]"
        variants={fadeInUp}
        custom={1}
      >
        <h1 className="literata-italic font-semibold text-[28px] sm:text-[32px] text-center sm:text-left dark:text-[#E0E0E0]">
          💼 Skills in <span className="text-[#FF472F] dark:text-[#FF6B4D]">Action</span>
        </h1>
        <p className="manrope text-[16px] sm:text-[18px] sm:w-[348px] text-center sm:text-left text-[#3F3E3A] dark:text-[#E0E0E0]">
          My skill set is a fusion of design aesthetics and robust coding practices, enabling me to build responsive and engaging interfaces.
        </p>
        <motion.img
          src={resources.skillsimg}
          alt="Skills"
          className="w-[80%] sm:w-full max-w-[350px]"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Skills;
