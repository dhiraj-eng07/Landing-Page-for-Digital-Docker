// components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';
const Navbar = ({ signInUrl }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignIn = () => {
    window.location.href = signInUrl;
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Logo */}
        <div className="logo">
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

        {/* Desktop Navigation - Center */}
        <div className="nav-center">
          <a href="#home" className="nav-link">Home</a>
          <a href="#features" className="nav-link">Features</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>

        {/* Desktop Sign In Button - Right */}
        <div className="nav-right">
          <button className="signin-btn" onClick={handleSignIn}>
            Sign In
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <a href="#home" className="mobile-nav-link">Home</a>
            <a href="#features" className="mobile-nav-link">Features</a>
            <a href="#contact" className="mobile-nav-link">Contact</a>
            <button className="mobile-signin-btn" onClick={handleSignIn}>
              Sign In
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;