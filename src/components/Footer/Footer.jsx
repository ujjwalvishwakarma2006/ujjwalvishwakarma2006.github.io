import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/ujjwalVishwakarma2006',
      icon: Github
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/ujjwal-iitjammu',
      icon: Linkedin
    },
    {
      name: 'Email',
      url: 'mailto:ujjwalja23@gmail.com',
      icon: Mail
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3 className="footer-name">Ujjwal Vishwakarma</h3>
            <p className="footer-tagline">
              Building the future through code and innovation
            </p>
          </div>

          <div className="footer-social">
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
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
              © {currentYear} Ujjwal Vishwakarma. All rights reserved.
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
