import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, Search, Mail, Briefcase } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  // Currently no professional experience - looking for opportunities!
  // When you get experience, uncomment and update the experiences array below:
  
  /*
  const experiences = [
    {
      id: 1,
      title: 'Senior Software Developer',
      company: 'Tech Innovation Corp',
      location: 'Remote',
      period: '2023 - Present',
      type: 'Full-time',
      description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.',
      achievements: [
        'Improved application performance by 40%',
        'Led a team of 5 developers',
        'Implemented CI/CD pipelines'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'MongoDB', 'TypeScript'],
      logo: '/api/placeholder/80/80'
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd',
      location: 'Mumbai, India',
      period: '2022 - 2023',
      type: 'Full-time',
      description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create user-friendly interfaces.',
      achievements: [
        'Delivered 15+ client projects',
        'Reduced load times by 60%',
        'Implemented responsive designs'
      ],
      technologies: ['React', 'Express.js', 'PostgreSQL', 'Docker'],
      logo: '/api/placeholder/80/80'
    },
    {
      id: 3,
      title: 'Frontend Developer Intern',
      company: 'StartupXYZ',
      location: 'Bangalore, India',
      period: '2021 - 2022',
      type: 'Internship',
      description: 'Worked on developing responsive web interfaces and learned modern development practices in a fast-paced startup environment.',
      achievements: [
        'Built 5 major features',
        'Learned agile methodology',
        'Contributed to open source'
      ],
      technologies: ['React', 'JavaScript', 'CSS3', 'Git'],
      logo: '/api/placeholder/80/80'
    }
  ];
  */

  const lookingForWork = {
    status: 'Available for Opportunities',
    seeking: [
      'Deep Learning Engineer Positions',
      'Machine Learning Developer Roles',
      'C++ Software Developer Opportunities',
      'Linux Systems Developer',
      'React.js Frontend Developer'
    ],
    preferences: [
      'Remote or Hybrid Work',
      'Tech Startups or Research Companies',
      'Learning & Growth Opportunities',
      'Collaborative Team Environment'
    ],
    skills: [
      'C++', 'Python', 'Deep Learning', 'Linux', 'TensorFlow', 
      'PyTorch', 'React.js', 'JavaScript', 'Git', 'Docker'
    ]
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

        {/* Commented out experience timeline for future use */}
        {/*
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="experience-item"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="experience-content">
                <div className="experience-header-info">
                  <img src={exp.logo} alt={exp.company} className="company-logo" />
                  <div className="experience-meta">
                    <h3 className="experience-title">{exp.title}</h3>
                    <h4 className="company-name">{exp.company}</h4>
                    <div className="experience-details">
                      <span className="experience-period">
                        <Calendar size={16} />
                        {exp.period}
                      </span>
                      <span className="experience-location">
                        <MapPin size={16} />
                        {exp.location}
                      </span>
                      <span className={`experience-type ${exp.type.toLowerCase()}`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="experience-description">{exp.description}</p>

                <div className="experience-achievements">
                  <h5>Key Achievements:</h5>
                  <ul>
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div className="experience-technologies">
                  <h5>Technologies Used:</h5>
                  <div className="tech-tags">
                    {exp.technologies.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="timeline-connector">
                <div className="timeline-dot"></div>
                {index < experiences.length - 1 && <div className="timeline-line"></div>}
              </div>
            </motion.div>
          ))}
        </div>
        */}
      </div>
    </motion.div>
  );
};

export default Experience;
