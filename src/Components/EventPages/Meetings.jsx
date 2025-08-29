import React from 'react'
import './Meetings.css'
import { useNavigate } from 'react-router-dom'

const Meetings = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');

    setTimeout(() => {
      const eventsSection = document.getElementById('activities');
      if (eventsSection) {
        const navBarHeight = 67.74;
        const offset = navBarHeight + 70;
        const elementPosition = eventsSection.offsetTop - offset;

        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <div className='event-type-page'>
      {/* header section */}
      <div className='event-header'>
        <button 
          className='back-button' onClick={handleBack}>
          ← Back
        </button>
        <div className='header-content'>
          <h1>Meetings</h1>   
        </div>
      </div>

      <div className='content-section'>
        <div className='content'>
          <p>Join us weekly to connect, learn, and hear from industry 
            professionals. Our meetings include general sessions, workshops, and
            open study hours. They are typically <b>every Thursday from 6:30pm 
            to 7:30pm</b>, and sometimes also include dinner!
          </p>
          <p>Feel free to stop by our meetings and get to know a little bit more
            about AWC. Everybody is welcome!
          </p>
          <p>To find out when the next meeting is, check out the events calendar
            below.
          </p>
        </div>
      </div>
      <div className='rsvp-section'>
          <button className='btn-primary'>
            <a href="" target="_blank" rel='noopener noreferrer'>
              RSVP to our next meeting!
            </a>
          </button>
        </div>
      <div className='calendar-section'>
        <h2>Upcoming Events</h2>
        <p>Stay up to date with all AWC events, meetings, and activities!</p>
        
        <div className='calendar-container'>
          <iframe 
            src="https://calendar.google.com/calendar/embed?src=awc.hokies%40gmail.com&ctz=America%2FNew_York"
            title="AWC Events Calendar"
            className="google-calendar"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </div>

    
  )
}

export default Meetings
