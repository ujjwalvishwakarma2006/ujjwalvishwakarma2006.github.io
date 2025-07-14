import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Search, Filter, FileText, Database, Brain, Music, Globe } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hasAnimated, setHasAnimated] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'Document Identity Aggregator',
      description: 'Creating a system to aggregate and verify CV data using web crawling, OCR and NLP to detect inconsistencies.',
      icon: FileText,
      technologies: ['Selenium', 'Tesseract OCR', 'NLP', 'APIs', 'Web Crawling'],
      category: 'AI/ML',
      githubUrl: 'https://github.com/Prit44421/document_aggregation',
      liveUrl: null,
      status: 'In Development',
      date: 'May 2025',
      details: 'Developing a system to aggregate and cross-verify candidate CV data from multiple online sources to detect inconsistencies and validate authenticity.'
    },
    {
      id: 2,
      title: 'Library Management System - Advanced',
      description: 'A comprehensive C++/SQLite-based system for efficient library resource and user management.',
      icon: Database,
      technologies: ['C++', 'SQLite', 'CMake', 'Modern C++17', 'Shell Scripting', 'SQL', 'Git'],
      category: 'Systems Programming',
      githubUrl: 'https://github.com/ujjwalvishwakarma2006/lms',
      liveUrl: null,
      status: 'Active',
      date: 'Present',
      details: 'Designed and implemented a modular library management system supporting user and book CRUD operations, persistent storage, and robust data validation. Integrated direct database access with in-memory operations for performance and consistency, and automated build/test workflows using CMake and scripts.'
    },
    {
      id: 3,
      title: 'Deep Learning with Python Projects',
      description: 'Practiced Deep Learning from the book along with some research-inspired experiments.',
      icon: Brain,
      technologies: ['Colab', 'TensorFlow', 'Keras', 'Python', 'Deep Learning'],
      category: 'AI/ML',
      githubUrl: 'https://github.com/ujjwalvishwakarma2006/deep-learning-with-python',
      liveUrl: null,
      status: 'Ongoing',
      date: 'Present',
      details: 'Following the "Deep Learning with Python" by François Chollet book with additional research-inspired experiments and implementations.'
    },
    {
      id: 4,
      title: 'Spotify to YT Music Playlist Transfer',
      description: 'Transferred a playlist of songs from Spotify to YouTube Music with a user-friendly GUI.',
      icon: Music,
      technologies: ['Google APIs', 'Spotify APIs', 'PyQt5', 'Python'],
      category: 'Desktop Application',
      githubUrl: 'https://github.com/ujjwalvishwakarma2006/spotify-to-ytmusic',
      liveUrl: null,
      status: 'Completed',
      date: 'Dec 2024',
      details: 'Built a desktop application to seamlessly transfer playlists between Spotify and YouTube Music using their respective APIs.'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Framer Motion showcasing my work and skills.',
      icon: Globe,
      technologies: ['React', 'Framer Motion', 'CSS3', 'Vite', 'JavaScript'],
      category: 'Web Development',
      githubUrl: 'https://github.com/ujjwalvishwakarma2006/ujjwalvishwakarma2006.github.io',
      liveUrl: 'https://ujjwalvishwakarma2006.github.io',
      status: 'Live',
      date: 'Jan 2025',
      details: 'Personal portfolio website featuring responsive design, smooth animations, dark/light theme toggle, and optimized performance.'
    }
  ];

  const categories = ['All', 'AI/ML', 'Systems Programming', 'Web Development', 'Desktop Application'];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      className="projects-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      onAnimationComplete={() => setHasAnimated(true)}
    >
      <div className="container">
        <motion.div className="projects-header" variants={itemVariants}>
          <h1 className="heading-1">My Projects</h1>
          <p className="projects-subtitle">
            A collection of my work showcasing various technologies and solutions
          </p>
        </motion.div>

        <motion.div className="projects-filters" variants={itemVariants}>
          <div className="search-box">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="category-filters">
            <Filter size={20} />
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {hasAnimated ? (
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <div
                key={project.id}
                className="project-card"
              >
                <div className="project-image">
                  <div className="project-icon">
                    <project.icon size={48} />
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-header">
                    <div className="project-header-left">
                      <h3 className="project-title">{project.title}</h3>
                      <div className="project-links">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                            title="View Source Code"
                          >
                            <Github size={16} />
                            <span>GitHub</span>
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                            title="View Live Demo"
                          >
                            <ExternalLink size={16} />
                            <span>Live Demo</span>
                          </a>
                        )}
                      </div>
                      <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                        {project.status}
                      </span>
                    </div>
                    <span className="project-date">{project.date}</span>
                  </div>
                  <p className="project-description">{project.description}</p>
                  {project.details && (
                    <p className="project-details">{project.details}</p>
                  )}
                  
                  <div className="project-technologies">
                    {project.technologies.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <motion.div className="projects-grid" variants={containerVariants}>
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                className="project-card"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.15 } }}
              >
                <div className="project-image">
                  <div className="project-icon">
                    <project.icon size={48} />
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-header">
                    <div className="project-header-left">
                      <h3 className="project-title">{project.title}</h3>
                      <div className="project-links">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                            title="View Source Code"
                          >
                            <Github size={16} />
                            <span>GitHub</span>
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                            title="View Live Demo"
                          >
                            <ExternalLink size={16} />
                            <span>Live Demo</span>
                          </a>
                        )}
                      </div>
                      <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                        {project.status}
                      </span>
                    </div>
                    <span className="project-date">{project.date}</span>
                  </div>
                  <p className="project-description">{project.description}</p>
                  {project.details && (
                    <p className="project-details">{project.details}</p>
                  )}
                  
                  <div className="project-technologies">
                    {project.technologies.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {filteredProjects.length === 0 && (
          hasAnimated ? (
            <div className="no-results">
              <p>No projects found matching your criteria.</p>
            </div>
          ) : (
            <motion.div className="no-results" variants={itemVariants}>
              <p>No projects found matching your criteria.</p>
            </motion.div>
          )
        )}
      </div>
    </motion.div>
  );
};

export default Projects;
