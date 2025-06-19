import React from "react";
import { motion } from "framer-motion";
import {
  FaEdit,
  FaUserCheck,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";

const Curriculum = () => {
  const phases = [
    {
      phase: "1. Apply",
      title: "Start Your Journey",
      description:
        "Submit your application for your preferred program (Video, Audio, Development, or Design)",
      skills: [
        "Program Selection",
        "Application Review",
        "Admission Notification",
      ],
      icon: <FaEdit className="text-blue-500 text-2xl" />,
      color: "bg-blue-100 text-blue-600",
      highlight: "from-gray-100 to-blue-50",
    },
    {
      phase: "2. Enroll",
      title: "Join the Community",
      description:
        "Complete onboarding and begin your specialized learning path",
      skills: ["Orientation", "Tool Setup", "Learning Plan"],
      icon: <FaUserCheck className="text-purple-500 text-2xl" />,
      color: "bg-purple-100 text-purple-600",
      highlight: "from-blue-50 to-purple-50",
    },
    {
      phase: "3. Master",
      title: "Build Career Skills",
      description:
        "Develop professional-grade abilities through hands-on projects",
      skills: ["Technical Training", "Project Work", "Portfolio Development"],
      icon: <FaGraduationCap className="text-green-500 text-2xl" />,
      color: "bg-green-100 text-green-600",
      highlight: "from-purple-50 to-green-50",
    },
    {
      phase: "4. Launch",
      title: "Enter the Industry",
      description: "Gain real-world experience through our employer network",
      skills: ["Professional Internship", "Job Placement", "Career Support"],
      icon: <FaBriefcase className="text-orange-500 text-2xl" />,
      color: "bg-orange-100 text-orange-600",
      highlight: "from-green-50 to-orange-50",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Career Pathway
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From application to employment - our proven progression framework
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-blue-400 via-green-400 to-orange-400 top-0 -ml-0.5 z-0"></div>
          <div className="md:hidden absolute left-8 h-full w-1 bg-gradient-to-b from-blue-400 via-green-400 to-orange-400 top-0 z-0"></div>

          <div className="space-y-12 md:space-y-0">
            {phases.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row ${
                  i % 2 ? "md:justify-start" : "md:justify-end"
                } items-center`}
              >
                <div
                  className={`w-full md:w-5/12 p-8 rounded-2xl shadow-lg ${
                    i % 2 ? "md:mr-auto md:pr-16" : "md:ml-auto md:pl-16"
                  } bg-white mb-8 md:mb-16 relative z-10 border border-gray-200`}
                >
                  <div
                    className={`absolute -top-4 ${
                      i % 2 ? "md:-right-4" : "md:-left-4"
                    } left-8 w-12 h-12 rounded-full flex items-center justify-center shadow-md ${
                      phase.color
                    }`}
                  >
                    {phase.icon}
                  </div>
                  <span
                    className={`text-sm font-semibold ${phase.color.replace(
                      "bg-",
                      "text-"
                    )}`}
                  >
                    {phase.phase}
                  </span>
                  <h3 className="text-2xl font-bold mt-1 mb-2 text-gray-800">
                    {phase.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{phase.description}</p>
                  <ul className="space-y-2">
                    {phase.skills.map((skill, j) => (
                      <li key={j} className="flex items-start">
                        <span
                          className={`w-2 h-2 rounded-full mt-2 mr-2 ${phase.color.replace(
                            "bg-",
                            "bg-"
                          )}`}
                        ></span>
                        <span className="text-gray-700">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`hidden md:flex items-center justify-center w-24 h-24 rounded-full ${phase.color} shadow-lg absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 border-4 border-white`}
                >
                  <span className="text-xl font-bold">
                    {phase.phase.split(" ")[1]}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="https://forms.gle/MbVvVmQML2amF3bz9"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center mx-auto w-fit"
          >
            Start Your Application
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Curriculum;
