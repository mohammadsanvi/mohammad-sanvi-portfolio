import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
  FaNpm,
} from 'react-icons/fa';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
  { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
  { name: 'JavaScript', icon: <FaJsSquare />, color: '#F7DF1E' },
  { name: 'React', icon: <FaReact />, color: '#61DAFB' },
  { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
  { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
  { name: 'MongoDB', icon: <FaDatabase />, color: '#47A248' },
  { name: 'NPM', icon: <FaNpm />, color: '#CB3837' },
];

const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    scale: [1, 1.1, 1],
  },
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      className="mx-auto max-w-7xl px-6 py-12 md:py-24"
      
    >
     <div  data-aos="fade-right" className='mb-10 max-w-3xl'>
         <h2 className="md:text-4xl text-3xl font-bold text-primary font-raleway mb-2 text-left">
        My Skills
      </h2>

      <p className="text-gray-900 text-left text-md md:text-lg">
        I am passionate about developing clean, efficient, and scalable web applications using modern technologies. Here are some of the skills and tools I frequently work with:
      </p>
     </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 justify-items-center">
        {skills.map(({ name, icon, color }) => (
          <motion.div
          data-aos="fade-up"
            key={name}
            className="flex flex-col items-center space-y-2 md:space-y-4 text-xl cursor-default"
            {...floatAnimation}
          >
            <motion.div
              className="md:text-8xl text-3xl"
              style={{ color }}
              whileHover={{ scale: 1.3, color: '#4F46E5' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {icon}
            </motion.div>
            <p className="text-xl font-raleway font-semibold text-gray-900">{name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
