import React from 'react';
import { motion } from 'framer-motion';

const Curriculum = () => (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Your <span className="text-blue-600">Learning Journey</span>
        </h2>
        
        <div className="space-y-8 relative">
          {/* Vertical line */}
          <div className="absolute left-4 h-full w-0.5 bg-blue-200 top-0 md:left-1/2"></div>
          
          {[
            {
              phase: "Phase 1",
              title: "Digital Foundations",
              duration: "Month 1-3",
              skills: ["Programming Basics", "Design Thinking", "Tech Ethics"]
            },
            {
              phase: "Phase 2",
              title: "Specialization Track",
              duration: "Month 4-6",
              skills: ["AI/ML", "Web Development", "Data Science"]
            },
            {
              phase: "Phase 3",
              title: "Capstone Project",
              duration: "Month 7-9",
              skills: ["Real-world Deployment", "Startup Incubation", "Demo Day"]
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className={`bg-white p-6 rounded-xl shadow-md border border-gray-200 relative md:w-5/12 ${i % 2 ? "md:ml-auto" : "md:mr-auto"}`}>
                <div className="absolute -left-10 top-6 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white md:-left-6">
                  {i+1}
                </div>
                <span className="text-sm text-blue-600 font-medium">{item.phase}</span>
                <h3 className="text-xl font-bold mt-1">{item.title}</h3>
                <p className="text-gray-500 text-sm mb-3">{item.duration}</p>
                <ul className="space-y-2">
                  {item.skills.map((skill, j) => (
                    <li key={j} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )

  export default Curriculum;