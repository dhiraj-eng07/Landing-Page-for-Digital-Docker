// components/Footer.jsx
import React from 'react';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <div className="logo-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
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
            <span className="logo-text">Digital Dockers</span>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#integrations">Integrations</a>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <a href="#about">About</a>
              <a href="#careers">Careers</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-column">
              <h4>Resources</h4>
              <a href="#blog">Blog</a>
              <a href="#docs">Documentation</a>
              <a href="#support">Support</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="social-links">
            <a href="#twitter" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#linkedin" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="#github" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="#email" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
          
          <div className="copyright">
            © {new Date().getFullYear()} Digital Dockers. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;