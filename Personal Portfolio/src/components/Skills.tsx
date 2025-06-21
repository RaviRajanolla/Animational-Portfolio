import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Code, Database, Globe, Settings, Coffee, Layers, Server, GitBranch, Zap, FileCode, Palette, Monitor, Brain, Cpu, BarChart3, Wrench, Boxes, Repeat } from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({ 
    threshold: 0.2, 
    triggerOnScrollStop: true,
    scrollStopDelay: 200 
  });

  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Globe className="h-8 w-8" />,
      skills: [
        { name: 'ReactJS', icon: <Zap className="h-5 w-5" /> },
        { name: 'Angular', icon: <Code className="h-5 w-5" /> },
        { name: 'JavaScript', icon: <FileCode className="h-5 w-5" /> },
        { name: 'TypeScript', icon: <FileCode className="h-5 w-5" /> },
        { name: 'HTML5', icon: <Monitor className="h-5 w-5" /> },
        { name: 'CSS3', icon: <Palette className="h-5 w-5" /> }
      ],
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Backend',
      icon: <Server className="h-8 w-8" />,
      skills: [
        { name: 'Java', icon: <Coffee className="h-5 w-5" /> },
        { name: 'Spring Boot', icon: <Layers className="h-5 w-5" /> },
        { name: 'REST APIs', icon: <Server className="h-5 w-5" /> },
        { name: 'Spring Data JPA', icon: <Database className="h-5 w-5" /> }
      ],
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'Database & Tools',
      icon: <Database className="h-8 w-8" />,
      skills: [
        { name: 'MySQL', icon: <Database className="h-5 w-5" /> },
        { name: 'Postman', icon: <Settings className="h-5 w-5" /> },
        { name: 'Tomcat', icon: <Server className="h-5 w-5" /> }
      ],
      color: 'from-purple-400 to-purple-600'
    },
    {
      title: 'IDEs & Tools',
      icon: <Settings className="h-8 w-8" />,
      skills: [
        { name: 'Spring Tool Suite (STS)', icon: <Settings className="h-5 w-5" /> },
        { name: 'Visual Studio Code', icon: <Code className="h-5 w-5" /> },
        { name: 'Eclipse IDE', icon: <Code className="h-5 w-5" /> }
      ],
      color: 'from-orange-400 to-orange-600'
    },
    {
      title: 'AI Engineering',
      icon: <Brain className="h-8 w-8" />,
      skills: [
        { name: 'Machine Learning', icon: <Cpu className="h-5 w-5" /> },
        { name: 'AI Integration', icon: <Brain className="h-5 w-5" /> },
        { name: 'Data Analysis', icon: <BarChart3 className="h-5 w-5" /> },
        { name: 'AI Tools & Frameworks', icon: <Settings className="h-5 w-5" /> }
      ],
      color: 'from-pink-400 to-pink-600'
    },
    {
      title: 'Supportive Technologies',
      icon: <Wrench className="h-8 w-8" />,
      skills: [
        { name: 'Bootstrap', icon: <Boxes className="h-5 w-5" /> },
        { name: 'Tailwind CSS', icon: <Palette className="h-5 w-5" /> },
        { name: 'Redux', icon: <Repeat className="h-5 w-5" /> }
      ],
      color: 'from-indigo-400 to-indigo-600'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive expertise across the full development stack and AI engineering
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: inView ? index * 0.15 : 0, ease: "easeOut" }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-6 mx-auto`}>
                <div className="text-white">
                  {category.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="flex items-center justify-center">
                    <div className="flex items-center bg-gray-100 text-gray-700 px-3 py-2 rounded-full text-sm font-medium">
                      <div className="text-primary-500 mr-2">
                        {skill.icon}
                      </div>
                      {skill.name}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;