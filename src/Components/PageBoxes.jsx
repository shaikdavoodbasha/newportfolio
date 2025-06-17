import React from "react";
import { IoHome } from "react-icons/io5";
import { BsPersonVcardFill } from "react-icons/bs";
import { HiOutlineColorSwatch, HiMail } from "react-icons/hi";
import { Link } from "react-router-dom";

const PageBoxes = () => {
  const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[374px] z-50">
      <div className="bg-[#f0f0f0] border border-[#d9d9d9] rounded-[10px] px-[20px] py-[10px] flex justify-between items-center shadow-md cursor-pointer">
        
        {/* Home */}
        <Link to={'/'} onClick={scrollToTop} className="group bg-white border border-[#d9d9d9] rounded-[10px] p-[10px] flex flex-col items-center gap-1 transition-all duration-300 hover:text-[#FF472F] hover:scale-[1.2]">
          <IoHome size={20} className="transition-transform duration-300 group-hover:scale-125" />
          <p className="manrope text-[12px]">Home</p>
        </Link>

        {/* About */}
        <Link to={'/about'} onClick={scrollToTop} className="group bg-white border border-[#d9d9d9] rounded-[10px] p-[10px] flex flex-col items-center gap-1 transition-all duration-300 hover:text-[#FF472F] hover:scale-[1.2]">
          <BsPersonVcardFill size={20} className="transition-transform duration-300 group-hover:scale-125" />
          <p className="manrope text-[12px]">About</p>
        </Link>

        {/* Projects */}
        <Link to={'/projects'} onClick={scrollToTop} className="group bg-white border border-[#d9d9d9] rounded-[10px] p-[10px] flex flex-col items-center gap-1 transition-all duration-300 hover:text-[#FF472F] hover:scale-[1.2]">
          <HiOutlineColorSwatch size={20} className="transition-transform duration-300 group-hover:scale-125" />
          <p className="manrope text-[12px]">Projects</p>
        </Link>

        {/* Contact */}
        <Link to={'/contact'} onClick={scrollToTop} className="group bg-white border border-[#d9d9d9] rounded-[10px] p-[10px] flex flex-col items-center gap-1 transition-all duration-300 hover:text-[#FF472F] hover:scale-[1.2]">
          <HiMail size={20} className="transition-transform duration-300 group-hover:scale-125" />
          <p className="manrope text-[12px]">Contact</p>
        </Link>
      </div>
    </div>
  );
};

export default PageBoxes;
