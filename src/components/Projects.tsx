import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import hrms from '../assets/images/hrms.png';
import gobitoday from '../assets/images/gobi.png';
import mahesh from "../assets/images/mahes.png"

interface Project {
  title: string;
  description: string;
  fullDescription?: string;
  technologies: string[];
  image: string;
  features?: string[];
  challenges?: string[];
  outcome?: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "HRMS System",
      description: "Complete HR management system with employee tracking, leave management, and payroll processing.",
      fullDescription: "A comprehensive Human Resource Management System built to streamline HR operations. The system handles everything from employee onboarding to payroll processing, making HR management efficient and error-free.",
      technologies: ["React.js", "NextJs", "PostgresSQL", "Supabase","Refine", "Ant D"],
      image: hrms,
      features: [
        "Employee profile management",
        "Leave tracking and approval system",
        "Automated payroll calculation",
        "Performance evaluation tools",
        "Document management system"
      ],
      challenges: [
        "Implementing complex payroll calculations",
        "Ensuring data security and privacy",
        "Building a scalable architecture"
      ],
      outcome: "Successfully deployed and currently used by multiple companies, managing over 500+ employees efficiently."
    },
    {
      title: "Job Portal",
      description: "Feature-rich job portal with job posting, application tracking, and candidate management.",
      fullDescription: "A modern job portal platform connecting employers with potential candidates. The system features advanced search capabilities, application tracking, and automated candidate screening.",
      technologies: ["Next.js", "Supabase", "Tailwind CSS"],
      image: gobitoday,
      features: [
        "Advanced job search and filtering",
        "Resume parsing and analysis",
        "Applicant tracking system",
        "Interview scheduling",
        "Analytics dashboard"
      ],
      challenges: [
        "Implementing real-time notifications",
        "Optimizing search performance",
        "Building a mobile-responsive design"
      ],
      outcome: "Platform has facilitated over 1000+ successful job placements within 6 months of launch."
    },
    {
      title: "Static Websites",
      description: "Collection of responsive static websites for various clients with modern design principles.",
      fullDescription: "Created multiple high-performance static websites for clients across different industries. Each website is crafted with modern design principles and optimal performance in mind.",
      technologies: ["React.js", "Tailwind CSS", "Ant Design","Material UI"],
      image: mahesh,
      features: [
        "Responsive layouts",
        "SEO optimization",
        "Performance optimization",
        "Modern UI/UX design",
        "Content management system"
      ],
      challenges: [
        "Achieving optimal performance scores",
        "Implementing complex animations",
        "Ensuring cross-browser compatibility"
      ],
      outcome: "Delivered 10+ websites with 90+ Google Lighthouse scores and improved client engagement metrics."
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white dark:bg-gray-800 p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedProject.title}
                </h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-6">
                <div className="aspect-video mb-6 rounded-lg overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="prose max-w-none dark:prose-invert mb-6">
                  <p className="text-gray-600 dark:text-gray-300">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedProject.features && (
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Key Features</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedProject.challenges && (
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Challenges Overcome</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                      {selectedProject.challenges.map((challenge, index) => (
                        <li key={index}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedProject.outcome && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Outcome</h3>
                    <p className="text-gray-600 dark:text-gray-300">{selectedProject.outcome}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;