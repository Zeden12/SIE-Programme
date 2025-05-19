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
  FaMicrophoneAlt as FaAudio
} from 'react-icons/fa';

const placeholderImage = 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80';

const ProgramsSection = () => {
  const programs = [
    {
      id: 1,
      title: "Video Production",
      description: "Learn professional filming, editing, and post-production techniques for YouTube, documentaries, and commercials.",
      duration: "12 Weeks",
      level: "Beginner to Advanced",
      price: "RWF 200,000",
      rating: 4.9,
      students: 120,
      icon: <FaVideo className="text-red-500" />,
      image: placeholderImage
    },
    {
      id: 2,
      title: "Audio Production",
      description: "Master recording, mixing, mastering and sound design using industry-standard tools and techniques.",
      duration: "3 months",
      level: "beginner to pro level",
      price: "RWF 200,000",
      rating: 4.7,
      students: 85,
      icon: <FaAudio className="text-blue-500" />,
      image: placeholderImage
    },
    {
      id: 3,
      title: "Fullstack Development",
      description: "Become job-ready with PERN and MERN stack (PostgreSQL / MongoDB, Express, React, Node.js) and build complete web applications.",
      duration: "16 Weeks",
      level: "Beginner to Pro level",
      price: "RWF 500,000",
      rating: 4.95,
      students: 210,
      icon: <FaCode className="text-green-500" />,
      image: placeholderImage
    },
    {
      id: 4,
      title: "Frontend development",
      description: "Master React, Next, modern JavaScript and CSS frameworks to build stunning user interfaces.",
      duration: "10 Weeks",
      level: "Beginner to pro level",
      price: "RWF 300,000",
      rating: 4.8,
      students: 175,
      icon: <FaDesktop className="text-purple-500" />,
      image: placeholderImage
    },
    {
      id: 5,
      title: "Backend Development",
      description: "Learn Node.js, Python, databases, APIs, authentication and deployment for robust server-side development.",
      duration: "3 months",
      level: "Intermediate",
      price: "RWF 300,000",
      rating: 4.85,
      students: 95,
      icon: <FaServer className="text-yellow-500" />,
      image: placeholderImage
    },
    {
      id: 6,
      title: "UI/UX Design",
      description: "User research, wireframing, prototyping and design systems using Figma and Adobe XD.",
      duration: "2 months",
      level: "All Levels",
      price: "RWF 350,000",
      rating: 4.75,
      students: 140,
      icon: <FaPalette className="text-pink-500" />,
      image: placeholderImage
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
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
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = placeholderImage;
                  }}
                />
              </div>
              <div className="absolute -mt-6 ml-4">
                <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  {program.icon}
                  <span className="ml-2">{program.level}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={i < Math.floor(program.rating) ? "fill-current" : "fill-gray-300"} 
                      />
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm">
                    {program.rating} ({program.students}+ students)
                  </span>
                </div>

                <p className="text-gray-600 mb-4">{program.description}</p>

                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center text-gray-500">
                    <FaRegClock className="mr-2" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="text-lg font-bold text-blue-600">
                    {program.price}
                  </div>
                </div>
                <button 
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300"
                  onClick={() => console.log(`Enrolling in ${program.title}`)}
                >
                  Enroll Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-all duration-300"
            onClick={() => console.log('View all programs clicked')}
          >
            Exprole More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;