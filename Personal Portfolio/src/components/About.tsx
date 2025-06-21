import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const About = () => {
  const [ref, inView] = useInView({ 
    threshold: 0.2, 
    triggerOnScrollStop: true,
    scrollStopDelay: 200 
  });

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-8">About Me</h2>
          
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              I'm a passionate <span className="font-semibold text-primary-500">Java Full Stack Developer</span> who 
              enjoys crafting scalable, secure, and modern applications. With strong experience in both backend and 
              frontend technologies, I bring value to teams through clean architecture and efficient development workflows.
            </p>
            
            <div className="grid md:grid-cols-1 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-500">24/7</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Ready for Opportunities</h3>
                <p className="text-gray-600 text-sm">Available for full-time roles, freelance projects, and collaborations</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;