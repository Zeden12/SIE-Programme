import React, { useState } from 'react';
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaClock,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaPaperPlane
} from 'react-icons/fa';
import Image from '../assets/SIE.jpg';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    program: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        program: '',
        message: ''
      });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

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
            Let's Build Your Future Together
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Get in touch with our admissions team to start your SKAFF Academy journey
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
                <span className="block w-20 h-1 bg-blue-600 mt-2"></span>
              </h2>
              
              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                  Thank you! Your message has been sent. We'll contact you within 24 hours.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="program" className="block text-gray-700 mb-2">Program of Interest</label>
                  <select
                    id="program"
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select a program</option>
                    <option value="Video Production">Video Production</option>
                    <option value="Audio Engineering">Audio Engineering</option>
                    <option value="Fullstack Development">Fullstack Development</option>
                    <option value="Frontend Development">Frontend Development</option>
                    <option value="Backend Development">Backend Development</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all flex items-center justify-center ${isSubmitting ? 'opacity-70' : ''}`}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-full bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Contact Information
                  <span className="block w-20 h-1 bg-blue-600 mt-2"></span>
                </h2>
                <div className="mb-8 rounded-lg overflow-hidden">
                  <img 
                    src={Image} 
                    alt="SKAFF Academy Campus" 
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <FaMapMarkerAlt className="text-blue-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Our Location</h3>
                      <p className="text-gray-600">Kigali Innovation City, KG 123 St</p>
                      <p className="text-gray-600">Kigali, Rwanda</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <FaPhoneAlt className="text-blue-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-600">+250 788 338 877</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <FaEnvelope className="text-blue-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">skaffacademy@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <FaClock className="text-blue-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Office Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p className="text-gray-600">Saturday: 9:00 AM - 3:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a href="https://www.facebook.com/profile.php?id=61572630885590 " className="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                      <FaLinkedin className="text-xl" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61572630885590 " className="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                      <FaTwitter className="text-xl" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61572630885590 " className="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                      <FaFacebook className="text-xl" />
                    </a>
                    <a href="https://www.instagram.com/sie_program?igsh=MXZmYWt5emdraGR4NQ== " className="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                      <FaInstagram className="text-xl" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61572630885590 " className="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                      <FaYoutube className="text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Find Us on <span className="text-blue-600">the Map</span>
          </h2>
          <div className="rounded-xl overflow-hidden shadow-xl">
            <iframe
              title="SKAFF Academy Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.490318045897!2d30.0913463153285!3d-1.954357537934562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca76b5e9d36e9%3A0x5a9f5a5e5e5e5e5e!2sKigali%20Innovation%20City!5e0!3m2!1sen!2srw!4v1620000000000!5m2!1sen!2srw"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          
          <div className="space-y-4">
            {[
              {
                question: "What's the application deadline for the next cohort?",
                answer: "We accept applications on a rolling basis, but we recommend applying at least 4 weeks before your desired start date."
              },
              {
                question: "Do you offer financial aid or scholarships?",
                answer: "Yes! We have several scholarship opportunities and flexible payment plans. Contact our admissions team for details."
              },
              {
                question: "Can I visit the campus before applying?",
                answer: "Absolutely! We host open houses every Thursday at 3 PM. You can also schedule a private tour by contacting us."
              },
              {
                question: "What equipment do I need for the programs?",
                answer: "For technical programs, we recommend having a laptop (specs vary by program). For media programs, we provide all specialized equipment."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <details className="group">
                  <summary className="flex justify-between items-center p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                    <h3 className="font-semibold text-gray-900">{item.question}</h3>
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="p-4 bg-white">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;