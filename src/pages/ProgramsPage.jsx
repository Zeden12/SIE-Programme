import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaCalendarAlt, 
  FaBook, 
  FaLaptop, 
  FaChalkboardTeacher,
  FaClock,
  FaCertificate,
  FaDownload,
  FaChartBar,
  FaPhoneAlt
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProgramsPage = () => {
  const programDetails = [
    {
      title: "Video Production",
      schedule: [
        { day: "Monday/Wednesday", time: "6:00 PM - 8:00 PM" },
        { day: "Saturday", time: "9:00 AM - 12:00 PM" }
      ],
      materials: [
        "DSLR Camera Fundamentals",
        "Adobe Premiere Pro Masterclass",
        "Lighting Techniques",
        "Audio Recording Essentials"
      ],
      duration: "12 Weeks",
      certification: "Certified Video Producer",
      syllabus: "/syllabus/video-production.pdf",
      overview: "Master professional video production from shooting to post-production"
    },
    {
      title: "Audio Engineering",
      schedule: [
        { day: "Tuesday/Thursday", time: "6:00 PM - 8:00 PM" },
        { day: "Saturday", time: "10:00 AM - 1:00 PM" }
      ],
      materials: [
        "Digital Audio Workstations",
        "Sound Mixing Techniques",
        "Microphone Theory",
        "Live Sound Engineering"
      ],
      duration: "10 Weeks",
      certification: "Audio Engineer Certification",
      syllabus: "/syllabus/audio-engineering.pdf",
      overview: "Professional training in recording, mixing and mastering audio"
    },
    {
      title: "Fullstack Development",
      schedule: [
        { day: "Monday/Wednesday", time: "6:00 PM - 9:00 PM" },
        { day: "Sunday", time: "1:00 PM - 4:00 PM" }
      ],
      materials: [
        "HTML/CSS/JavaScript Fundamentals",
        "React.js & Node.js",
        "Database Design",
        "API Development",
        "DevOps Basics"
      ],
      duration: "16 Weeks",
      certification: "Fullstack Developer Certification",
      syllabus: "/syllabus/fullstack-development.pdf",
      overview: "Complete web development training from frontend to backend"
    },
    {
      title: "Frontend Development",
      schedule: [
        { day: "Tuesday/Thursday", time: "5:30 PM - 8:30 PM" }
      ],
      materials: [
        "Advanced CSS/Sass",
        "JavaScript ES6+",
        "React.js Framework",
        "State Management",
        "UI/UX Principles"
      ],
      duration: "12 Weeks",
      certification: "Frontend Developer Certification",
      syllabus: "/syllabus/frontend-development.pdf",
      overview: "Master modern frontend development with React ecosystem"
    },
    {
      title: "Backend Development",
      schedule: [
        { day: "Monday/Wednesday", time: "7:00 PM - 9:00 PM" },
        { day: "Friday", time: "5:00 PM - 8:00 PM" }
      ],
      materials: [
        "Node.js & Express",
        "Database Systems",
        "API Design",
        "Authentication",
        "Cloud Deployment"
      ],
      duration: "14 Weeks",
      certification: "Backend Developer Certification",
      syllabus: "/syllabus/backend-development.pdf",
      overview: "Server-side development with Node.js and database systems"
    },
    {
      title: "UI/UX Design",
      schedule: [
        { day: "Saturday", time: "9:00 AM - 3:00 PM" }
      ],
      materials: [
        "Design Thinking",
        "Figma & Adobe XD",
        "User Research Methods",
        "Prototyping",
        "Design Systems"
      ],
      duration: "8 Weeks",
      certification: "UI/UX Design Certification",
      syllabus: "/syllabus/ui-ux-design.pdf",
      overview: "User-centered design principles and industry tools"
    }
  ];

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
            Our Academic Programs
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Comprehensive training programs with detailed schedules, learning materials, and certification
          </motion.p>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Program <span className="text-blue-600">Structure</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaCalendarAlt className="text-4xl text-blue-600 mb-4" />,
                title: "Flexible Schedules",
                description: "Evening and weekend classes to accommodate working professionals and students"
              },
              {
                icon: <FaBook className="text-4xl text-blue-600 mb-4" />,
                title: "Comprehensive Materials",
                description: "Access to textbooks, video tutorials, and practical exercises"
              },
              {
                icon: <FaLaptop className="text-4xl text-blue-600 mb-4" />,
                title: "Hands-on Labs",
                description: "Practical sessions with industry-standard tools and equipment"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-lg"
              >
                {feature.icon}
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Program <span className="text-blue-600">Comparison</span>
          </h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="py-4 px-6 text-left">Program</th>
                  <th className="py-4 px-6 text-left">Duration</th>
                  <th className="py-4 px-6 text-left">Schedule</th>
                  <th className="py-4 px-6 text-left">Certification</th>
                  <th className="py-4 px-6 text-left">Overview</th>
                </tr>
              </thead>
              <tbody>
                {programDetails.map((program, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  >
                    <td className="py-4 px-6 font-semibold">{program.title}</td>
                    <td className="py-4 px-6">{program.duration}</td>
                    <td className="py-4 px-6">
                      {program.schedule.map((s, i) => (
                        <div key={i}>{s.day}: {s.time}</div>
                      ))}
                    </td>
                    <td className="py-4 px-6">{program.certification}</td>
                    <td className="py-4 px-6">{program.overview}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Detailed Program Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Program <span className="text-blue-600">Details</span>
          </h2>
          
          {programDetails.map((program, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-16 bg-gray-50 rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-blue-800">{program.title}</h3>
                  <a 
                    href={program.syllabus} 
                    download
                    className="flex items-center text-blue-600 hover:text-blue-800"
                  >
                    <FaDownload className="mr-2" />
                    Download Syllabus
                  </a>
                </div>
                
                <p className="text-gray-700 mb-6">{program.overview}</p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Schedule */}
                  <div>
                    <div className="flex items-center mb-4">
                      <FaClock className="text-blue-600 mr-2" />
                      <h4 className="text-xl font-semibold">Class Schedule</h4>
                    </div>
                    <ul className="space-y-2">
                      {program.schedule.map((session, i) => (
                        <li key={i} className="flex justify-between py-2 border-b border-gray-200">
                          <span className="font-medium">{session.day}</span>
                          <span>{session.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Learning Materials */}
                  <div>
                    <div className="flex items-center mb-4">
                      <FaBook className="text-blue-600 mr-2" />
                      <h4 className="text-xl font-semibold">Learning Materials</h4>
                    </div>
                    <ul className="space-y-2">
                      {program.materials.map((material, i) => (
                        <li key={i} className="flex items-start py-2">
                          <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-2"></span>
                          {material}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Additional Info */}
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className="flex items-center">
                    <FaChalkboardTeacher className="text-blue-600 mr-2" />
                    <div>
                      <h5 className="font-semibold">Duration</h5>
                      <p>{program.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaCertificate className="text-blue-600 mr-2" />
                    <div>
                      <h5 className="font-semibold">Certification</h5>
                      <p>{program.certification}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Enrollment CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Enroll?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get detailed information about our programs and start your learning journey
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center mx-auto">
              <FaDownload className="mr-2" />
              Download Full Brochure
            </button>
            <Link 
              to="/contact" 
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center mx-auto"
            >
              <FaPhoneAlt className="mr-2" />
              Contact Admissions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;