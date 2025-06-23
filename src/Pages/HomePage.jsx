import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import SkillsSection from "../Components/SkillsSection";
import Banner from "../Components/Banner";
import Skills from "../Components/Skills";
import ShowImages from "../Components/ShowImages";
import DummySkills from "../Components/DummySkills";
import ContactMe from "../Components/ContactMe";
import Chatbot from "../Components/Chatbot";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Chatbot/>
      <SkillsSection />
      <Banner />
      <Skills />
      <ShowImages />
      <DummySkills />
      <ContactMe />
    </div>
  );
};

export default HomePage;
