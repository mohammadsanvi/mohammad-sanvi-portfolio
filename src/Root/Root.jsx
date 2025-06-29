import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaHome, FaUser, FaBriefcase, FaEnvelope,
  FaFacebook, FaGithub, FaLinkedin
} from 'react-icons/fa';
import { GoProjectRoadmap } from 'react-icons/go';
import Home from '../Pages/Home';
import AboutMe from '../Pages/Aboutme';
import Skills from '../Pages/Skills';
import Projects from '../Pages/Projects';
import Contact from '../Pages/Contact';
import Footer from '../Pages/Footer';
import logo from '../../src/assets/logo.png';

const sections = ["home", "about", "skills", "projects", "contact"];

const Root = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 768);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = id;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-screen flex bg-white">
      {/* Mobile Navbar */}
      <div className="fixed top-0 left-0 w-full bg-gray-100 shadow-md flex items-center justify-between p-2 z-40 md:hidden">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-48 h-10" />
          <span className="font-semibold text-sm">Sanvi</span>
        </div>
        <button onClick={toggleSidebar} className="flex flex-col justify-center items-center w-8 h-8 bg-primary rounded">
          <span className={`block w-5 h-0.5 mb-1 bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
          <span className={`block w-5 h-0.5 mb-1 bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-5 h-0.5 bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
        </button>
      </div>

      {/* Sidebar */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? '0%' : '-100%' }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 w-64 md:w-72 h-screen bg-gray-100 text-gray-900 shadow-2xl z-50 p-4 overflow-y-auto"
      >
        <div className="text-center mb-6">
          <img src={logo} alt="Logo" className="w-48 h-10" />
          <img
            src="https://i.ibb.co/35JjJzcW/profile.jpg"
            alt="Profile"
            className="w-24 h-24 mx-auto rounded-full my-4 border-4 border-gray-600"
          />
          <h2 className="text-2xl font-raleway font-semibold">Mohammad Sanvi</h2>
          <p className="text-xs text-gray-500">Junior MERN Stack Developer<span className='text-primary font-bold'> (Frontend Focused)</span></p>
          <div className="flex justify-center space-x-3 mt-4">
            <a href="https://www.facebook.com/mohammadsanvi0" target="_blank" rel="noopener noreferrer" className="bg-gray-200 text-gray-700 hover:bg-primary hover:text-white rounded-full p-3 transition-transform hover:scale-105">
              <FaFacebook size={20} />
            </a>
            <a href="https://linkedin.com/mohammadsanvi0" target="_blank" rel="noopener noreferrer" className="bg-gray-200 text-gray-700 hover:bg-primary hover:text-white rounded-full p-3 transition-transform hover:scale-105">
              <FaLinkedin size={20} />
            </a>
            <a href="https://github.com/mohammadsanvi" target="_blank" rel="noopener noreferrer" className="bg-gray-200 text-gray-700 hover:bg-primary hover:text-white rounded-full p-3 transition-transform hover:scale-105">
              <FaGithub size={20} />
            </a>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          {sections.map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              className={`flex items-center text-lg hover:text-primary ${activeSection === sec ? "text-primary" : ""}`}
            >
              {sec === "home" && <><FaHome className="mr-3" /> Home</>}
              {sec === "about" && <><FaUser className="mr-3" /> About</>}
              {sec === "skills" && <><FaBriefcase className="mr-3" /> Skills</>}
              {sec === "projects" && <><GoProjectRoadmap className="mr-3" /> Projects</>}
              {sec === "contact" && <><FaEnvelope className="mr-3" /> Contact</>}
            </a>
          ))}
        </div>

        <Footer />
      </motion.div>

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${isOpen && window.innerWidth >= 768 ? 'ml-72' : ''}`}>
        <section id="home" className="h-screen"><Home /></section>
        <section id="about"><AboutMe /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </div>
    </div>
  );
};

export default Root;
