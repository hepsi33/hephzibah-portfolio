import React from 'react';
import Scene from './components/Scene';
import FloatingParticles from './components/FloatingParticles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="app-container">
        <Navbar />
        <div className="canvas-container">
          <Scene />
        </div>
        <FloatingParticles />

        <main style={{ position: 'relative', zIndex: 20 }}>
          <Hero />
          <div className="container main-content-sections" style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            <About />
            <Experience />
            <Projects />
            <Education />
            <Certifications />
            <Skills />
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
