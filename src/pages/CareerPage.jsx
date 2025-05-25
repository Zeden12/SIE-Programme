import React from 'react';
import { 
  FaBriefcase, 
  FaUserGraduate, 
  FaNetworkWired, 
  FaChartLine,
  FaRegHandshake,
  FaExternalLinkAlt
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ZImage from '../assets/z.jpg';
import ZedImage from '../assets/zed.jpg';
import MyImage from '../assets/myphoto.jpg';
import ZiImage from '../assets/zi.jpg';

const CareerPage = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Frontend Developer Instructor",
      type: "Full-time",
      location: "Kigali, Rwanda",
      department: "Education"
    },
    {
      id: 2,
      title: "Career Counselor",
      type: "Part-time",
      location: "Remote",
      department: "Student Services"
    },
    {
      id: 3,
      title: "Video Production Trainer",
      type: "Contract",
      location: "Kigali, Rwanda",
      department: "Education"
    }
  ];

  const successStories = [
    {
      name: "Ernest H.K",
      role: "Full-Stack Developer at DEVNEX Hi-Tech",
      quote: "The career support from SIE helped me negotiate my first salary 30% higher than I expected.",
      image: ZImage
    },
    {
      name: "Phionah U.",
      role: "Producer at ROS Music",
      quote: "The portfolio review sessions were instrumental in helping me land my dream job.",
      image: ZedImage
    },
    {
      name: "Amin G.",
      role: "Audio Producer at Internews",
      quote: "The portfolio review sessions were instrumental in helping me land my dream job.",
      image: MyImage
    },
    {
      name: "Claudine K.",
      role: "UX Designer at Umucyo Hub",
      quote: "The portfolio review sessions were instrumental in helping me land my dream job.",
      image: MyImage
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6 pt-18 sm:pt-20"
          >
            Build Your Future With SIE
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Launch your career or join our team of educators and innovators
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Career <span className="text-blue-600">Paths</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our graduates work at Rwanda's top tech companies and startups
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <FaBriefcase className="text-4xl mx-auto mb-4 text-blue-600" />, title: "Placement Rate", value: "85%", desc: "of graduates employed within 3 months" },
              { icon: <FaUserGraduate className="text-4xl mx-auto mb-4 text-blue-600" />, title: "Average Salary", value: "$1,200", desc: "monthly for entry-level positions" },
              { icon: <FaNetworkWired className="text-4xl mx-auto mb-4 text-blue-600" />, title: "Partner Companies", value: "120+", desc: "in our hiring network" },
              { icon: <FaChartLine className="text-4xl mx-auto mb-4 text-blue-600" />, title: "Career Growth", value: "2.5x", desc: "salary increase within 2 years" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 rounded-lg"
              >
                {item.icon}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.value}</h3>
                <p className="font-semibold text-gray-800 mb-2">{item.title}</p>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join <span className="text-blue-600">Our Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're always looking for passionate educators and professionals
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-4xl mx-auto">
            {jobOpenings.map((job, index) => (
              <motion.div 
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 mt-2">
                      <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">{job.type}</span>
                      <span className="text-sm text-gray-600">{job.location}</span>
                      <span className="text-sm text-gray-600">{job.department}</span>
                    </div>
                  </div>
                  <Link 
                    to={`/careers/${job.id}`} 
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
                  >
                    View Details <FaExternalLinkAlt className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Career <span className="text-blue-600">Success</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our alumni about their career journeys
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {successStories.map((story, index) => (
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
                    src={story.image} 
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{story.name}</h4>
                    <p className="text-blue-600 text-sm">{story.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{story.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Next Step?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether you're looking to start your career or join our team, we're here to help
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/programs" 
              className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
            >
              Explore Programs
            </Link>
            <a 
              href="mailto:careers@sie.rw" 
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact HR
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;