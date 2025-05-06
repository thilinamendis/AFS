import React from 'react';
import { motion } from 'framer-motion';
import hero from '../assets/hero.jpg'; // Ensure you have this image in your assets folder

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 pt-10">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-20 -right-40 w-96 h-52 rounded-full bg-indigo-50 opacity-60"></div>
        <div className="absolute top-1/4 -left-20 w-64 h-52 rounded-full bg-blue-50 opacity-40"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-52 rounded-full bg-indigo-50 opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[650px]">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-6">
              <div className="w-16 h-1 bg-indigo-600 mb-6 hidden md:block"></div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 tracking-tight font-playfair-display leading-tight">
                Creating better <br/>
                <span className="text-indigo-800 relative">
                  Built Environments
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-indigo-200 opacity-60" viewBox="0 0 200 9" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,5 C50,15 80,0 120,5 C160,10 180,0 200,5" fill="none" stroke="currentColor" strokeWidth="3"></path>
                  </svg>
                </span>
              </h1>
            </div>
            
            <p className="text-black text-lg mb-8 leading-relaxed max-w-xl">
              We improve built environments through expert solutions in ES&H, Environmental
              Compliance, Building Controls, and Facilities Support, ensuring healthier, safer
              spaces while optimizing operational efficiency.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-2">
              <button className="px-8 py-4 bg-indigo-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:bg-indigo-700 transition-all duration-300 flex items-center gap-2">
                Start A Project
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
              
              <button className="px-8 py-4 bg-transparent text-gray-800 font-medium rounded-full border border-gray-300 hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300">
                Learn More
              </button>
            </div>
            
            <div className="flex items-center gap-6 mt-12">
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User" />
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User" />
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Trusted by <span className="font-medium text-gray-900">500+ clients</span></p>
              </div>
            </div>
          </motion.div>
          
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden bg-white shadow-2xl">
              <img 
                src={hero} 
                alt="Modern Building" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-600 rounded-2xl opacity-10"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600 rounded-2xl opacity-10"></div>
            
            {/* Stats card */}
            <div className="absolute -bottom-6 left-10 bg-white shadow-xl rounded-lg p-4 flex items-center gap-4 w-64">
              <div className="bg-indigo-50 p-3 rounded-lg">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Project Completion</p>
                <p className="font-bold text-xl text-gray-900">98.7%</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom wave shape */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none transform">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 text-gray-100">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.32,118.92,163.89,95.92,321.39,56.44Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;