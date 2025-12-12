import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ExternalLink, Eye, Heart, MessageCircle, BookOpen, Linkedin, FileText } from 'lucide-react';
import portfolioData from '../../data/portfolioData.json';
import './Articles.css';

const Articles = () => {
  const [activeTab, setActiveTab] = useState('all');

  const { articles } = portfolioData;

  const filteredContent = () => {
    if (activeTab === 'tech') return articles.filter(article => article.type === 'tech');
    if (activeTab === 'research') return articles.filter(article => article.type === 'research');
    return articles;
  };

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      className="articles-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container">
        <motion.div className="articles-header" variants={itemVariants}>
          <h1 className="heading-1">Articles & Research</h1>
          <p className="articles-subtitle">
            Did I mention I love writing? Here you can find my opinions on tech and various research papers (Mostly Deep Learning)
          </p>
        </motion.div>

        <motion.div className="articles-tabs" variants={itemVariants}>
          <button
            className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Articles
          </button>
          <button
            className={`tab-btn ${activeTab === 'tech' ? 'active' : ''}`}
            onClick={() => setActiveTab('tech')}
          >
            <BookOpen size={18} />
            Tech Articles
          </button>
          <button
            className={`tab-btn ${activeTab === 'research' ? 'active' : ''}`}
            onClick={() => setActiveTab('research')}
          >
            <FileText size={18} />
            Research Papers
          </button>
        </motion.div>

        <motion.div className="content-grid" variants={containerVariants}>
          {filteredContent().map(article => (
            <motion.article
              key={article.id}
              className="article-card"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="article-header">
                <div className="article-meta">
                  <span className="publish-date">
                    <Calendar size={16} />
                    {new Date(article.publishDate).toLocaleDateString()}
                  </span>
                  <span className="read-time">{article.readTime}</span>
                  <span className="platform">{article.platform}</span>
                </div>
              </div>

              <h3 className="article-title">{article.title}</h3>
              <p className="article-excerpt">{article.excerpt}</p>

              {/* Show paper authors for research articles */}
              {article.type === 'research' && article.paperAuthors && (
                <div className="paper-info">
                  <p className="paper-authors">Paper by: {article.paperAuthors}</p>
                  <p className="paper-conference">{article.paperConference}</p>
                </div>
              )}

              <div className="article-tags">
                {article.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

              <div className="article-stats">
                <span className="stat">
                  <Eye size={16} />
                  {article.views}
                </span>
                <span className="stat">
                  <Heart size={16} />
                  {article.likes}
                </span>
                <span className="stat">
                  <MessageCircle size={16} />
                  {article.comments}
                </span>
              </div>

              <div className="article-actions">
                {/* If has LinkedIn post, show LinkedIn button */}
                {article.linkedinPost ? (
                  <a
                    href={article.linkedinPost}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <Linkedin size={16} />
                    View on LinkedIn
                  </a>
                ) : (
                  /* Otherwise show Read Article button for full article */
                  <button className="btn btn-primary">
                    Read Article <ExternalLink size={16} />
                  </button>
                )}

                {/* Show PDF button if paper URL exists */}
                {article.pdfUrl && (
                  <a
                    href={article.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    <FileText size={16} />
                    View Paper
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Articles;
