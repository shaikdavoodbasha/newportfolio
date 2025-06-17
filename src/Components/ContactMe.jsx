import React from "react";
import { resources } from "../assets/assets";
import { motion } from "framer-motion";

// Animation Variants
const letterAnimation = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

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
const ContactMe = () => {
  const heading = "Contact";
  return (
    <div className="m-[8px] sm:m-[20px]">
      {/* Animated Heading */}
      <motion.h1
        className="text-[48px] sm:text-[148px] text-[#FF472F] dark:text-[#FF6B4D] literata-italic font-bold flex flex-wrap"
        initial="hidden"
        animate="visible"
      >
        {heading.split("").map((char, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={letterAnimation}
            className={char === "M" ? "text-black" : ""}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
        {/* Left Side */}
        <motion.div
          className="flex flex-col justify-start items-start gap-3 w-full"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left One */}
          <div className="bg-[#ffffff] dark:bg-[#1A1A2E] border border-[#d9d9d9] rounded-[20px] p-[12px] sm:px-[25px] sm:py-[32px] flex flex-col justify-start items-start gap-4">
            <img  src={resources.aboutlogo} alt="ContactImage" />
            <h1 className="literata-italic text-[20px] sm:text-[32px] font-semibold dark:text-[#E0E0E0]">
              📇 Contact Me –{" "}
              <span className="text-[#FF472F] dark:text-[#FF6B4D]">Let’s Build Something Amazing!</span>
            </h1>
            <p className="manrope-italic text-[12px] sm:text-[18px] dark:text-[#E0E0E0]">
              "Have a project in mind or just want to say hello? I’d love to
              hear from you! Drop me a message below, and I’ll get back to you
              ASAP. Let’s create something awesome together!"
            </p>
          </div>

          {/* Left Two */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-3 ">
            <div className="dark:bg-[#e03535] bg-[#ffffff] border border-[#d9d9d9] rounded-[20px] p-[10px] sm:px-[50px] sm:py-[75px]">
              <img className="w-[800px] " src={resources.contactimg} alt="" />
            </div>
            <div className="flex flex-col justify-start items-start gap-4 px-[40px] py-[20px] bg-[#ffffff] dark:bg-[#1A1A2E] border border-[#d9d9d9] rounded-[20px]">
              <h1 className="literata-italic text-[14px] sm:text-[24px] font-semibold dark:text-[#E0E0E0]">
                ⏳ "Schedule a quick call with me!"
              </h1>
              <p className="manrope-italic text-[12px] sm:text-[18px]  dark:text-[#E0E0E0]">
                "Let’s skip the back-and-forth emails! Book a slot directly in
                my calendar for a chat—whether it’s about a project, or just
                geeking out over frontend tech."
              </p>
              <button className="w-full bg-[#FF472F] dark:bg-[#FF6B4D] rounded-[12px] py-[10px] text-[18px] manrope text-white hover:bg-[#e93e26] transition duration-300">
                Arrange Meeting
              </button>
            </div>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="w-full flex flex-col justify-start items-start gap-5 dark:bg-[#1A1A2E] bg-[#ffffff] border border-[#d9d9d9] rounded-[20px] px-[20px] py-[15px]"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h1 className="literata-italic text-[20px] sm:text-[32px] font-semibold dark:text-[#E0E0E0]">
            🤝 Get in <span className="text-[#FF472F] dark:text-[#FF6B4D]">Touch</span>
          </h1>
          <p className="manrope-italic text-[13px] sm:text-[18px] dark:text-[#E0E0E0]">
            Have a project, idea, or just want to say hello? Let’s connect and
            create something incredible together.
          </p>
          <input
            className="w-full outline-none border border-[#d9d9d9] rounded-[8px] manrope h-[52px] px-[12px]"
            type="text"
            placeholder="Your Name."
          />
          <input
            className="w-full outline-none border border-[#d9d9d9] rounded-[8px] manrope h-[53px] px-[12px]"
            type="text"
            placeholder="Your Mail."
          />
          <textarea
            className="w-full outline-none border border-[#d9d9d9] rounded-[8px] manrope px-[12px] py-[12px] h-[230px]"
            placeholder="Message.."
          ></textarea>
          <div className="text-[#FF472F] dark:text-[#FF6B4D] flex justify-center items-center gap-3">
            <input type="checkbox" />
            <p className="dark:text-[#E0E0E0]">Subscribe to NewsLetter</p>
          </div>
          <button className="w-full bg-[#FF472F] dark:bg-[#FF6B4D] rounded-[10px] text-[18px] manrope dark:text-[#E0E0E0] text-white py-[14px] hover:bg-[#e93e26] transition duration-300">
            Send Message
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactMe;
