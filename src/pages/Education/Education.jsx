import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, BookOpen, GraduationCap, School, Building2 } from 'lucide-react';
import './Education.css';

const Education = () => {
  const education = [
    {
      id: 1,
      degree: 'Bachelor of Technology (B.Tech)',
      stream: 'Computer Science and Engineering',
      institution: 'Indian Institute of Technology, Jammu',
      location: 'Jammu, India',
      period: '2023 - 2027',
      grade: 'CGPA: 8.42/10',
      description: 'Specialized in software engineering, data structures, algorithms, discrete mathematics, programming languages, operating systems, database management systems, computer networks and web technologies. Simultaneously participated in various hackathons and coding competitions, enhancing practical skills in software development.',
      achievements: [
        'Won INT MAESTRO at Anhad\'25 at IIT JAMMU',
        'Showed leadership skills while being Class Representative',
        'Won third place in Line Follower Robot competition at Anhad\'24',
      ],
      logoIcon: GraduationCap,
      logoColor: '#667eea'
    },
    {
      id: 2,
      degree: 'CBSE 12th Boards',
      stream: 'Mathematics',
      institution: 'Indira International School, Kota',
      location: 'Kota, Rajasthan',
      period: '2022 - 2023',
      grade: 'Percentage: 92%',
      description: 'Focused on advanced mathematics topics including calculus, algebra, and statistics.',
      logoIcon: School,
      logoColor: '#764ba2'
    }
  ];

  const certifications = [
    // {
    //   name: 'AWS Certified Solutions Architect',
    //   issuer: 'Amazon Web Services',
    //   date: '2023',
    //   credentialId: 'AWS-SA-2023-001'
    // },
    // {
    //   name: 'React Developer Certification',
    //   issuer: 'Meta',
    //   date: '2022',
    //   credentialId: 'META-REACT-2022-456'
    // },
    // {
    //   name: 'Full Stack Web Development',
    //   issuer: 'freeCodeCamp',
    //   date: '2021',
    //   credentialId: 'FCC-FS-2021-789'
    // }
  ];

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
            {education.map((edu) => (
              <motion.div
                key={edu.id}
                className="education-card"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="education-header-info">
                  <div className="institution-logo" style={{ backgroundColor: edu.logoColor }}>
                    <edu.logoIcon size={32} color="white" />
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
            ))}
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
