// components/Hero.jsx
import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import './Hero.css';
const Hero = () => {
  const [counters, setCounters] = useState({ aiEngines: 0, fasterWorkflows: 0, aiAssistant: 0 });
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimated(true);
          
          // Animate counters sequentially with smoother animation
          const targets = [
            { key: 'aiEngines', target: 7, delay: 0 },
            { key: 'fasterWorkflows', target: 10, delay: 500 },
            { key: 'aiAssistant', target: 24, delay: 1000 }
          ];
          
          targets.forEach(({ key, target, delay }) => {
            setTimeout(() => {
              animateCounter(key, target);
            }, delay);
          });
        }
      },
      { threshold: 0.5 }
    );

    const hero = document.getElementById('hero');
    if (hero) observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  const animateCounter = (key, target) => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let currentStep = 0;
    
    const interval = setInterval(() => {
      currentStep++;
      const currentValue = Math.min(target, increment * currentStep);
      
      setCounters(prev => ({
        ...prev,
        [key]: key === 'aiAssistant' ? '24/7' : currentValue.toFixed(1)
      }));
      
      if (currentStep >= steps) {
        clearInterval(interval);
        setCounters(prev => ({
          ...prev,
          [key]: key === 'aiAssistant' ? '24/7' : target.toFixed(1)
        }));
      }
    }, duration / steps);
  };

  const handleGetStarted = () => {
    const cta = document.getElementById('cta');
    if (cta) {
      cta.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreFeatures = () => {
    const features = document.getElementById('features');
    if (features) {
      features.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="badge fade-in">
            <Sparkles size={16} />
            <span>AI-Powered Productivity Suite</span>
          </div>
          
          <h1 className="hero-title fade-in" style={{ animationDelay: '0.2s' }}>
            Digital Dockers
          </h1>
          
          <p className="hero-subtitle fade-in" style={{ animationDelay: '0.4s' }}>
            Supercharge your workflow with 7 AI engines. From intelligent emails to meeting insights, automate the mundane and focus on what truly matters.
          </p>
          
          <div className="hero-buttons fade-in" style={{ animationDelay: '0.6s' }}>
            <button className="btn-primary" onClick={handleGetStarted}>
              Get Started Free <ArrowRight size={20} />
            </button>
            <button className="btn-secondary" onClick={handleExploreFeatures}>
              Explore Features
            </button>
          </div>
          
          <div className="hero-stats fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="stat-item">
              <span className="stat-number">
                {animated ? counters.aiEngines : '0'}
              </span>
              <span className="stat-label">AI Engines</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">
                {animated ? counters.fasterWorkflows : '0'}
              </span>
              <span className="stat-label">Faster Workflows</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">{animated ? counters.aiAssistant : '0'}</span>
              <span className="stat-label">AI Assistant</span>
            </div>
          </div>
        </div>
        
        <div className="hero-graphics">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;