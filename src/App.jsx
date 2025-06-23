import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import PageBoxes from "./Components/PageBoxes";
import SkillsSection from "./Components/SkillsSection";
import Banner from "./Components/Banner";
import Skills from "./Components/Skills";
import ShowImages from "./Components/ShowImages";
import DummySkills from "./Components/DummySkills";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import ScheduleMeeting from "./Components/ScheduleMeeting";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <div>
     <ToastContainer position="top-right" autoClose={3000} />
      <PageBoxes />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
         <Route path="/schedule" element={<ScheduleMeeting />} />
      </Routes>
      <Footer/>   
    </div>
  );
};

export default App;
