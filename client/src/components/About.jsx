import React from "react";
import { motion } from "framer-motion";
import about1 from "../assets/image3.jpeg";
import about2 from "../assets/image2.jpeg";

const About = () => {
  return (
    <section className="py-24 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white z-0"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-indigo-50 opacity-50"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-blue-50 opacity-40"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Side - Images with Experience Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <img
                  src={about1}
                  alt="Team at Work"
                  className="rounded-2xl shadow-xl w-full h-auto object-cover"
                />
              </motion.div>
              
              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute left-1/2 transform -translate-x-1/2 -bottom-16 md:-right-16 md:left-auto md:bottom-1/2 md:translate-y-1/2 md:-translate-x-0 z-20"
              >
                <div className="bg-indigo-600 text-white rounded-2xl shadow-xl p-6 w-64">
                  <div className="flex flex-col items-center justify-center text-center">
                    <span className="text-5xl font-bold mb-1">15+</span>
                    <span className="text-xl font-medium uppercase tracking-wider">Years of</span>
                    <span className="text-xl font-medium uppercase tracking-wider">Experience</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-32 md:mt-10 relative z-10"
              >
                <img
                  src={about2}
                  alt="Company Environment"
                  className="rounded-2xl shadow-xl w-full h-auto object-cover ml-auto md:ml-10 max-w-sm"
                />
              </motion.div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-16 -left-6 w-24 h-24 bg-indigo-100 rounded-full opacity-70 z-0"></div>
            <div className="absolute bottom-24 -right-10 w-32 h-32 bg-blue-100 rounded-full opacity-70 z-0"></div>
          </motion.div>
          
          {/* Right Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-7"
          >
            <div className="max-w-2xl">
              <div className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 font-medium text-sm mb-6">
                ABOUT OUR COMPANY
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Creating Smart and <span className="text-indigo-600">Sustainable Solutions</span> for Your Built Environment
              </h2>
              
              <div className="w-20 h-1 bg-indigo-600 mb-8"></div>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We are dedicated to building a future where technology meets functionality. Our mission is
                to provide innovative, reliable, and eco-conscious solutions that help businesses grow and
                thrive in a rapidly changing world.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                Through our commitment to excellence and sustainable practices, we've helped numerous organizations
                transform their built environments, creating spaces that are healthier, safer, and more efficient.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
                <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-indigo-50">
                      <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-2xl md:text-3xl font-bold text-gray-900">150+</h4>
                      <p className="text-gray-500">Projects Delivered</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-indigo-50">
                      <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-2xl md:text-3xl font-bold text-gray-900">50+</h4>
                      <p className="text-gray-500">Expert Team Members</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="mt-10">
                <a 
                  href="#services" 
                  className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-medium rounded-xl shadow-lg hover:bg-indigo-700 transition-all duration-300 hover:shadow-xl"
                >
                  Our Services
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;