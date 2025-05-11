import React from 'react';
import ProgramsSection from '../components/ProgramsSection';
import { FaChalkboardTeacher, FaUserTie, FaCertificate, FaLaptopCode, FaHandshake } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProgramsPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Launch Your Tech Career
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Industry-driven programs designed to make you job-ready in Rwanda's fastest-growing sectors
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a 
              href="#programs" 
              className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
            >
              Explore Programs
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: <FaChalkboardTeacher className="text-3xl mx-auto mb-4 text-blue-600" />, number: "50+", label: "Expert Instructors" },
              { icon: <FaUserTie className="text-3xl mx-auto mb-4 text-blue-600" />, number: "1000+", label: "Graduates" },
              { icon: <FaCertificate className="text-3xl mx-auto mb-4 text-blue-600" />, number: "85%", label: "Employment Rate" },
              { icon: <FaHandshake className="text-3xl mx-auto mb-4 text-blue-600" />, number: "120+", label: "Partner Companies" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6"
              >
                {stat.icon}
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-16">
        <ProgramsSection />
      </section>

      {/* Learning Approach Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Learning Approach</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Practical, project-based training that prepares you for real-world challenges
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Hands-On Projects",
                description: "Build real applications and solutions from day one, creating a portfolio that showcases your skills.",
                icon: <FaLaptopCode className="text-blue-500 text-4xl mb-4" />
              },
              {
                title: "Industry Mentorship",
                description: "Learn directly from professionals currently working in your field of study.",
                icon: <FaUserTie className="text-blue-500 text-4xl mb-4" />
              },
              {
                title: "Career Support",
                description: "Resume workshops, interview preparation, and direct connections to our employer network.",
                icon: <FaHandshake className="text-blue-500 text-4xl mb-4" />
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  {item.icon}
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success <span className="text-blue-600">Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our graduates who are making an impact
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Alice M.",
                role: "Frontend Developer at KLab",
                quote: "The project-based curriculum gave me the confidence to apply for jobs immediately after graduation.",
                image: "https://randomuser.me/api/portraits/women/44.jpg"
              },
              {
                name: "Jean P.",
                role: "Video Producer at Rwanda TV",
                quote: "The industry connections I made through SIE led directly to my current position.",
                image: "https://randomuser.me/api/portraits/men/32.jpg"
              },
              {
                name: "Marie A.",
                role: "UX Designer at Andela",
                quote: "The portfolio I built during the program was the key differentiator in my job search.",
                image: "https://randomuser.me/api/portraits/women/68.jpg"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-xl"
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-blue-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join the next cohort of tech professionals in Rwanda
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://forms.gle/ATM8ZXx7Vk6trLQN9" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              Apply Now <FaExternalLinkAlt className="ml-2" />
            </a>
            <Link 
              to="/contact" 
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;