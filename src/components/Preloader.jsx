// components/Preloader.jsx
import React from 'react';
import './Preloader.css';

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="preloader-content">
        <div className="logo-animation">
          <svg width="64" height="64" viewBox="0 0 32 32" fill="none">
            <path d="M16 2L2 10L16 18L30 10L16 2Z" fill="url(#gradient1)" />
            <path d="M2 10V22L16 30L30 22V10L16 18L2 10Z" fill="url(#gradient2)" />
            <defs>
              <linearGradient id="gradient1" x1="2" y1="2" x2="30" y2="10" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3B82F6" />
                <stop offset="1" stopColor="#10B981" />
              </linearGradient>
              <linearGradient id="gradient2" x1="2" y1="10" x2="30" y2="22" gradientUnits="userSpaceOnUse">
                <stop stopColor="#8B5CF6" />
                <stop offset="1" stopColor="#3B82F6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <h2 className="preloader-text">Digital Dockers</h2>
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
        <p className="preloader-subtitle">Loading your AI-powered productivity suite...</p>
      </div>
    </div>
  );
};

export default Preloader;