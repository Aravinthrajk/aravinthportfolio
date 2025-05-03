import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Aravinth Raj
            </span>
          </div>

          <div className="flex space-x-6 mb-8">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:aravinth09k@gmail.com"
              className="hover:text-blue-400 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="text-gray-400 text-sm text-center">
            <p>© {new Date().getFullYear()} Aravinth Raj. All rights reserved.</p>
            <p className="mt-2">
              Built with React.js, Tailwind CSS, and ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;