import React from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="font-inter text-gray-800 bg-white">
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Education />
        <Contact />
        <Footer />
        <ScrollToTop />
      </main>
    </div>
  );
}

export default App;