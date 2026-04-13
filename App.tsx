import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Certifications from './components/Certifications';

function App() {
  return (
    <div className="bg-slate-900 text-slate-200 min-h-screen font-sans selection:bg-primary-500 selection:text-white">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Contact />
            </>
          } />
          <Route path="/certifications" element={<Certifications />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;