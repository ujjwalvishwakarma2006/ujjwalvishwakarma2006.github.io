import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, Search, Mail, Briefcase } from 'lucide-react';
import portfolioData from '../../data/portfolioData.json';
import './Experience.css';

const Experience = () => {
  const { lookingForWork } = portfolioData.experience;

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

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      className="experience-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container">
        <motion.div className="experience-header" variants={itemVariants}>
          <h1 className="heading-1">Professional Experience</h1>
          <p className="experience-subtitle">
            Currently seeking opportunities to start my professional journey in software development
          </p>
        </motion.div>

        {/* Looking for Work Section */}
        <motion.div className="looking-for-work" variants={itemVariants}>
          <div className="status-card">
            <div className="status-header">
              <Search size={32} className="status-icon" />
              <div>
                <h2 className="status-title">{lookingForWork.status}</h2>
                <p className="status-subtitle">Ready to contribute and learn in a dynamic team environment</p>
              </div>
            </div>

            <div className="status-content">
              <div className="status-section">
                <h3>
                  <Briefcase size={20} />
                  Seeking Opportunities
                </h3>
                <ul className="opportunity-list">
                  {lookingForWork.seeking.map((role, index) => (
                    <li key={index}>{role}</li>
                  ))}
                </ul>
              </div>

              <div className="status-section">
                <h3>
                  <MapPin size={20} />
                  Work Preferences
                </h3>
                <ul className="preferences-list">
                  {lookingForWork.preferences.map((pref, index) => (
                    <li key={index}>{pref}</li>
                  ))}
                </ul>
              </div>

              <div className="status-section">
                <h3>Technical Skills</h3>
                <div className="skills-tags">
                  {lookingForWork.skills.map(skill => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="contact-cta">
              <p>Interested in working together?</p>
              <a href="/contact" className="btn btn-primary">
                <Mail size={16} />
                Get In Touch
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Experience;
