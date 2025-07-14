import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  return (
    <div className="hero">
      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-text">
            <motion.div className="hero-greeting" variants={itemVariants}>
              <span className="greeting-text">Hello, I'm</span>
            </motion.div>
            
            <motion.h1 className="hero-name" variants={itemVariants}>
              <span className="name-highlight">Ujjwal</span>
              <br />
              <span className="name-primary">Vishwakarma</span>
            </motion.h1>
            
            <motion.div className="hero-role" variants={itemVariants}>
              <div className="role-container">
                <span className="role-text">CS Student</span>
                <span className="role-separator">•</span>
                <span className="role-text">Aspiring Developer</span>
                <span className="role-separator">•</span>
                <span className="role-text">Tech Enthusiast</span>
              </div>
            </motion.div>
            
            <motion.p className="hero-description" variants={itemVariants}>
              Computer Science student passionate about Deep Learning, C++, Linux, and React development. 
              Currently building innovative projects and seeking opportunities to contribute to cutting-edge 
              technologies while expanding my skills in software development and machine learning.
            </motion.p>
            
            <motion.div className="hero-actions" variants={itemVariants}>
              <Link to="/projects" className="btn btn-primary">
                View My Work <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Let's Connect
              </Link>
            </motion.div>
            
            <motion.div className="hero-social" variants={itemVariants}>
              <a 
                href="https://github.com/ujjwalVishwakarma2006" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/ujjwal-iitjammu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:contact@ujjwalvishwakarma.com"
                className="social-link"
                aria-label="Send Email"
              >
                <Mail size={24} />
              </a>
            </motion.div>
          </div>
          
          <motion.div className="hero-image" variants={imageVariants}>
            <div className="image-container">
              <div className="profile-image">
                {/* Placeholder for profile image */}
                <div className="profile-placeholder">
                  <span className="profile-initials">UV</span>
                </div>
              </div>
              <div className="floating-elements">
                <div className="floating-element element-1"></div>
                <div className="floating-element element-2"></div>
                <div className="floating-element element-3"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Animated Background */}
      <div className="hero-bg">
        <div className="bg-gradient"></div>
        <div className="bg-particles">
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className={`particle particle-${i % 3}`}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
