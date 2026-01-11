// components/CTA.jsx
import React from 'react';
import { ArrowRight, Users, TrendingUp, Shield, Star, Zap } from 'lucide-react';
import './CTA.css';

const CTA = ({ signInUrl }) => {
  const handleStartJourney = () => {
    window.location.href = signInUrl;
  };

  return (
    <section id="cta" className="cta-section">
      <div className="cta-background">
        <div className="floating-elements">
          <div className="floating-circle circle-1"></div>
          <div className="floating-circle circle-2"></div>
          <div className="floating-circle circle-3"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="cta-content">
          <div className="cta-badge">
            <Star size={20} />
            <span>Join the AI Revolution</span>
          </div>
          
          <h2 className="cta-title fade-in">
            Ready to Transform Your <span className="highlight">Workflow?</span>
          </h2>
          
          <p className="cta-subtitle fade-in" style={{ animationDelay: '0.2s' }}>
            Join thousands of professionals who have already supercharged their productivity with Digital Dockers' AI-powered tools. Experience the future of work today.
          </p>
          
          <div className="cta-features fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="cta-feature">
              <Zap size={24} />
              <span>Instant Setup</span>
            </div>
            <div className="cta-feature">
              <Shield size={24} />
              <span>Enterprise Security</span>
            </div>
            <div className="cta-feature">
              <TrendingUp size={24} />
              <span>Proven Results</span>
            </div>
          </div>
          
          <div className="cta-actions fade-in" style={{ animationDelay: '0.4s' }}>
            <button className="cta-button-primary" onClick={handleStartJourney}>
              Get Started <ArrowRight size={20} />
            </button>
          </div>
          
          <div className="cta-stats fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="cta-stat">
              <Users size={24} />
              <div>
                <span className="cta-stat-number">10,000+</span>
                <span className="cta-stat-label">Active Users</span>
              </div>
            </div>
            <div className="cta-stat">
              <TrendingUp size={24} />
              <div>
                <span className="cta-stat-number">98%</span>
                <span className="cta-stat-label">Satisfaction Rate</span>
              </div>
            </div>
            <div className="cta-stat">
              <Shield size={24} />
              <div>
                <span className="cta-stat-number">100%</span>
                <span className="cta-stat-label">Secure & Private</span>
              </div>
            </div>
          </div>
          
          <div className="cta-testimonials fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="testimonial">
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#FFD700" />)}
              </div>
              <p>"Digital Dockers has revolutionized how I work. The AI engines are incredibly powerful."</p>
              <cite>- Sarah Johnson, Product Manager</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;