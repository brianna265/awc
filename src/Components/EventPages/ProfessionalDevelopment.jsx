import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EventTypePage.css';

const ProfessionalDevelopment = () => {
  const navigate = useNavigate();

  const events = [
    {
      title: "Tech Talk Series",
      description: "Monthly presentations from industry professionals sharing insights on cutting-edge technologies and career paths.",
      frequency: "Monthly",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Resume & LinkedIn Workshops",
      description: "Learn how to craft compelling resumes and optimize your LinkedIn profile to stand out to recruiters.",
      frequency: "Semester",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Interview Preparation Sessions",
      description: "Practice technical interviews with mock coding challenges and behavioral question preparation.",
      frequency: "Bi-weekly",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Industry Panel Discussions",
      description: "Connect with AWC alumnae working at top tech companies to learn about their career journeys.",
      frequency: "Quarterly",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Coding Bootcamps",
      description: "Intensive weekend sessions focused on specific technologies like React, Python, or Machine Learning.",
      frequency: "Monthly",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Career Fair Prep",
      description: "Get ready for career fairs with tips on networking, elevator pitches, and company research.",
      frequency: "Semester",
      image: "/api/placeholder/300/200"
    }
  ];

  return (
    <div className='event-type-page'>
      {/* Header Section */}
      <div className='event-header'>
        <button 
          className='back-button'
          onClick={() => navigate('/events')}
        >
          ← Back to Events
        </button>
        <div className='header-content'>
          <h1>🎓 Professional Development</h1>
          <p>Advance your career with our comprehensive professional development programs designed specifically for women in computing.</p>
        </div>
      </div>

      {/* Overview Section */}
      <div className='event-overview'>
        <div className='overview-content'>
          <h2>What We Offer</h2>
          <p>
            Our Professional Development track is designed to prepare you for success in the tech industry. 
            From technical skills to soft skills, from interview preparation to career planning, we provide 
            comprehensive support to help you achieve your career goals.
          </p>
          <div className='stats'>
            <div className='stat'>
              <h3>50+</h3>
              <p>Industry speakers annually</p>
            </div>
            <div className='stat'>
              <h3>85%</h3>
              <p>Job placement rate</p>
            </div>
            <div className='stat'>
              <h3>20+</h3>
              <p>Partner companies</p>
            </div>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className='events-grid-section'>
        <h2>Our Professional Development Events</h2>
        <div className='events-grid'>
          {events.map((event, index) => (
            <div key={index} className='event-card'>
              <div className='event-image'>
                <img src={event.image} alt={event.title} />
                <div className='frequency-badge'>{event.frequency}</div>
              </div>
              <div className='event-content'>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className='cta-section'>
        <h2>Ready to Advance Your Career?</h2>
        <p>Join AWC and get access to all our professional development resources and events!</p>
        <div className='cta-buttons'>
          <a 
            href="https://gobblerconnect.vt.edu/organization/awc" 
            target="_blank" 
            rel="noopener noreferrer"
            className='btn-primary'
          >
            Join AWC
          </a>
          <button 
            className='btn-secondary'
            onClick={() => navigate('/events')}
          >
            View Calendar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDevelopment;