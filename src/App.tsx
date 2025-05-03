import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white dark:from-gray-900 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300">
        <div className="relative">
          <div className="fixed inset-0 bg-grid-slate-100 dark:bg-grid-slate-900 [mask-image:linear-gradient(0deg,white,transparent)] dark:[mask-image:linear-gradient(0deg,black,transparent)] pointer-events-none"></div>
          <div className="relative z-10">
            <Navbar />
            <main className="text-slate-900 dark:text-slate-100">
              <Hero />
              <About />
              <Experience />
              <Skills />
              <Projects />
              <Contact />
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;