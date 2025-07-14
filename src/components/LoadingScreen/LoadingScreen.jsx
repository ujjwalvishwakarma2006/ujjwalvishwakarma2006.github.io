import React from 'react';
import { motion } from 'framer-motion';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <motion.div 
      className="loading-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background animated gradient */}
      <div className="loading-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      {/* Main loading content */}
      <div className="loading-content">
        {/* Animated geometric logo */}
        <motion.div 
          className="loading-logo"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut",
            delay: 0.2 
          }}
        >
          <div className="geometric-loader">
            {/* Outer rotating ring */}
            <motion.div 
              className="ring ring-outer"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Middle rotating ring */}
            <motion.div 
              className="ring ring-middle"
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Inner pulsing circle */}
            <motion.div 
              className="ring ring-inner"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7] 
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Center dot */}
            <motion.div
              className="center-dot"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            />
          </div>
        </motion.div>

        {/* Simple loading text */}
        <motion.div 
          className="loading-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </motion.div>

        {/* Progress indicator */}
        <motion.div 
          className="loading-progress"
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "100%" }}
          transition={{ duration: 1.2, delay: 1 }}
        >
          <div className="progress-bar">
            <motion.div 
              className="progress-fill"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, delay: 1.2, ease: "easeOut" }}
            />
          </div>
        </motion.div>

        {/* Floating particles */}
        <div className="floating-particles">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              initial={{ 
                opacity: 0, 
                y: 50,
                x: (Math.random() - 0.5) * 200 
              }}
              animate={{ 
                opacity: [0, 1, 0],
                y: -100,
                x: (Math.random() - 0.5) * 200
              }}
              transition={{
                duration: 3,
                delay: 1 + i * 0.3,
                repeat: Infinity,
                repeatDelay: 2
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
