import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { FaCode, FaLightbulb, FaPaintBrush, FaRunning } from "react-icons/fa";

const Aboutme = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const cards = [
    {
      id: 1,
      icon: <FaCode size={40} className="text-primary mb-4" />,
      title: "Programming Journey",
      description:
        "Started with curiosity and passion, now skilled in full-stack web development focused on frontend experiences.",
        aos:'fade-right'
    },
    {
      id: 2,
      icon: <FaLightbulb size={40} className="text-primary mb-4" />,
      title: "What I Enjoy",
      description:
        "Crafting scalable, maintainable, and visually appealing web apps. Bringing ideas to life on the web is my passion.",
        aos:'flip-left'
    },
    {
      id: 3,
      icon: <FaPaintBrush size={40} className="text-primary mb-4" />,
      title: "Hobbies & Interests",
      description:
        "An avid sports enthusiast and passionate about painting, hobbies that inspire creativity and balance in life.",
        aos:'flip-right'
    },
    {
      id: 4,
      icon: <FaRunning size={40} className="text-primary mb-4" />,
      title: "Personality",
      description:
        "A dedicated learner and team player focused on continuous growth and creating impactful digital products.",
        aos:'fade-left'
    },
  ];

  return (
    <section
      id="whoiam"
      className="mx-auto px-6 max-w-7xl py-12 md:py-24"
    >
      {/* Heading + subtitle */}
      <div  data-aos="fade-right" className="mb-12 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-left font-raleway text-primary">Who I Am</h2>
        <p className="text-md md:text-xl text-gray-900">
          I am Mohammad Sanvi — A passionate developer committed to learning and building meaningful digital experiences.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {cards.map(({ id, icon, title, description,aos }) => (
          <motion.div
            key={id}
            data-aos={aos}
            className="bg-white rounded-lg p-6  border-r-4 shadow-xl border-r-primary cursor-pointer min-h-[280px]"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 30px rgba(79, 70, 229, 0.4)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20, duration: 0.50 }}
          >
            <div className="flex flex-col items-center text-center">
              {icon}
              <h3 className="text-lg md:text-xl font-raleway text-black font-semibold mb-3">{title}</h3>
              <p className="text-gray-900 dark:text-gray-600 text-sm md:text-base">{description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Aboutme;
