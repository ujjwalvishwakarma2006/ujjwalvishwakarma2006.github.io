import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star } from 'lucide-react';
import { getIcon } from '../../utils/iconMap';
import portfolioData from '../../data/portfolioData.json';
import './FeaturedProjects.css';

const FeaturedProjects = () => {
  // Filter only featured projects from the data
  const featuredProjects = portfolioData.projects.filter(p => p.featured);

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
        {featuredProjects.map((project) => {
          const IconComponent = getIcon(project.icon);
          return (
          <motion.div
            key={project.id}
            className="project-card"
            variants={cardVariants}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="project-image">
              {project.image ? (
                <img src={project.image} alt={project.title} className="project-thumbnail" />
              ) : (
                <div className="project-icon">
                  <IconComponent size={48} />
                </div>
              )}
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
        );
        })}
      </div>
    </motion.div>
  );
};

export default FeaturedProjects;
