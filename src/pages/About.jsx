import React from "react";
import { motion } from "framer-motion";
import { 
  FaRocket, 
  FaLightbulb, 
  FaUsers, 
  FaGlobe, 
  FaArrowRight,
  FaGraduationCap,
  FaHandshake,
  FaChartLine,
  FaBriefcase,
  FaTools,
  FaUserTie,
  FaAward,
  FaPhoneAlt
} from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-gray-50">
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6 pt-18 sm:pt-20"
          >
            About <span className="text-blue-200">SIE Programme</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Empowering the next generation of digital innovators through comprehensive, industry-aligned education
          </motion.p>
        </div>
      </section>

      <section className="relative py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-purple-200 opacity-20 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white bg-opacity-80 backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-xl md:rounded-2xl shadow-lg mb-16 md:mb-20 border border-gray-100"
          >
            <motion.h3 
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 text-gray-800"
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
            >
              Who <span className="text-blue-600">We Are</span>
            </motion.h3>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-700 text-center max-w-5xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              The <span className="font-semibold text-blue-600">SIE Programme</span> is a cutting-edge educational initiative that bridges the gap between academic learning and real-world industry demands. Founded in 2020, we've successfully trained over 2,500 students across 6 specialized digital disciplines, with 87% of our graduates securing employment or starting their own ventures within 3 months of completion.
            </motion.p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 mb-8">
              {[
                { value: "2,500+", label: "Students Trained" },
                { value: "87%", label: "Employment Rate" },
                { value: "6", label: "Specialized Programs" },
                { value: "50+", label: "Industry Partners" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-blue-50 p-4 rounded-lg text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-blue-700 mb-1">{stat.value}</div>
                  <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 md:mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1 }}
            >
              {[
                {
                  icon: <FaGraduationCap className="text-blue-500 text-2xl sm:text-3xl" />,
                  title: "Our Educational Philosophy",
                  desc: "We combine project-based learning with industry mentorship to create professionals who can immediately contribute to the workforce. Our curriculum is updated quarterly to reflect the latest technological advancements and industry needs."
                },
                {
                  icon: <FaHandshake className="text-blue-500 text-2xl sm:text-3xl" />,
                  title: "Industry Partnerships",
                  desc: "We collaborate with 50+ leading tech companies to ensure our programs align with current market demands. Many partners participate directly in our curriculum development and offer internships to top students."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="bg-white p-5 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex items-start">
                    <div className="mr-3 sm:mr-4 mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">{item.title}</h4>
                      <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 md:mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 sm:p-8 rounded-xl md:rounded-2xl shadow-lg border border-blue-100"
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="bg-blue-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4">
                  <FaRocket className="text-blue-600 text-xl sm:text-2xl" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">Our Mission</h3>
              </div>
              <p className="text-gray-700 text-base sm:text-lg">
                To democratize access to high-quality digital education by providing affordable, intensive training programs that transform students into job-ready professionals. We measure our success by our graduates' ability to solve real-world problems and thrive in the digital economy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 sm:p-8 rounded-xl md:rounded-2xl shadow-lg border border-purple-100"
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="bg-purple-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4">
                  <FaLightbulb className="text-purple-600 text-xl sm:text-2xl" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">Our Vision</h3>
              </div>
              <p className="text-gray-700 text-base sm:text-lg">
                To become Africa's leading digital skills accelerator, producing 10,000 highly skilled professionals annually by 2025. We envision a future where our graduates drive innovation across industries and contribute to solving Africa's most pressing challenges through technology.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="mb-16 md:mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <motion.h3
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-gray-900"
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
            >
              Why <span className="text-blue-600">SIE Programme?</span>
            </motion.h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                {
                  icon: <FaUserTie className="text-blue-500 text-2xl sm:text-3xl" />,
                  title: "Industry-Experienced Instructors",
                  desc: "Learn from professionals currently working at top tech companies",
                  bg: "bg-blue-50"
                },
                {
                  icon: <FaBriefcase className="text-green-500 text-2xl sm:text-3xl" />,
                  title: "Career Services",
                  desc: "Dedicated support for resume building, interview prep, and job placement",
                  bg: "bg-green-50"
                },
                {
                  icon: <FaTools className="text-purple-500 text-2xl sm:text-3xl" />,
                  title: "Practical Curriculum",
                  desc: "80% hands-on projects using real-world tools and technologies",
                  bg: "bg-purple-50"
                },
                {
                  icon: <FaChartLine className="text-orange-500 text-2xl sm:text-3xl" />,
                  title: "Lifelong Learning",
                  desc: "Alumni access to updated materials and networking events",
                  bg: "bg-orange-50"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`${item.bg} p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition-all`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center shadow-sm mb-3 sm:mb-5">
                      {item.icon}
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800">{item.title}</h4>
                    <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-16 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-900">
              Success <span className="text-blue-600">Stories</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Amina Mohammed",
                  role: "Frontend Developer at TechSolutions",
                  quote: "SIE's project-based approach gave me the portfolio that got me hired within weeks of graduating.",
                  icon: <FaAward className="text-yellow-500" />
                },
                {
                  name: "David Okafor",
                  role: "Video Producer at MediaWorks",
                  quote: "The industry connections I made through SIE led directly to my current position.",
                  icon: <FaAward className="text-yellow-500" />
                },
                {
                  name: "Sarah Johnson",
                  role: "UI/UX Designer at DesignHub",
                  quote: "The practical skills I gained were immediately applicable to real client projects.",
                  icon: <FaAward className="text-yellow-500" />
                }
              ].map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <div className="flex items-center mb-4">
                    {story.icon}
                    <div className="ml-3">
                      <h4 className="font-bold">{story.name}</h4>
                      <p className="text-sm text-gray-600">{story.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{story.quote}"</p>
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
              className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6 sm:mb-8"
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
            >
              Ready to transform your career with SIE?
            </motion.p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link
                to="/programs"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold py-3 px-8 sm:py-4 sm:px-10 rounded-full shadow-lg hover:shadow-xl transition-all text-sm sm:text-base"
              >
                Explore Our Programs
                <FaArrowRight className="ml-2 sm:ml-3 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center bg-white text-blue-600 font-bold py-3 px-8 sm:py-4 sm:px-10 rounded-full shadow-lg hover:shadow-xl transition-all text-sm sm:text-base border border-blue-600"
              >
                Speak to an Advisor
                <FaPhoneAlt className="ml-2 sm:ml-3" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;