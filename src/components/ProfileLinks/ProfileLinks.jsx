import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Code, Trophy, ExternalLink } from 'lucide-react';
import './ProfileLinks.css';

const ProfileLinks = () => {
  const profiles = [
    {
      name: 'GitHub',
      username: 'ujjwalVishwakarma2006',
      url: 'https://github.com/ujjwalVishwakarma2006',
      icon: Github,
      description: 'My code repositories and open source contributions',
      stats: '50+ repositories',
      color: '#333'
    },
    {
      name: 'LinkedIn',
      username: 'ujjwal-iitjammu',
      url: 'https://linkedin.com/in/ujjwal-iitjammu',
      icon: Linkedin,
      description: 'Professional network and career updates',
      stats: '500+ connections',
      color: '#0077b5'
    },
    {
      name: 'LeetCode',
      username: 'ujjwalVishwakarma2006',
      url: 'https://leetcode.com/ujjwalVishwakarma2006',
      icon: Code,
      description: 'Coding challenges and algorithm solutions',
      stats: '200+ problems solved',
      color: '#ffa116'
    },
    {
      name: 'Codeforces',
      username: '2023ucs0116',
      url: 'https://codeforces.com/profile/2023ucs0116',
      icon: Trophy,
      description: 'Competitive programming contests and ratings',
      stats: 'Expert level',
      color: '#1f8dd6'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      className="profile-links"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="profiles-grid">
        {profiles.map((profile) => {
          const IconComponent = profile.icon;
          return (
            <motion.a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="profile-card"
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="profile-header">
                <div className="profile-icon" style={{ backgroundColor: profile.color }}>
                  <IconComponent size={32} color="white" />
                </div>
                <div className="profile-info">
                  <h3 className="profile-name">{profile.name}</h3>
                  <p className="profile-username">@{profile.username}</p>
                </div>
                <div className="external-link-icon">
                  <ExternalLink size={20} />
                </div>
              </div>
              
              <p className="profile-description">{profile.description}</p>
              
              <div className="profile-stats">
                <span className="stats-text">{profile.stats}</span>
              </div>
              
              <div className="profile-action">
                <span className="action-text">Visit Profile</span>
              </div>
            </motion.a>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ProfileLinks;
