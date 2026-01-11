// App.js
import React, { useState } from 'react';
import './App.css';
import StartPage from './components/StartPage';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

function App() {
  const [showMainContent, setShowMainContent] = useState(false);
  const signInUrl = "YOUR_SIGNIN_URL_HERE"; // Replace with your actual sign-in URL

  const handleContinue = () => {
    setShowMainContent(true);
  };

  if (!showMainContent) {
    return <StartPage onContinue={handleContinue} />;
  }

  return (
    <div className="App">
      <Navbar signInUrl={signInUrl} />
      <Hero />
      <Features />
      <CTA signInUrl={signInUrl} />
      <Footer />
    </div>
  );
}

export default App;