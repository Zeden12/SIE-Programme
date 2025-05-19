import React, { useState, useEffect } from 'react';
import { 
  FaGraduationCap, 
  FaLaptopCode, 
  FaUsers, 
  FaBriefcase, 
  FaFilm, 
  FaMicrophone, 
  FaServer,
  FaPalette,
  FaCode
} from 'react-icons/fa';
import audioImg from '../assets/audio.jpg';
import videoImg from '../assets/video.jpg';
import backendImg from '../assets/backend.jpg';
import frontendImg from '../assets/frontend.jpg';
import uiImg from '../assets/ui.jpg';
import fullImg from '../assets/full.jpg';
import { motion } from 'framer-motion';

const Overview = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const programmes = [
    {
      title: "Video Production",
      description: "Master professional filming, editing, and post-production for film and digital media",
      image: videoImg,
      icon: <FaFilm className="text-red-500 text-3xl" />
    },
    {
      title: "Audio Production",
      description: "Develop expertise in recording, mixing, sound design, and audio engineering",
      image: audioImg,
      icon: <FaMicrophone className="text-purple-500 text-3xl" />
    },
    {
      title: "Full-Stack Development",
      description: "Build complete web applications with both frontend and backend technologies",
      image: fullImg,
      icon: <FaServer className="text-blue-500 text-3xl" />
    },
    {
      title: "Frontend Development",
      description: "Create stunning user interfaces with modern frameworks and responsive design",
      image: frontendImg,
      icon: <FaCode className="text-green-500 text-3xl" />
    },
    {
      title: "Backend Development",
      description: "Develop robust server-side systems, APIs, and database architectures",
      image: backendImg,
      icon: <FaServer className="text-yellow-500 text-3xl" />
    },
    {
      title: "UI/UX Design",
      description: "Craft intuitive user experiences and visually compelling interfaces",
      image: uiImg,
      icon: <FaPalette className="text-pink-500 text-3xl" />
    }
  ];

  const features = [
    {
      icon: <FaGraduationCap className="text-3xl mb-4 text-blue-600" />,
      title: "Industry-Aligned Curriculum",
      description: "Courses designed with professionals from all digital disciplines"
    },
    {
      icon: <FaLaptopCode className="text-3xl mb-4 text-purple-600" />,
      title: "Hands-On Projects",
      description: "Build portfolio pieces across creative and technical fields"
    },
    {
      icon: <FaUsers className="text-3xl mb-4 text-green-600" />,
      title: "Dual Mentorship",
      description: "Guidance from both technical experts and creative professionals"
    },
    {
      icon: <FaBriefcase className="text-3xl mb-4 text-orange-600" />,
      title: "Career Bridge",
      description: "Connections to opportunities in tech, media, and design"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % programmes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SIE Digital Academy</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Where technical expertise meets creative innovation across six specialized programmes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="text-center">
                {feature.icon}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900 h-[500px]"
        >
          {programmes.map((programme, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: index === currentSlide ? 1 : 0,
                zIndex: index === currentSlide ? 10 : 0
              }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex flex-col md:flex-row"
            >
              <div className="w-full md:w-1/2 h-1/2 md:h-full relative">
                <img 
                  src={programme.image} 
                  alt={programme.title}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-gray-900 via-gray-900/70 to-transparent" />
              </div>
              
              <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center p-8 text-white z-10">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="mr-3">
                      {programme.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">{programme.title}</h3>
                  </div>
                  <p className="text-lg mb-6">{programme.description}</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all flex items-center">
                    Discover {programme.title.split(' ')[0]}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {programmes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white w-6' : 'bg-white/50'}`}
                aria-label={`View ${programmes[index].title} programme`}
              />
            ))}
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
            Explore Our Programmes
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {programmes.map((programme, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex flex-col items-center p-4 rounded-lg transition-all ${currentSlide === index ? 'bg-blue-100 border-2 border-blue-500' : 'bg-white shadow-md hover:shadow-lg'}`}
                onClick={() => setCurrentSlide(index)}
              >
                <div className="text-2xl mb-2">
                  {programme.icon}
                </div>
                <h4 className="font-medium text-center text-sm md:text-base">{programme.title}</h4>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Overview;