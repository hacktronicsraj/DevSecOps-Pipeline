import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div>
            <h3 className="text-white text-xl font-bold mb-4">F1 Hub</h3>
            <p className="text-gray-400">Your ultimate destination for Formula 1 news, results, and insights.</p>
          </div>
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">Home</a>
              </li>
              <li>
                <a href="#calendar" className="text-gray-400 hover:text-red-500 transition-colors duration-200">Calendar</a>
              </li>
              <li>
                <a href="#teams" className="text-gray-400 hover:text-red-500 transition-colors duration-200">Teams</a>
              </li>
              <li>
                <a href="#standings" className="text-gray-400 hover:text-red-500 transition-colors duration-200">Standings</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">Facebook</a>
            </div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-gray-800"
        >
          <p className="text-center text-gray-400">&copy; 2024 F1 Hub. All rights reserved.</p>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
    </footer>
  );
};

export default Footer;