import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ExternalLink, Eye, Heart, MessageCircle, BookOpen, Linkedin, FileText } from 'lucide-react';
import './Articles.css';

const Articles = () => {
  const [activeTab, setActiveTab] = useState('all');

  // All articles - combining regular articles and research paper explanations
  const articles = [
    {
      id: 4,
      title: 'A view on Technological Growth Patterns',
      excerpt: 'Observing patterns in nature is a common human tendency, and I’m sure you have felt this at various times. One day, I found myself pondering a question: How does something grow? Does it follow a specific pattern, perhaps a curve? After reflecting on this for a few minutes, I recalled a lesson from my chemistry class where we studied a graph representing growth. It illustrated how something reaches a saturation point beyond which it cannot exceed a certain limit. This made me wonder:...',
      content: '',
      publishDate: '2023-12-15',
      readTime: '8 min read',
      views: 1250,
      likes: 89,
      comments: 23,
      platform: 'LinkedIn',
      linkedinPost: 'https://www.linkedin.com/posts/ujjwal-iitjammu_growthpatterns-exponentialgrowth-futureoftechnology-activity-7346017319082463232-OQZi?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEWRg_wBQ5mtAKx7G7Ur6OLWhobOMcb8ffg',
      tags: ['Technology', 'Growth Patterns', 'Future'],
      type: 'tech'
    },
    {
      id: 3,
      title: 'Deep Residual Learning for Image Recognition - Paper Explanation',
      excerpt: 'I subconsciously accepted that very deep networks would always suffer from vanishing gradients and degraded accuracy...',
      content: 'Breaking down the revolutionary ResNet paper that changed deep learning...',
      publishDate: '2023-09-15',
      readTime: '10 min read',
      views: 850,
      likes: 95,
      comments: 18,
      platform: 'LinkedIn',
      linkedinPost: 'https://www.linkedin.com/posts/ujjwal-iitjammu_i-subconsciously-accepted-that-very-deep-activity-7348923933737308160-bS_f?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEWRg_wBQ5mtAKx7G7Ur6OLWhobOMcb8ffg',
      pdfUrl: 'https://arxiv.org/abs/1512.03385',
      paperAuthors: 'Kaiming He, Xiangyu Zhang, Shaoqing Ren, Jian Sun',
      paperConference: 'CVPR 2016',
      tags: ['Deep Learning', 'Computer Vision', 'ResNet'],
      type: 'research'
    },
    {
      id: 2,
      title: 'VGGNet - Very Deep Convolutional Networks Explained',
      excerpt: 'Apr 10, 2015 — A research paper titled "Very Deep Convolutional Networks for Large-Scale Image...',
      content: 'Understanding how VGGNet pioneered very deep CNN architectures...',
      publishDate: '2023-08-20',
      readTime: '8 min read',
      views: 720,
      likes: 76,
      comments: 12,
      platform: 'LinkedIn',
      linkedinPost: 'https://www.linkedin.com/posts/ujjwal-iitjammu_the-paper-that-revolutionized-image-recognition-activity-7346749628203077633-fly_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEWRg_wBQ5mtAKx7G7Ur6OLWhobOMcb8ffg',
      pdfUrl: 'https://arxiv.org/abs/1409.1556',
      paperAuthors: 'Karen Simonyan, Andrew Zisserman',
      paperConference: 'ICLR 2015',
      tags: ['Deep Learning', 'CNN', 'VGG'],
      type: 'research'
    },
    {
      id: 1,
      title: 'The Illusion of Thinking - Can AI Truly Think?',
      excerpt: 'CAN AI TRULY THINK – OR IS IT JUST SOLVING PATTERNS?...',
      content: 'Exploring the philosophical implications of AI consciousness...',
      publishDate: '2023-07-10',
      readTime: '12 min read',
      views: 1150,
      likes: 132,
      comments: 28,
      platform: 'LinkedIn',
      linkedinPost: 'https://www.linkedin.com/posts/ujjwal-iitjammu_can-ai-truly-think-or-is-it-just-solving-activity-7340581467237847040-f3mV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEWRg_wBQ5mtAKx7G7Ur6OLWhobOMcb8ffg',
      pdfUrl: 'https://arxiv.org/abs/2506.06941',
      paperAuthors: 'Parshin Shojaee, Iman Mirzaei et al.',
      paperConference: '2025',
      tags: ['AI', 'Philosophy', 'Consciousness'],
      type: 'research'
    }
  ];

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
