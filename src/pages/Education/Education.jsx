import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { getIcon } from '../../utils/iconMap';
import portfolioData from '../../data/portfolioData.json';
import './Education.css';

const Education = () => {
  const { academic: education, certifications } = portfolioData.education;

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      className="education-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container">
        <motion.div className="education-header" variants={itemVariants}>
          <h1 className="heading-1">Education & Certifications</h1>
          <p className="education-subtitle">
            My academic journey and professional certifications that shaped my career
          </p>
        </motion.div>

        <div className="education-section">
          <motion.h2 className="section-title" variants={itemVariants}>
            <BookOpen size={24} />
            Academic Background
          </motion.h2>

          <div className="education-grid">
            {education.map((edu) => {
              const LogoIcon = getIcon(edu.logoIcon);
              return (
              <motion.div
                key={edu.id}
                className="education-card"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="education-header-info">
                  <div className="institution-logo" style={{ backgroundColor: edu.logoColor }}>
                    <LogoIcon size={32} color="white" />
                  </div>
                  <div className="education-meta">
                    <h3 className="degree-title">{edu.degree}</h3>
                    <h4 className="stream-name">{edu.stream}</h4>
                    <h5 className="institution-name">{edu.institution}</h5>
                    <div className="education-details">
                      <span className="education-period">
                        <Calendar size={16} />
                        {edu.period}
                      </span>
                      <span className="education-location">
                        <MapPin size={16} />
                        {edu.location}
                      </span>
                      <span className="education-grade">{edu.grade}</span>
                    </div>
                  </div>
                </div>

                <p className="education-description">{edu.description}</p>

                {/* Optional achievements section */}
                {edu.achievements && edu.achievements.length > 0 && (
                  <div className="education-achievements">
                    <h5>Key Achievements:</h5>
                    <ul>
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            );
            })}
          </div>
        </div>

        <div className="certifications-section">
          <motion.h2 className="section-title" variants={itemVariants}>
            <Award size={24} />
            Professional Certifications
          </motion.h2>

          <motion.div className="certifications-grid" variants={containerVariants}>
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="certification-card"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="certification-content">
                  <h4 className="certification-name">{cert.name}</h4>
                  <p className="certification-issuer">{cert.issuer}</p>
                  <div className="certification-details">
                    <span className="certification-date">{cert.date}</span>
                    <span className="certification-id">ID: {cert.credentialId}</span>
                  </div>
                </div>
                <div className="certification-badge">
                  <Award size={24} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
