import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Github, Calendar, Users, Database } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({ 
    threshold: 0.2, 
    triggerOnScrollStop: true,
    scrollStopDelay: 200 
  });

  const projects = [
    {
      title: 'MedicoMeet',
      subtitle: 'Doctor Appointment Booking System',
      description: 'A comprehensive healthcare platform featuring admin panel, doctor-patient registration, and real-time booking system with responsive SPA design.',
      technologies: ['Spring Boot', 'ReactJS', 'MySQL'],
      features: [
        'Admin panel for management',
        'Doctor-patient registration',
        'Real-time booking system',
        'Responsive single-page application'
      ],
      previewUrl: 'https://685624772182a3228c7359f1--medicomeet.netlify.app/',
      icon: <Calendar className="h-8 w-8" />
    },
    {
      title: 'Portfolio Website',
      subtitle: 'Personal Showcase Platform',
      description: 'A modern, responsive portfolio website showcasing professional profile, projects, and technical expertise with clean design and optimal user experience.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      features: [
        'Responsive design with modern animations',
        'Interactive project showcase',
        'Professional contact integration',
        'Optimized performance and SEO'
      ],
      previewUrl: 'https://github.com/RaviRajanolla',
      icon: <Users className="h-8 w-8" />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real-world applications demonstrating full-stack development expertise
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: inView ? index * 0.2 : 0, ease: "easeOut" }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                    <div className="text-primary-500">
                      {project.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                    <p className="text-primary-500 font-medium">{project.subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technology Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-300"
                  >
                    <Github className="h-4 w-4 mr-2" />
                   Preview
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;