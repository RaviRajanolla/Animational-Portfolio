import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Ravi Rajanolla</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Java Full Stack Developer passionate about creating scalable, efficient, and 
              user-friendly applications. Open to full-time opportunities, freelance projects, 
              and team collaborations.
            </p>
            <p className="text-gray-400">
              Let's build something impactful together. Reach out anytime.
            </p>
          </div>
          
          <div className="md:text-right">
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="flex md:justify-end space-x-4 mb-6">
              <a
                href="https://github.com/RaviRajanolla"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors duration-300"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/contactravir"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors duration-300"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            
            <div className="space-y-2 text-gray-400">
              <p>📧 Ravikumar63964@gmail.com</p>
              <p>📞 +91 7702114099</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Ravi Rajanolla — Java Full Stack Developer
            </p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center text-gray-400 text-sm"
            >
              <span>Made with</span>
              <Heart className="h-4 w-4 mx-1 text-red-500" />
              <span>and React</span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;