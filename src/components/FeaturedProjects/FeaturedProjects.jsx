import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, FileText, Database, Brain } from 'lucide-react';
import './FeaturedProjects.css';

const FeaturedProjects = () => {
  const featuredProjects = [
    {
      id: 1,
      title: 'Document Identity Aggregator',
      description: 'Creating a system to aggregate and verify CV data using web crawling, OCR and NLP to detect inconsistencies and validate authenticity.',
      icon: FileText,
      technologies: ['Selenium', 'Tesseract OCR', 'NLP', 'APIs', 'Web Crawling'],
      githubUrl: 'https://github.com/Prit44421/document_aggregation',
      liveUrl: null,
      featured: true,
      status: 'In Development'
    },
    {
      id: 2,
      title: 'Library Management System - Advanced',
      description: 'A comprehensive C++/SQLite-based system for efficient library resource and user management with CRUD operations and robust data validation.',
      icon: Database,
      technologies: ['C++', 'SQLite', 'CMake', 'Modern C++17', 'Shell Scripting'],
      githubUrl: 'https://github.com/ujjwalvishwakarma2006/lms',
      liveUrl: null,
      featured: true,
      status: 'Active'
    },
    {
      id: 3,
      title: 'Deep Learning with Python Projects',
      description: 'Practicing Deep Learning from François Chollet\'s book along with research-inspired experiments using TensorFlow and Keras.',
      icon: Brain,
      technologies: ['Python', 'TensorFlow', 'Keras', 'Google Colab', 'Deep Learning'],
      githubUrl: 'https://github.com/ujjwalvishwakarma2006/deep-learning-with-python',
      liveUrl: null,
      featured: true,
      status: 'Ongoing'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live':
        return '#10b981';
      case 'In Development':
        return '#f59e0b';
      case 'Beta':
        return '#3b82f6';
      default:
        return '#6b7280';
    }
  };

  return (
    <motion.div
      className="featured-projects"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="projects-grid">
        {featuredProjects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            variants={cardVariants}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="project-image">
              <div className="project-icon">
                <project.icon size={48} />
              </div>
              <div className="project-overlay">
                <div className="project-links">
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="View GitHub Repository"
                    >
                      <Github size={20} />
                    </motion.a>
                  )}
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="View Live Demo"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  )}
                </div>
              </div>
              {project.featured && (
                <div className="featured-badge">
                  <Star size={14} />
                  <span>Featured</span>
                </div>
              )}
              <div 
                className="status-badge" 
                style={{ backgroundColor: getStatusColor(project.status) }}
              >
                {project.status}
              </div>
            </div>

            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-technologies">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default FeaturedProjects;
