import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaExternalLinkAlt, FaGithub, FaTools, FaLightbulb, FaRocket, FaArrowAltCircleLeft, FaArrowCircleLeft, FaArrowLeft, FaFacebook, FaLinkedin } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../../src/assets/logo.png'

const projectDetails = {
  1: {
    name: 'EventVista',
    techStack: 'React, Tailwind CSS, Firebase, Express, MongoDB',
    description: 'A local event discovery and management platform where users can browse, book, filter upcoming events, and review them seamlessly. Includes filtering, upcoming event view, and booking management.',
    liveLink: 'https://event-vista-431a6.web.app/',
    githubLink: 'https://github.com/mohammadsanvi/eventvista-client',
    challenges: 'Implementing secure authentication, managing complex booking logic, and building dynamic filtering for events.',
    improvements: 'Add user messaging, real-time notifications, and an admin analytics dashboard.',
    image: 'https://i.ibb.co/qFpLqVDH/Screenshot-18.png', // Ensure the image is large/responsive in your frontend
  },
  2: {
    name: 'RoomSynest',
    techStack: 'React, Node.js, MongoDB, Tailwind CSS',
    description: 'A roommate finder app where users can add, delete, and view details of listings. Includes dashboard for managing posts with search filters based on preferences and location.',
    liveLink: 'https://roomsy-nest.web.app',
    githubLink: 'https://github.com/mohammadsanvi/roomsy-nest-client-site',
    challenges: 'Building advanced ensuring real-time data sync for roommate listings.',
    improvements: 'Integrate maps, add chat between users, enhance verification process, and improve dashboard analytics.',
    image: 'https://i.ibb.co/Gft5yYhw/Screenshot-19.png',
  },
  3: {
    name: 'WanderNest',
    techStack: 'React, Express, MongoDB, Tailwind CSS',
    description: 'A tour package booking website where users can add, view details, and remove tour packages. Features include package management, guide info, and secure booking system.',
    liveLink: 'https://wandernest-63f5d.web.app',
    githubLink: 'https://github.com/mohammadsanvi/wander-nest-client',
    challenges: 'Handling dynamic tour data, file uploads for guide/package photos securely, and role-based admin controls.',
    improvements: 'Add multi-step booking form, payment integration, customer feedback system.',
    image: 'https://i.ibb.co/hRXrDnMG/Screenshot-17.png',
  }
};

const ProjectDetail = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const { id } = useParams();
  const project = projectDetails[id];

  if (!project) {
    return (
      <div className="max-w-7xl mx-auto py-16 text-center">
        <h2 className="text-3xl font-bold">Project Not Found</h2>
        <Link to="/projects" className="text-primary underline mt-4 block">
          Go Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 text-gray-900">

      <div className="fixed top-0 left-0 w-full bg-gray-100 shadow-md flex items-center justify-between p-2 z-40 md:hidden">
        <div className="flex items-center gap-2">
          <Link to='/'><img src={logo} alt="Logo" className="w-48 h-10" /></Link>
        </div>
      </div>
      <div className="mb-8" data-aos="flip-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-primary font-raleway text-center mb-4">{project.name}</h2>
        <img
          src={project.image}
          alt={project.name}
          className="w-full max-w-3xl mx-auto object-cover rounded-lg shadow-md border border-gray-300 border-b-4 border-b-primary"
        />
      </div>

      <div className="space-y-6">
        <div data-aos="fade-right" className="bg-gray-100 rounded-lg p-5 shadow-sm">
          <h3 className="flex items-center text-xl font-semibold mb-2 text-primary">
            <FaTools className="mr-2 font-raleway" /> Technology Stack
          </h3>
          <p className="text-gray-700">{project.techStack}</p>
        </div>

        <div data-aos="fade-right" className="bg-gray-100 rounded-lg p-5 shadow-sm">
          <h3 className="flex items-center text-xl font-semibold mb-2 text-primary">
            <FaLightbulb className="mr-2 font-raleway" /> Project Description
          </h3>
          <p className="text-gray-700">{project.description}</p>
        </div>

        <div data-aos="fade-right" className="bg-gray-100 rounded-lg p-5 shadow-sm">
          <h3 className="flex items-center text-xl font-semibold mb-2 text-primary">
            <FaRocket className="mr-2 font-raleway" /> Challenges & Future Plans
          </h3>
          <p className="mb-2"><strong>Challenges:</strong> {project.challenges}</p>
          <p><strong>Future Plans:</strong> {project.improvements}</p>
        </div>

        <div data-aos="zoom-in-up" className="flex gap-4 mt-4 flex-wrap">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded shadow hover:bg-opacity-90 transition"
          >
            Live Project <FaExternalLinkAlt />
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded shadow hover:bg-opacity-90 transition"
          >
            GitHub Repo <FaGithub />
          </a>
        </div>

        <Link
          data-aos="fade-right"
          to="/#projects"
          className="mt-8 inline-flex items-center gap-1 border border-primary text-primary px-4 py-2 rounded transition-all duration-300 hover:bg-primary hover:text-white"
        >
          <FaArrowLeft className="relative transition-all duration-300 group-hover:-translate-x-1" />
          <span>Back to Projects</span>
        </Link>

      </div>

      <footer data-aos="fade-up" className="w-full bg-gray-100 py-4 flex flex-col items-center justify-center px-6 shadow-inner mt-8">
        <Link to='/'>
          <img src={logo} alt="Logo" className="hidden md:block w-48 h-14 mb-2" />
        </Link>
        <p className="text-sm text-gray-600 mb-2 text-center md:mb-0">© {new Date().getFullYear()} Mohammad Sanvi. All rights reserved.</p>

        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com/mohammadsanvi0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:bg-primary hover:text-white p-2 rounded-full transition duration-300"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="https://github.com/mohammadsanvi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:bg-primary hover:text-white p-2 rounded-full transition duration-300"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/mohammadsanvi0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:bg-primary hover:text-white p-2 rounded-full transition duration-300"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </footer>

    </section>
  );
};

export default ProjectDetail;
