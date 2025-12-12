import React from 'react';
import { Heart } from 'lucide-react';
import { getIcon } from '../../utils/iconMap';
import portfolioData from '../../data/portfolioData.json';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { personalInfo, socialProfiles } = portfolioData;

  // Get GitHub, LinkedIn, and Email for footer
  const socialLinks = socialProfiles.filter(p => 
    ['GitHub', 'LinkedIn', 'Email'].includes(p.name)
  );

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3 className="footer-name">{personalInfo.name}</h3>
            <p className="footer-tagline">
              {personalInfo.tagline}
            </p>
          </div>

          <div className="footer-social">
            {socialLinks.map((link) => {
              const IconComponent = getIcon(link.icon);
              const isEmail = link.url.startsWith('mailto:');
              
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target={isEmail ? "_self" : "_blank"}
                  rel={isEmail ? "" : "noopener noreferrer"}
                  className="social-link"
                  aria-label={link.name}
                >
                  <IconComponent size={20} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
          </div>
          
          <div className="footer-credit">
            <p>
              Made with <Heart size={16} className="heart-icon" /> using React & Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
