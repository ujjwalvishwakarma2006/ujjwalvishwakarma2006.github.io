import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Search, Filter } from 'lucide-react';
import { getIcon } from '../../utils/iconMap';
import portfolioData from '../../data/portfolioData.json';
import './Projects.css';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hasAnimated, setHasAnimated] = useState(false);

  const projects = portfolioData.projects;

  const categories = ['All', ...new Set(projects.map(p => p.category))];

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
            {filteredProjects.map(project => {
              const IconComponent = getIcon(project.icon);
              return (
              <div
                key={project.id}
                className="project-card"
              >
                <div className="project-image">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="project-thumbnail" />
                  ) : (
                    <div className="project-icon">
                      <IconComponent size={48} />
                    </div>
                  )}
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
            );
            })}
          </div>
        ) : (
          <motion.div className="projects-grid" variants={containerVariants}>
            {filteredProjects.map(project => {
              const IconComponent = getIcon(project.icon);
              return (
              <motion.div
                key={project.id}
                className="project-card"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.15 } }}
              >
                <div className="project-image">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="project-thumbnail" />
                  ) : (
                    <div className="project-icon">
                      <IconComponent size={48} />
                    </div>
                  )}
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
            );
            })}
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
