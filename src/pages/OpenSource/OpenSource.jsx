import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { GitPullRequest, GitMerge, XCircle, ExternalLink } from 'lucide-react';
import portfolioData from '../../data/portfolioData.json';
import './OpenSource.css';

const OpenSource = () => {
  const { openSource } = portfolioData;
  const [selectedRepo, setSelectedRepo] = useState('All');

  // Parse URLs to extract info and sort
  const parsedPRs = useMemo(() => {
    return openSource.map(pr => {
      try {
        const urlObj = new URL(pr.url);
        // Extracts paths without empty strings
        const pathParts = urlObj.pathname.split('/').filter(Boolean);
        const org = pathParts[0] || 'Unknown';
        const repoName = pathParts[1] || 'Unknown';
        const repo = `${org}/${repoName}`;
        const number = parseInt(pathParts[3], 10) || 0;
        return { ...pr, org, repo, number };
      } catch (e) {
        return { ...pr, org: 'Unknown', repo: 'Unknown', number: 0 };
      }
    }).sort((a, b) => {
      // Sort by organization alphabetically
      if (a.org !== b.org) {
        return a.org.localeCompare(b.org);
      }
      // Then sort by most recent PR number descending
      return b.number - a.number;
    });
  }, [openSource]);

  // Extract unique repositories
  const repositories = useMemo(() => {
    const repos = parsedPRs.map(pr => pr.repo);
    return ['All', ...new Set(repos)];
  }, [parsedPRs]);

  // Filter PRs
  const filteredPRs = useMemo(() => {
    if (selectedRepo === 'All') return parsedPRs;
    return parsedPRs.filter(pr => pr.repo === selectedRepo);
  }, [parsedPRs, selectedRepo]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'merged': return <GitMerge size={20} />;
      case 'closed': return <XCircle size={20} />;
      case 'open':
      default: return <GitPullRequest size={20} />;
    }
  };

  return (
    <motion.div 
      className="open-source-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        <div className="page-header text-center">
          <h1 className="heading-1">Open Source Contributions</h1>
          <p className="page-subtitle">Sometimes, I get lost in reading the documentation.</p>
        </div>

        <div className="filter-section">
          <div className="category-filters">
            {repositories.map(repo => (
              <button
                key={repo}
                className={`filter-btn ${selectedRepo === repo ? 'active' : ''}`}
                onClick={() => setSelectedRepo(repo)}
              >
                {repo === 'All' ? 'All Repositories' : repo}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          className="pr-timeline"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredPRs.length > 0 ? (
            filteredPRs.map((pr, index) => {
              const IconType = getStatusIcon(pr.status);
              
              return (
                <motion.div 
                  key={index}
                  className={`pr-timeline-item pr-status-color-${pr.status.toLowerCase()}`}
                  variants={itemVariants}
                >
                  <div className="pr-timeline-node">
                    <div className="pr-timeline-icon">
                      {IconType}
                    </div>
                  </div>
                  
                  <div className="pr-timeline-content">
                    <a 
                      href={pr.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="pr-timeline-card"
                    >
                      <div className="pr-card-left">
                        <span className="pr-repo-label">{pr.repo}</span>
                        <span className="pr-number-label">#{pr.number}</span>
                      </div>
                      
                      <div className="pr-card-right">
                        <span className="view-pr-text">View PR</span>
                        <ExternalLink size={16} />
                      </div>
                    </a>
                  </div>
                </motion.div>
              );
            })
          ) : (
            <div className="no-prs">
              <p>No pull requests found for the selected repository.</p>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OpenSource;