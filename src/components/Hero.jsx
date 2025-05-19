import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import bg1 from '../assets/sie-bg1.jpg';
import bg2 from '../assets/sie-bg2.jpg';
import bg3 from '../assets/sie-bg3.jpg';
import bg4 from '../assets/sie-bg4.jpg';
import audioImg from '../assets/audio.jpg';
import videoImg from '../assets/video.jpg';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const backgroundImages = [bg1, bg2, bg3, bg4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentSlide ? 1 : 0,
              transition: { duration: 1 }
            }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </motion.div>
        ))}
      </div>
      <div className="relative z-10 h-full flex flex-col justify-center px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-block"
          >
            <div className="inline-flex items-center bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium shadow-lg">
              <span className="h-2 w-2 bg-white rounded-full mr-2 animate-pulse"></span>
              <span>SIE Programme</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight"
          >
            Transforming Education Through <br className="hidden md:block" />
            <span className="text-blue-400">Innovation and Technology</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 mb-10 max-w-2xl"
          >
            The SIE Programme empowers students with cutting-edge skills and knowledge to solve real-world challenges in their communities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link 
              to="/apply" 
              className="px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center"
            >
              Apply Now <FaArrowRight className="ml-2" />
            </Link>
            
            <Link 
              to="/programs" 
              className="px-8 py-4 rounded-xl border-2 border-white text-white font-semibold hover:bg-white hover:text-gray-900 transition-all"
            >
              Explore Programs
            </Link>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 z-10 flex justify-center space-x-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-400'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-10 p-2 text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-70 transition"
        aria-label="Previous slide"
      >
        <FaChevronLeft className="w-6 h-6" />
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-10 p-2 text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-70 transition"
        aria-label="Next slide"
      >
        <FaChevronRight className="w-6 h-6" />
      </button>
    </section>
  );
};

export default Hero;