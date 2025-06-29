import React, { useEffect } from 'react';
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const contacts = [
    {
      icon: <FaEnvelope className="text-primary text-3xl" />,
      label: 'Email',
      value: 'mohammadsanvi.dev@gmail.com',
      aos:"fade-right"
    },
    {
      icon: <FaPhoneAlt className="text-primary text-3xl" />,
      label: 'Phone',
      value: '+880 17 4702 1220',
      link: 'tel:+8801747021220',
      aos:"fade-left"
    },
    {
      icon: <FaWhatsapp className="text-primary text-3xl" />,
      label: 'WhatsApp',
      value: '+880 17 4702 1220',
      link: 'https://wa.me/8801747021220',
      aos:"fade-right"
    }
  ];

  const socials = [
    {
      icon: <FaFacebook className="text-blue-600 text-3xl" />,
      label: 'Facebook',
      link: 'https://facebook.com/mohammadsanvi0',
      aos:"flip-right"
    },
    {
      icon: <FaGithub className="text-gray-800 text-3xl" />,
      label: 'GitHub',
      link: 'https://github.com/mohammadsanvi',
      aos:"flip-left"
    },
    {
      icon: <FaLinkedin className="text-blue-700 text-3xl" />,
      label: 'LinkedIn',
      link: 'https://linkedin.com/in/mohammadsanvi0',
      aos:"flip-up"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 text-gray-900">
      <div data-aos="fade-right" className='mb-10 max-w-3xl'>
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-left font-raleway text-primary">Contact Me</h2>
        <p className='text-md md:text-xl text-gray-900'>Feel free to reach out — I'm always open to new ideas and collaborations.</p>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
        {contacts.map((contact, index) => (
          <div
            key={index}
            data-aos={contact.aos}
            className="flex items-center bg-gray-100 rounded-lg p-5 shadow-sm transform transition-all duration-300 hover:scale-105 hover:shadow-md"
          >
            <div className="mr-4">{contact.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">{contact.label}</h3>
              <a
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline break-all"
              >
                {contact.value}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Social Links */}
      <h3 data-aos="fade-right" className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700">Find Me on</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {socials.map((social, index) => (
          <div
            key={index}
            data-aos={social.aos}
            className="flex items-center  bg-gray-100 rounded-lg p-5 shadow-sm transform transition-all duration-300 hover:scale-105 hover:shadow-md"
          >
            <div className="mr-4">{social.icon}</div>
            <div>
              <h4 className="text-lg font-medium text-gray-700">{social.label}</h4>
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-1 px-4 py-1 rounded border border-primary text-primary transition-all duration-300 hover:bg-primary hover:text-white"
              >
                Visit {social.label}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
