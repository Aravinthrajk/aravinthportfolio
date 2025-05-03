import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Briefcase, GraduationCap } from 'lucide-react';
import ark from "../assets/images/akraj.jpg"
const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src={ark}
              alt="Aravinth Image"
              className="rounded-lg shadow-xl w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start">
              <Code2 size={24} className="text-blue-600 mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Full Stack Developer</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  2+ years of experience in React.js and Next.js development, creating modern and responsive web applications.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Briefcase size={24} className="text-blue-600 mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Current Role</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Working at Opalminds IT Solutions, Trichy, specializing in HRMS and Job Portal development.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <GraduationCap size={24} className="text-blue-600 mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Background</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Transitioned from Geospatial Engineering (3 years at DSM Soft Pvt Ltd) to Full Stack Development,
                  bringing a unique perspective to problem-solving.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;