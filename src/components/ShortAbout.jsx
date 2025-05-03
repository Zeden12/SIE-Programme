import React from 'react';
import { motion } from 'framer-motion';

const AboutSIE = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              What is the SIE Programme?
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            The <strong>School Innovation & Entrepreneurship (SIE) Programme</strong> is a <span className="text-blue-600 font-medium">9-month intensive</span> that equips students with <span className="text-blue-600 font-medium">digital skills</span>, <span className="text-blue-600 font-medium">problem-solving frameworks</span>, and <span className="text-blue-600 font-medium">leadership training</span> to transform local challenges into tech-driven solutions. 
            <br /><br />
            We blend <span className="font-medium">classroom learning</span> with <span className="font-medium">community projects</span>, preparing youth for careers in Rwanda's growing digital economy.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSIE;