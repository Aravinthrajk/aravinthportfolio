import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Opalminds IT Solutions",
      role: "Full Stack Developer",
      period: "2022 - Present",
      location: "Trichy, Tamil Nadu",
      description: [
        "Developed and maintained HRMS and Job Portal applications using React.js and Next.js",
        "Implemented responsive designs using Tailwind CSS and Material UI",
        "Worked with Node.js and MySQL for backend development",
        "Integrated third-party APIs and services"
      ]
    },
    {
      company: "DSM Soft Pvt Ltd",
      role: "Geospatial Engineer",
      period: "2019 - 2022",
      location: "Chennai, Tamil Nadu",
      description: [
        "Handled geospatial data processing and analysis",
        "Collaborated with cross-functional teams on various projects",
        "Developed technical documentation and reports",
        "Managed client relationships and project deliverables"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-8 bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 transition-colors duration-300"
            >
              <div className="flex items-start mb-4">
                <Briefcase size={24} className="text-blue-600 mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{exp.role}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                </div>
              </div>

              <div className="flex items-center mb-4 text-gray-600 dark:text-gray-300">
                <Calendar size={18} className="mr-2" />
                <span>{exp.period}</span>
                <span className="mx-2">•</span>
                <span>{exp.location}</span>
              </div>

              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;