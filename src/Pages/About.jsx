import React from "react";
import Navbar from "../Components/Navbar";
import { resources } from "../assets/assets";
import { motion } from "framer-motion";

const About = () => {
      // dark:bg-[#1A1A2E]
  // dark:text-[#FF6B4D] red
  // dark:text-[#E0E0E0] white
  return (
    <>
      <Navbar />
      <motion.div
        className="m-[15px] sm:m-[20px] bg-[#ffffff] border dark:bg-[#1A1A2E] border-[#d9d9d9] rounded-[20px] flex flex-col overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-[-20px]">
          {/* Left Content */}
          <motion.div
            className="flex flex-col justify-center items-center sm:justify-start sm:items-start gap-3 sm:gap-5 p-[30px] w-[100%] sm:w-[60%]"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-[18px] sm:text-[64px] literata-italic font-semibold text-[#FF472F] dark:text-[#FF6B4D] whitespace-normal sm:whitespace-nowrap">
              🧠 About Me
            </h1>
            <h2 className="literata-italic font-medium text-[18px] sm:text-[32px] dark:text-[#E0E0E0] whitespace-nowrap">
              Who I Am & What I Bring to the Table
            </h2>
            <p className="manrope-italic text-[12px] sm:text-[18px] dark:text-[#E0E0E0] w-full text-center sm:text-left">
              Hey there! 👋 I'm Shaik.Davood, a passionate Frontend
              Developer who loves turning ideas into interactive, pixel-perfect
              web experiences. With a strong foundation in JavaScript (ES6+),
              React.js, and Next.js, I build fast, scalable, and visually
              stunning applications that users love. I thrive on bringing designs
              to life with smooth animations using GSAP & Framer Motion, and I
              even dabble in 3D web magic with React Three Fiber. When I'm not
              optimizing UI performance, I enjoy working with Tailwind CSS & Shadcn UI to create sleek, responsive interfaces.
            </p>
            <motion.a
              href="/shaik_Davood_Resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-[#FF472F] dark:bg-[#FF6B4D] rounded-[30px] px-[18px] py-[6px] sm:px-[35px] sm:py-[12px] manrope sm:text-[18px] text-[12px] text-white dark:text-[#E0E0E0]"
            >
              Download My Resume
            </motion.a>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img src={resources.abouthero} alt="About Hero" />
          </motion.div>
        </div>

        {/* Bottom Banner Image */}
        <motion.img
          src={resources.aboutbig}
          alt="About Banner"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </motion.div>
    </>
  );
};

export default About;
