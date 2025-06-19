import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaStar, 
  FaRegClock, 
  FaVideo, 
  FaCode, 
  FaPalette,
  FaDesktop, 
  FaServer,
  FaMicrophoneAlt as FaAudio,
  FaExternalLinkAlt
} from 'react-icons/fa';

import videoProductionImg from '../assets/video.jpg';
import audioProductionImg from '../assets/audio1.jpg';
import fullstackImg from '../assets/fulls.jpg';
import frontendImg from '../assets/frontend.jpg';
import backendImg from '../assets/backend.jpg';
import designImg from '../assets/ui.jpg';

const FORM_URLS = {
  FORM: 'https://forms.gle/MbVvVmQML2amF3bz9',

};

const ProgramsSection = () => {
  const programs = [
    {
      id: 1,
      title: "Video Production",
      description: "Learn professional filming, editing, and post-production techniques for YouTube, documentaries, and commercials.",
      duration: "3 Months",
      level: "Beginner to Pro",
      rating: 4.9,
      students: 350,
      icon: <FaVideo className="text-red-500" />,
      image: videoProductionImg,
      formUrl: FORM_URLS.FORM
    },
    {
      id: 2,
      title: "Audio Production",
      description: "Master recording, mixing, mastering and sound design using industry-standard tools and techniques.",
      duration: "3 months",
      level: "Beginner to Pro",
      rating: 4.7,
      students: 300,
      icon: <FaAudio className="text-blue-500" />,
      image: audioProductionImg,
      formUrl: FORM_URLS.FORM
    },
    {
      id: 3,
      title: "Fullstack Development",
      description: "Become job-ready with PERN and MERN stack (PostgreSQL/MongoDB, Express, React, Node.js).",
      duration: "6 Months",
      level: "Beginner to Pro",
      rating: 4.95,
      students: 210,
      icon: <FaCode className="text-green-500" />,
      image: fullstackImg,
      formUrl: FORM_URLS.FORM
    },
    {
      id: 4,
      title: "Frontend Development",
      description: "Master React, Next.js, modern JavaScript and CSS frameworks to build stunning user interfaces.",
      duration: "3 months",
      level: "Beginner to Pro",
      rating: 4.8,
      students: 175,
      icon: <FaDesktop className="text-purple-500" />,
      image: frontendImg,
      formUrl: FORM_URLS.FORM
    },
    {
      id: 5,
      title: "Backend Development",
      description: "Learn Node.js, Python, databases, APIs, authentication and deployment for robust server-side development.",
      duration: "3 months",
      level: "Beginner to Pro",
      rating: 4.85,
      students: 105,
      icon: <FaServer className="text-yellow-500" />,
      image: backendImg,
      formUrl: FORM_URLS.FORM
    },
    {
      id: 6,
      title: "UI/UX Design",
      description: "User research, wireframing, prototyping and design systems using Figma and Adobe XD.",
      duration: "2 months",
      level: "All Levels",
      rating: 4.75,
      students: 140,
      icon: <FaPalette className="text-pink-500" />,
      image: designImg,
      formUrl: FORM_URLS.FORM
    }
  ];

  const handleEnrollClick = (formUrl) => {
    window.open(formUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 bg-gray-50" id="programs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Specialized Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-relevant courses designed to launch your tech career
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    {program.icon}
                    <span className="ml-2">{program.level}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar 
                          key={i} 
                          className={`${i < Math.floor(program.rating) ? "fill-current" : "fill-gray-300"} w-4 h-4`} 
                        />
                      ))}
                    </div>
                    <span className="text-gray-600 text-sm">
                      {program.rating} ({program.students}+ students)
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4">{program.description}</p>
                </div>

                <div className="mt-auto">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center text-gray-500 text-sm">
                      <FaRegClock className="mr-2" />
                      <span>{program.duration}</span>
                    </div>

                  </div>
                  <button 
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 flex items-center justify-center cursor-pointer"
                    onClick={() => handleEnrollClick(program.formUrl)}
                  >
                    Enroll Now <FaExternalLinkAlt className="ml-2" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;