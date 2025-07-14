import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Code, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import ProfileLinks from '../../components/ProfileLinks/ProfileLinks';
import FeaturedProjects from '../../components/FeaturedProjects/FeaturedProjects';
import './Home.css';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
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
      className="home"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <motion.section className="hero-section" variants={itemVariants}>
        <Hero />
      </motion.section>

      {/* Profile Links Section */}
      <motion.section className="profile-links-section section" variants={itemVariants}>
        <div className="container">
          <h2 className="heading-2 text-center mb-4">Connect With Me</h2>
          <ProfileLinks />
        </div>
      </motion.section>

      {/* Featured Projects Section */}
      <motion.section className="featured-projects-section section" variants={itemVariants}>
        <div className="container">
          <div className="section-header">
            <h2 className="heading-2">Featured Projects</h2>
            <Link to="/projects" className="btn btn-secondary">
              View All Projects <ArrowRight size={18} />
            </Link>
          </div>
          <FeaturedProjects />
        </div>
      </motion.section>

      {/* Quick Stats Section */}
      <motion.section className="stats-section section" variants={itemVariants}>
        <div className="container">
          <div className="stats-grid">
            <motion.div
              className="stat-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="stat-icon">
                <Code size={32} />
              </div>
              <div className="stat-content">
                <h3 className="stat-number">5+</h3>
                <p className="stat-label">Projects Completed</p>
              </div>
            </motion.div>

            <motion.div
              className="stat-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="stat-icon">
                <BookOpen size={32} />
              </div>
              <div className="stat-content">
                <h3 className="stat-number">4+</h3>
                <p className="stat-label">Active Projects</p>
              </div>
            </motion.div>

            <motion.div
              className="stat-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="stat-icon">
                <Github size={32} />
              </div>
              <div className="stat-content">
                <h3 className="stat-number">100+</h3>
                <p className="stat-label">GitHub Contributions</p>
              </div>
            </motion.div>

            <motion.div
              className="stat-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="stat-icon">
                <Linkedin size={32} />
              </div>
              <div className="stat-content">
                <h3 className="stat-number">8+</h3>
                <p className="stat-label">Technologies Mastered</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section className="cta-section section" variants={itemVariants}>
        <div className="container">
          <div className="cta-content">
            <h2 className="heading-2">Let's Work Together</h2>
            <p className="cta-description">
              Passionate about Deep Learning, C++, Linux, and React development. 
              Currently seeking opportunities to contribute to innovative projects and grow my skills in cutting-edge technologies.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Get In Touch <ArrowRight size={18} />
              </Link>
              <a 
                href="/resume.pdf" 
                className="btn btn-secondary"
                download
                aria-label="Download Resume"
              >
                Download Resume <Download size={18} />
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Home;
