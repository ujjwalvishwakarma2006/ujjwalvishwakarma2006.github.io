import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { GitPullRequest, GitMerge, XCircle, ExternalLink } from 'lucide-react';
import portfolioData from '../../data/portfolioData.json';
import './OpenSource.css';

const OpenSource = () => {
  const { openSource } = portfolioData;
  const [selectedRepo, setSelectedRepo] = useState('All');

  // Extract unique repositories
  const repositories = useMemo(() => {
    const repos = openSource.map(pr => pr.repo);
    return ['All', ...new Set(repos)];
  }, [openSource]);

  // Filter PRs
  const filteredPRs = useMemo(() => {
    if (selectedRepo === 'All') return openSource;
    return openSource.filter(pr => pr.repo === selectedRepo);
  }, [openSource, selectedRepo]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  const getStatusDisplay = (status) => {
    switch (status.toLowerCase()) {
      case 'merged': return <span className="pr-status-badge pr-status-merged"><GitMerge size={14} /> Merged</span>;
      case 'closed': return <span className="pr-status-badge pr-status-closed"><XCircle size={14} /> Closed</span>;
      case 'open':
      default: return <span className="pr-status-badge pr-status-open"><GitPullRequest size={14} /> Open</span>;
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
          <h1 className="heading-1">Open Source</h1>
          <p className="page-subtitle">My pull requests across various open source projects.</p>
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
          className="table-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredPRs.length > 0 ? (
            <table className="pr-table">
              <thead>
                <tr>
                  <th>Pull Request</th>
                  <th>Repository</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredPRs.map((pr, index) => (
                  <motion.tr key={index} variants={itemVariants} className="pr-row">
                    <td>
                      <a href={pr.url} target="_blank" rel="noopener noreferrer" className="pr-link">
                        PR#{pr.number} <ExternalLink size={14} />
                      </a>
                    </td>
                    <td className="pr-repo-cell">{pr.repo}</td>
                    <td>{getStatusDisplay(pr.status)}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
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