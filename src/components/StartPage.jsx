// components/StartPage.jsx
import React, { useState, useEffect } from 'react';
import { ArrowDown, Sparkles, Zap, Brain } from 'lucide-react';
import './StartPage.css';

const StartPage = ({ onContinue }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 500);
  }, []);

  return (
    <div className="start-page">
      <div className="start-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>

      <div className="start-content">
        <div className={`start-header ${isVisible ? 'visible' : ''}`}>
          <div className="brand-logo">
            <div className="logo-container">
              <div className="logo-svg">
                <div className="logo-top"></div>
                <div className="logo-bottom"></div>
              </div>
            </div>
          </div>

          <h1 className="brand-title">
            <span className="brand-main">Digital</span>
            <span className="brand-secondary">Docker</span>
          </h1>

          <div className="brand-tagline">
            <Sparkles size={20} />
            <span>AI-Powered Productivity Suite</span>
            <Sparkles size={20} />
          </div>
        </div>

        <div className={`start-features ${isVisible ? 'visible' : ''}`}>
          <div className="feature-item">
            <div className="feature-icon">
              <Brain size={24} />
            </div>
            <span>7 AI Engines</span>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <Zap size={24} />
            </div>
            <span>10x Faster Workflows</span>
          </div>
        </div>

        <div className={`start-actions ${isVisible ? 'visible' : ''}`}>
          <button className="start-button primary" onClick={onContinue}>
            Explore Features
            <ArrowDown size={20} />
          </button>
          <button className="start-button secondary" onClick={onContinue}>
            Get Started
          </button>
        </div>

        <div className={`start-scroll ${isVisible ? 'visible' : ''}`}>
          <div className="scroll-indicator">
            <span>Scroll to explore</span>
            <ArrowDown size={16} className="scroll-arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartPage;