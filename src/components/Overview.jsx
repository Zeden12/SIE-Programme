import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaUsers, FaBriefcase } from 'react-icons/fa';

const Overview = () => {
  const features = [
    {
      icon: <FaGraduationCap className="text-3xl mb-4 text-blue-600" />,
      title: "Future-Ready Curriculum",
      description: "Courses designed with industry leaders to teach in-demand digital skills"
    },
    {
      icon: <FaLaptopCode className="text-3xl mb-4 text-purple-600" />,
      title: "Project-Based Learning",
      description: "Build real solutions for local communities through hands-on projects"
    },
    {
      icon: <FaUsers className="text-3xl mb-4 text-green-600" />,
      title: "Expert Mentorship",
      description: "1:1 guidance from tech professionals and educators"
    },
    {
      icon: <FaBriefcase className="text-3xl mb-4 text-orange-600" />,
      title: "Career Pathways",
      description: "Internships and partnerships with top employers"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">SIE Learning Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine cutting-edge technology with proven pedagogical approaches to create transformative learning journeys.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

        {/* Video Preview */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
        >
          <div className="aspect-w-16 aspect-h-9 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-6 shadow-lg transform hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.8L17 10 6.3 17.2V2.8z" />
                </svg>
                <span className="sr-only">Play video</span>
              </button>
            </div>
            <img 
              src="/programme-preview.jpg" 
              alt="Students in SIE programme" 
              className="w-full h-full object-cover opacity-70"
            />
          </div>
          <div className="p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-white mb-2">See Our Students in Action</h3>
            <p className="text-gray-300">Watch how we're revolutionizing tech education in Rwanda</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Overview;