import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';

const Hero = () => {
  const handleDownloadResume = () => {
    window.open('https://drive.google.com/file/d/1HHLiEEHoIsxxS5CT_YXrNrPV8bfZyuwm/view?usp=sharing', '_blank');
  };

  const handleGetInTouch = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
          >
            Ravi <span className="text-primary-500">Rajanolla</span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl lg:text-3xl font-medium text-gray-700 mb-6"
          >
            Full Stack Java Developer 
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-gray-600 mb-8 max-w-2xl"
          >
           Passionate about building responsive frontends and robust Java Spring Boot backends for real-world applications
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <button
              onClick={handleDownloadResume}
              className="inline-flex items-center px-8 py-4 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </button>
            
            <button
              onClick={handleGetInTouch}
              className="inline-flex items-center px-8 py-4 border-2 border-primary-500 text-primary-500 font-medium rounded-lg hover:bg-primary-500 hover:text-white transition-all duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get in Touch
            </button>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="w-96 h-96 lg:w-[450px] lg:h-[450px] bg-gradient-to-br from-primary-100 to-primary-200 rounded-full overflow-hidden shadow-2xl">
              <img 
                src="/images/Profile.jpg" 
                alt="Ravi Rajanolla - Java Full Stack Developer"
                className="w-full h-full object-cover object-top scale-110"
                style={{ 
                  objectPosition: '50% 15%',
                  transform: 'scale(1.15) translateY(-10px)'
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;