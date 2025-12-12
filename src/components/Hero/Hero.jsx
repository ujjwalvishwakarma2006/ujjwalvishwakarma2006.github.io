import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Hero.css';
import portfolioData from '../../data/portfolioData.json';
import { getIcon } from '../../utils/iconMap';

const Hero = () => {
  const { personalInfo, hero, socialProfiles } = portfolioData;
  
  // Get only the main social links for hero section (GitHub, LinkedIn, Email)
  const heroSocialLinks = socialProfiles.filter(profile => 
    ['Github', 'Linkedin'].includes(profile.icon)
  );
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
              <span className="greeting-text">{hero.greeting}</span>
            </motion.div>
            
            <motion.h1 className="hero-name" variants={itemVariants}>
              <span className="name-highlight">{personalInfo.firstName}</span>
              <br />
              <span className="name-primary">{personalInfo.lastName}</span>
            </motion.h1>
            
            <motion.div className="hero-role" variants={itemVariants}>
              <div className="role-container">
                {hero.roles.map((role, index) => (
                  <React.Fragment key={role}>
                    <span className="role-text">{role}</span>
                    {index < hero.roles.length - 1 && (
                      <span className="role-separator">•</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
            
            <motion.p className="hero-description" variants={itemVariants}>
              {hero.description}
            </motion.p>
            
            <motion.div className="hero-actions" variants={itemVariants}>
              <Link to={hero.primaryCTA.link} className="btn btn-primary">
                {hero.primaryCTA.text} <ArrowRight size={18} />
              </Link>
              <Link to={hero.secondaryCTA.link} className="btn btn-secondary">
                {hero.secondaryCTA.text}
              </Link>
            </motion.div>
            
            <motion.div className="hero-social" variants={itemVariants}>
              {heroSocialLinks.map(profile => {
                const IconComponent = getIcon(profile.icon);
                return (
                  <a 
                    key={profile.name}
                    href={profile.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={`${profile.name} Profile`}
                  >
                    <IconComponent size={24} />
                  </a>
                );
              })}
              <a 
                href={`mailto:${personalInfo.contactEmail}`}
                className="social-link"
                aria-label="Send Email"
              >
                {(() => { const MailIcon = getIcon('Mail'); return <MailIcon size={24} />; })()}
              </a>
            </motion.div>
          </div>
          
          <motion.div className="hero-image" variants={imageVariants}>
            <div className="image-container">
              <div className="profile-image">
                {/* Placeholder for profile image */}
                <div className="profile-placeholder">
                  <span className="profile-initials">{personalInfo.initials}</span>
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
