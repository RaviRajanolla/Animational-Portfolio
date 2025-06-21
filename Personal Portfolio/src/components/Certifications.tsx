import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Award, CheckCircle, Calendar, BookOpen, Brain } from 'lucide-react';

const Certifications = () => {
  const [ref, inView] = useInView({ 
    threshold: 0.2, 
    triggerOnScrollStop: true,
    scrollStopDelay: 200 
  });

  const certifications = [
    {
      title: 'Java Full Stack Developer',
      issuer: 'Coding Hub Innovations Pvt. Ltd.',
      date: '2023',
      icon: <Award className="h-8 w-8" />,
      skills: [
        'Spring Boot Framework',
        'Angular Development', 
        'React.js Development',
        'REST API Design',
        'MySQL Database',
        'Project Architecture'
      ],
      description: 'Comprehensive certification program focused on real-world project building and modern development practices. Gained hands-on experience in full-stack application development, deployment strategies, and industry best practices.'
    },
    {
      title: 'AI For Engineer',
      issuer: 'Growth School',
      date: '2025',
      icon: <Brain className="h-8 w-8" />,
      skills: [
        'Artificial Intelligence Fundamentals',
        'Machine Learning for Engineers',
        'AI Integration in Software Development',
        'Data Analysis & Processing',
        'AI Tools & Frameworks',
        'Engineering Applications of AI'
      ],
      description: 'Advanced certification focusing on AI applications in engineering and software development. Covered practical implementation of AI solutions, machine learning integration, and modern AI tools for enhanced development workflows.',
      certificateUrl: 'https://s3.ap-south-1.amazonaws.com/assets.growthschool.io/certificates/09559ee2-2c75-44f6-bb36-d7f323e476dd_cert.pdf'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
          <p className="text-xl text-gray-600">
            Professional validation of technical expertise and continuous learning
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: inView ? index * 0.2 : 0, ease: "easeOut" }}
              className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 lg:p-10"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center">
                    <div className="text-white">
                      {cert.icon}
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                    <h3 className="text-2xl font-bold text-gray-900">
                      {cert.title}
                    </h3>
                  </div>
                  
                  <div className="flex items-center mb-4 text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="font-medium">{cert.issuer} • {cert.date}</span>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Skills Covered:</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed text-sm mb-4">
                    {cert.description}
                  </p>

                  {cert.certificateUrl && (
                    <a
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-300 text-sm font-medium"
                    >
                      <Award className="h-4 w-4 mr-2" />
                      View Certificate
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;