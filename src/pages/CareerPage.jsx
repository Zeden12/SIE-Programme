import React from 'react';
import { 
  FaBriefcase, 
  FaUserGraduate, 
  FaNetworkWired, 
  FaChartLine,
  FaRegHandshake,
  FaExternalLinkAlt,
  FaFileAlt
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Boy1Image from '../assets/boy1.jpg';
import Boy2Image from '../assets/boy2.jpg';
import Girl1Image from '../assets/girl1.jpg';
import Girl2Image from '../assets/girl2.jpg';


const CareerPage = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Frontend Developer Instructor",
      type: "Full-time",
      location: "Kigali, Rwanda",
      department: "Education",
      formLink: "https://docs.google.com/forms/d/your-frontend-instructor-form"
    },
    {
      id: 2,
      title: "Career Counselor",
      type: "Part-time",
      location: "Remote",
      department: "Student Services",
      formLink: "https://docs.google.com/forms/d/your-career-counselor-form"
    },
    {
      id: 3,
      title: "Video Production Trainer",
      type: "Contract",
      location: "Kigali, Rwanda",
      department: "Education",
      formLink: "https://docs.google.com/forms/d/your-video-trainer-form"
    },
    {
      id: 3,
      title: "Internship program",
      type: "internship",
      location: "Hybrid",
      department: "Internships",
      formLink: "https://docs.google.com/forms/d/your-video-trainer-form"
    }
  ];

  const successStories = [
    {
      name: "Ernest H.K",
      role: "Full-Stack Developer at DEVNEX Hi-Tech",
      quote: "The career support from SKAFF Academy helped me negotiate my first salary 30% higher than I expected.",
      image: Boy1Image,
      testimonial: "After completing the Fullstack Development program, I received multiple job offers and career coaching that helped me choose the best opportunity."
    },
    {
      name: "Phionah U.",
      role: "Producer at ROS Music",
      quote: "The portfolio review sessions were instrumental in helping me land my dream job.",
      image: Girl1Image,
      testimonial: "SKAFF Academy's industry connections introduced me to key players in Rwanda's music production scene, leading to my current position."
    },
    {
      name: "Amin G.",
      role: "Audio Producer at Internews",
      quote: "The hands-on training prepared me for real-world audio production challenges.",
      image: Boy2Image,
      testimonial: "I went from having no audio experience to working on major projects within 6 months of completing the program."
    },
    {
      name: "Claudine K.",
      role: "UX Designer at Umucyo Hub",
      quote: "The career fairs gave me direct access to hiring managers.",
      image: Girl2Image,
      testimonial: "I secured three interviews through SKAFF Academy's employer network before graduating from the UI/UX program."
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
            className="text-4xl md:text-5xl font-bold mb-6 pt-20 sm:pt-20"
          >
            Build Your Future With SKAFF Academy
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
              Career <span className="text-blue-600">Outcomes</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our graduates achieve remarkable career success
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { 
                icon: <FaBriefcase className="text-4xl mx-auto mb-4 text-blue-600" />, 
                title: "Placement Rate", 
                value: "87%", 
                desc: "employed within 3 months of graduation" 
              },
              { 
                icon: <FaUserGraduate className="text-4xl mx-auto mb-4 text-blue-600" />, 
                title: "Salary Increase", 
                value: "2.5x", 
                desc: "average earnings growth post-program" 
              },
              { 
                icon: <FaNetworkWired className="text-4xl mx-auto mb-4 text-blue-600" />, 
                title: "Partner Network", 
                value: "120+", 
                desc: "companies hiring our graduates" 
              },
              { 
                icon: <FaChartLine className="text-4xl mx-auto mb-4 text-blue-600" />, 
                title: "Career Support", 
                value: "18 mos", 
                desc: "of post-graduation assistance" 
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
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

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Current <span className="text-blue-600">Opportunities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our mission to transform digital education
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
                className="p-6 border-b border-gray-200 last:border-b-0 hover:bg-blue-50 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">{job.type}</span>
                      <span className="text-sm bg-gray-100 text-gray-800 px-3 py-1 rounded-full">{job.location}</span>
                      <span className="text-sm bg-purple-100 text-purple-800 px-3 py-1 rounded-full">{job.department}</span>
                    </div>
                  </div>
                  <a
                    href={job.formLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors min-w-[150px]"
                  >
                    <FaFileAlt />
                    Apply Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-600 mb-4">
              Don't see your perfect role? We're always interested in meeting talented individuals.
            </p>
            <a
              href="https://forms.gle/MbVvVmQML2amF3bz9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
            >
              Submit General Application <FaExternalLinkAlt className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Alumni <span className="text-blue-600">Success</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear how SKAFF Academy launched careers in tech and creative industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {successStories.map((story, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{story.name}</h4>
                    <p className="text-blue-600 text-sm">{story.role}</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic mb-4">"{story.quote}"</blockquote>
                <p className="text-gray-600 text-sm">{story.testimonial}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/programs" 
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FaUserGraduate className="mr-2" />
              See How Our Programs Can Help You
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Take Your Next Career Step</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether you're seeking employment or looking to join our team, we have opportunities for you
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/programs" 
              className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              <FaUserGraduate />
              Explore Programs
            </Link>
            <a 
              href="https://docs.google.com/forms/d/your-career-inquiry-form"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center gap-2"
            >
              <FaBriefcase />
              Career Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;