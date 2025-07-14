import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      className="not-found"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="not-found-content">
        <motion.div 
          className="not-found-animation"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="not-found-title">404</h1>
          <div className="floating-elements">
            <div className="float-1"></div>
            <div className="float-2"></div>
            <div className="float-3"></div>
          </div>
        </motion.div>
        
        <motion.div 
          className="not-found-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2>Oops! Page Not Found</h2>
          <p>The page you're looking for seems to have wandered off into the digital void.</p>
        </motion.div>

        <motion.div 
          className="not-found-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button 
            onClick={() => navigate('/')} 
            className="btn btn-primary"
          >
            <Home size={20} />
            Go Home
          </button>
          <button 
            onClick={() => navigate(-1)} 
            className="btn btn-secondary"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NotFound;
