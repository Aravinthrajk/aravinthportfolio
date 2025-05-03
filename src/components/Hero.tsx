import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-500 dark:from-primary-400 dark:via-secondary-300 dark:to-accent-400 bg-clip-text text-transparent">
              Hi, I'm Aravinth Raj
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-8"
          >
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'React.js Expert',
                2000,
                'Next.js Developer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto"
          >
            Passionate about creating modern web applications with React.js, Next.js, and Node.js.
            Currently working at Opalminds IT Solutions, Trichy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center space-x-4 mb-12"
          >
            <a
              href="https://github.com/Aravinthrajk"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/aravinth-raj-7761bb16a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:aravinth09k@gmail.com"
              className="p-2 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <Mail size={24} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-primary-600 dark:bg-primary-500 text-white rounded-full hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors"
            >
              <Download size={20} className="mr-2" />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;