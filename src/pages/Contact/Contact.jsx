import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import portfolioData from '../../data/portfolioData.json';
import './Contact.css';

const Contact = () => {
  const { personalInfo, socialProfiles } = portfolioData;

  // Get GitHub and LinkedIn for social buttons
  const github = socialProfiles.find(p => p.name === 'GitHub');
  const linkedin = socialProfiles.find(p => p.name === 'LinkedIn');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

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
      className="contact-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container">
        <motion.div className="contact-header" variants={itemVariants}>
          <h1 className="heading-1">Get In Touch</h1>
          <p className="contact-subtitle">
            I'm always excited to work on new projects and collaborate with amazing people.
            Let's create something great together!
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div className="contact-info" variants={itemVariants}>
            <div className="contact-card">
              <Mail size={24} />
              <div>
                <h3>Email</h3>
                <p>{personalInfo.email}</p>
              </div>
            </div>

            <div className="contact-card">
              <Phone size={24} />
              <div>
                <h3>Phone</h3>
                <p>{personalInfo.phone}</p>
              </div>
            </div>

            <div className="contact-card">
              <MapPin size={24} />
              <div>
                <h3>Location</h3>
                <p>{personalInfo.location}</p>
              </div>
            </div>

            <div className="social-links">
              <h3>Follow Me</h3>
              <div className="social-buttons">
                {github && (
                  <a href={github.url} target="_blank" rel="noopener noreferrer">
                    <Github size={20} />
                    GitHub
                  </a>
                )}
                {linkedin && (
                  <a href={linkedin.url} target="_blank" rel="noopener noreferrer">
                    <Linkedin size={20} />
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </motion.div>

          <motion.form className="contact-form" onSubmit={handleSubmit} variants={itemVariants}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="btn btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send size={18} />
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
