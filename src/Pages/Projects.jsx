import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
    {
        id: 1,
        name: 'EventVista',
        image: 'https://i.ibb.co/qFpLqVDH/Screenshot-18.png',
        shortTitle: 'Event Management App',
        description: 'Discover, filter, and book local events easily.',
        aos:'fade-right'
    },
    {
        id: 2,
        name: 'RoomsyNest',
        image: 'https://i.ibb.co/pSZXpst/Screenshot-15.png',
        shortTitle: 'Roommate Finder',
        description: 'Find and manage compatible roommates in your area.',
        aos:'flip-up'
    },
    {
        id: 3,
        name: 'WanderNest',
        image: 'https://i.ibb.co/hRXrDnMG/Screenshot-17.png',
        shortTitle: 'Tour Package App',
        description: 'Explore and book exciting tour packages effortlessly.',
        aos:'fade-left'
    },
];

const Projects = () => {
    return (
        <section className="mx-auto max-w-7xl px-6 py-16 text-gray-900">
            <div  data-aos="fade-right" className='mb-10 max-w-3xl'>
                <h2 className="text-3xl md:text-4xl font-bold mb-2 text-left font-raleway text-primary">Projects</h2>
                <p className="text-md md:text-xl text-gray-900">
                    Each of these projects reflects my dedication to building meaningful, scalable, and user-friendly digital solutions.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div
                        data-aos={project.aos}
                        key={project.id}
                        className="bg-white rounded-lg  border-r-4 border-r-primary shadow-xl transform transition duration-800 hover:scale-104 hover:shadow-2xl"
                    >
                        <img
                            src={project.image}
                            alt={project.name}
                            className="rounded-t-lg w-full mt-2 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-releway mb-2">{project.name}</h3>
                            <p className="text-primary font-raleway mb-1">{project.shortTitle}</p>
                            <p className="text-gray-700 mb-3">{project.description}</p>
                            <Link
                                to={`/projects/${project.id}`}
                                className="inline-block border-2 border-primary text-primary px-4 py-2 rounded transition duration-300 hover:bg-primary hover:text-white"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
