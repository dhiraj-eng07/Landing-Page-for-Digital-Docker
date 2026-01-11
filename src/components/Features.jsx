// components/Features.jsx
import React from 'react';
import { 
  Mail, 
  Brain, 
  CheckSquare, 
  Presentation, 
  MessageSquare, 
  FileText, 
  Video 
} from 'lucide-react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: <Mail size={32} />,
      title: "AutoMail Engine",
      description: "AI-powered email generation and scheduling. Craft perfect emails in seconds and automate your outreach effortlessly.",
      color: "#3B82F6"
    },
    {
      icon: <Brain size={32} />,
      title: "Emotion Analytics Engine",
      description: "Detect emotional undertones in text with precision. Understand sentiment to communicate more effectively.",
      color: "#10B981"
    },
    {
      icon: <CheckSquare size={32} />,
      title: "TaskPilot AI",
      description: "Smart task management with intelligent prioritization. Let AI organize your workload based on deadlines and importance.",
      color: "#8B5CF6"
    },
    {
      icon: <Presentation size={32} />,
      title: "SlideForge AI",
      description: "Generate stunning presentations in minutes. Transform your ideas into visually compelling slides automatically.",
      color: "#F59E0B"
    },
    {
      icon: <MessageSquare size={32} />,
      title: "SmartDock Assistant",
      description: "Your versatile AI companion for any task. Get instant answers, brainstorm ideas, and streamline your workflow.",
      color: "#EF4444"
    },
    {
      icon: <FileText size={32} />,
      title: "DocSummary Engine",
      description: "Condense lengthy documents into actionable insights. Extract key points and save hours of reading time.",
      color: "#06B6D4"
    },
    {
      icon: <Video size={32} />,
      title: "Meeting Insights Engine",
      description: "Transform meetings into structured summaries. Capture decisions, action items, and key discussions automatically.",
      color: "#8B5CF6"
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">7 AI Engines, One Platform</h2>
          <p className="section-subtitle">
            Each engine is designed to handle a specific workflow, working together to create an unmatched productivity experience.
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card fade-in"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                borderTop: `4px solid ${feature.color}`
              }}
            >
              <div 
                className="feature-icon"
                style={{ color: feature.color }}
              >
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <div className="feature-hover-effect" style={{ background: feature.color }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;