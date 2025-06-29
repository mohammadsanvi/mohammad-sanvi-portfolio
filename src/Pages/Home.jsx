import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaFacebook, FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = () => {
    return (
        <div className="relative w-full max-w-7xl h-screen mx-auto overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg?_gl=1*u4kiwb*_ga*MTcyMjQyMzYwNy4xNzQ5OTcxMzQy*_ga_8JE65Q40S6*czE3NTExODgwMTkkbzckZzEkdDE3NTExOTA1NDgkajUxJGwwJGgw')",
                }}
            >
            </div>

            {/* overlay */}
            <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>

            {/* Content Section */}
            <div className="relative z-10 flex flex-col items-start justify-center h-full text-white px-6 md:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="space-y-6"
                >
                    <h1 className="text-4xl md:text-6xl font-raleway text-left">
                        I am a{' '}
                        <span className="text-primary ">
                            <Typewriter
                                words={['Developer', 'Freelancer', 'Full Stack Developer']}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 text-left max-w-2xl">
                        A frontend-focused developer creating seamless and engaging digital experiences.
                    </p>


                    {/* Resume Button */}
                    <div className="mt-6">
                        <a
                            href="/resume.pdf"
                            download
                            className="inline-flex items-center gap-3 px-6 py-2 text-lg font-semibold rounded-full shadow-lg border border-primary text-primary hover:bg-primary hover:text-white transition duration-300"
                        >
                            <span>Download Resume</span>
                            <FaDownload
                                size={22}
                                className="animate-bounce"
                            />
                        </a>
                    </div>

                </motion.div>

                {/* Social Links */}
                <div className="flex justify-start space-x-5 mt-8">
                    <a
                        href="https://facebook.com/mohammadsanvi0"
                        className="bg-white rounded-full p-4 text-blue-600 transition transform hover:bg-primary hover:text-white hover:scale-110"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFacebook size={30} />
                    </a>
                    <a
                        href="https://linkedin.com/mohammadsanvi0"
                        className="bg-white rounded-full p-4 text-blue-700 transition transform hover:bg-primary hover:text-white hover:scale-110"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin size={30} />
                    </a>
                    <a
                        href="https://github.com/mohammadsanvi"
                        className="bg-white rounded-full p-4 text-black transition transform hover:bg-primary hover:text-white hover:scale-110"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub size={30} />
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Home;
