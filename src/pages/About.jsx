import React from "react";
import { motion } from "framer-motion";
import { 
  FaRocket, 
  FaLightbulb, 
  FaUsers, 
  FaGlobe, 
  FaArrowRight,
  FaGraduationCap,
  FaHandshake
} from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-purple-200 opacity-20 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            About <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">SIE Programme</span>
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Shaping the future of digital innovation through hands-on learning and industry-driven expertise
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white bg-opacity-80 backdrop-blur-sm p-10 rounded-2xl shadow-xl mb-20 border border-gray-100"
        >
          <motion.h3 
            className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800"
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
          >
            Who <span className="text-blue-600">We Are</span>
          </motion.h3>
          <motion.p
            className="text-lg md:text-xl text-gray-700 text-center max-w-5xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            The <span className="font-semibold text-blue-600">SIE Programme</span> is a transformative educational initiative designed to empower students and young professionals with the skills, mindset, and network needed to excel in the digital economy. Founded on the principles of innovation, collaboration, and real-world impact, we bring together academia and industry to create a dynamic learning ecosystem.
          </motion.p>
          <motion.div
            className="grid md:grid-cols-2 gap-8 mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {[
              {
                icon: <FaGraduationCap className="text-blue-500 text-3xl" />,
                title: "Our Approach",
                desc: "Blending cutting-edge technical training with leadership development and project-based learning."
              },
              {
                icon: <FaHandshake className="text-blue-500 text-3xl" />,
                title: "Our Impact",
                desc: "Ensuring participants apply knowledge to solve pressing global challenges."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg border border-blue-100"
          >
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaRocket className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Our Mission</h3>
            </div>
            <p className="text-gray-700 text-lg">
              To bridge the gap between academia and industry by equipping students with cutting-edge technical skills, leadership qualities, and real-world problem-solving abilities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg border border-purple-100"
          >
            <div className="flex items-center mb-6">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <FaLightbulb className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Our Vision</h3>
            </div>
            <p className="text-gray-700 text-lg">
              To create a global community of innovators who drive technological advancement and sustainable development through collaborative learning.
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900"
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
          >
            Why <span className="text-blue-600">Join SIE?</span>
          </motion.h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <FaUsers className="text-blue-500 text-3xl" />,
                title: "Expert Mentorship",
                desc: "Learn from industry leaders and experienced professionals",
                bg: "bg-blue-50"
              },
              {
                icon: <FaGlobe className="text-green-500 text-3xl" />,
                title: "Global Network",
                desc: "Connect with like-minded peers worldwide",
                bg: "bg-green-50"
              },
              {
                icon: <FaLightbulb className="text-purple-500 text-3xl" />,
                title: "Innovative Projects",
                desc: "Work on real-world challenges hands-on",
                bg: "bg-purple-50"
              },
              {
                icon: <FaRocket className="text-orange-500 text-3xl" />,
                title: "Career Growth",
                desc: "Gain skills that make you stand out",
                bg: "bg-orange-50"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`${item.bg} p-8 rounded-xl shadow-md hover:shadow-lg transition-all`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm mb-5">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-800">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.p
            className="text-xl md:text-2xl text-gray-700 mb-8"
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
          >
            Ready to transform your future with SIE?
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/programs"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Explore Our Programs
              <FaArrowRight className="ml-3 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;