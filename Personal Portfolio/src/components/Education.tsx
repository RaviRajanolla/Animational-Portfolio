import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({ 
    threshold: 0.2, 
    triggerOnScrollStop: true,
    scrollStopDelay: 200 
  });

  const education = [
    {
      degree: 'Bachelor of Technology',
      field: 'Electrical And Electronics Engineering',
      institution: 'Ellenki College of Engineering and Technology',
      duration: '2020 - 2023',
      location: 'Hyderabad, Telangana',
      highlights: [
        'Engineering Mathematics & Analysis',
        'Circuit Design & Systems Engineering',
        'Programming Fundamentals',
        'Project Management & Technical Communication',
        'Problem-solving & Analytical Thinking',
        'Team Collaboration & Leadership'
      ],
      description: 'Comprehensive engineering education with strong foundation in analytical thinking, problem-solving, and technical communication. Developed systematic approach to complex challenges and project management skills.'
    },
    {
      degree: 'Diploma',
      field: 'Electrical And Electronics Engineering',
      institution: 'RRS College Of Engineering And Technology',
      duration: '2017 - 2020',
      location: 'Hyderabad, Telangana',
      highlights: [
        'Electrical Circuit Analysis',
        'Electronics & Communication Systems',
        'Power Systems & Control Engineering',
        'Digital Electronics & Microprocessors',
        'Industrial Automation & PLC Programming',
        'Technical Drawing & CAD Applications'
      ],
      description: 'Specialized diploma program focusing on electrical and electronics engineering principles, providing hands-on experience with industrial systems and modern engineering practices.'
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-xl text-gray-600">
            Strong academic foundation in engineering principles and technical expertise
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: inView ? index * 0.2 : 0, ease: "easeOut" }}
              className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 lg:p-12"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-xl text-primary-500 font-semibold mb-4">
                    {edu.field}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-gray-700">
                      <BookOpen className="h-5 w-5 mr-2 text-primary-500" />
                      <span className="font-medium">{edu.institution}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Calendar className="h-5 w-5 mr-2 text-primary-500" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-700 md:col-span-2">
                      <MapPin className="h-5 w-5 mr-2 text-primary-500" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {edu.description}
                  </p>
                  
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Learning Areas:</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;