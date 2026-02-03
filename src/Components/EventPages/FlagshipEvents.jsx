import React from 'react'
import './Meetings.css'
import { useNavigate } from 'react-router-dom'

const FlagshipEvents = () => {
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
        <button className='back-button' onClick={handleBack}>
          ← Back
        </button>
        <div className='header-content'>
          <h1>Events</h1>
        </div>
        
      </div>

      <div className='content-section'>
        <p>AWC runs a number of annual and semi-annual activities to support 
            its mission of promoting the recruitment and retention of women in 
            technology- and computer-oriented professions. These events are 
            designed to foster professional development and contribute to the 
            local community.</p>
        <div className='content'>
          <h1>HackViolet</h1>
          <p>HackViolet (previously known as SheHacksVT) is the annual 
              female-empowerment hackathon hosted at VT! Hackers of all 
              genders are invited to innovate, create, and inspire with code. 
              This is a great opportunity to network, meet like-minded 
              students and receive swag and prizes. No experience necessary; 
              open to all majors! Learn more at 
              <a href="https://www.hackviolet.com/" target="_blank" rel='noopener noreferrer' className='inline-link'> hackviolet.com</a>!
          </p>
          <p>For any questions, feel free to contact
              <a href="mailto:hackvioletvt@gmail.com" target='_blank' rel='noopener noreferrer' className='inline-link'> hackvioletvt@gmail.com</a>.
          </p>
        </div>
        <div className='content'>
          <h1>Women in Computing Day</h1>
          <p>Every spring, the Association for Women in Computing hosts 
              <b> Women in Computing Day</b>, an outreach event introducing 
              6th- and 7th-grade girls to the exciting world of technology. 
              Now in its 23rd year, this program is a cornerstone of our 
              mission to inspire the next generation of women in tech. With 
              the male-to-female ratio in computing still disproportionately 
              low, this event provides early exposure.
          </p>
          <p>Throughout the day, participants explore four hands-on activities
              showcasing the breadth of computing, from coding with Snap to 
              building circuits with LEDs, designing apps, and even 
              experimenting with biotechnology. By sparking curiosity and 
              confidence at a young age, we aim to open doors to future 
              opportunities and help shape a more diverse and inclusive tech 
              community.
          </p>
          <p>This year, Women in Computing Day is coming up on <b>February 20, 
            2026, from 9:00am-3:00pm in Squires</b> 🎉. We would love your 
            support in running this event! You can help out for any part of the 
            day that works for you, and we'll have lunch for volunteers. 
            If you'd like to volunteer, please fill out the 
            <a href="https://forms.gle/unKBgqmMpDHmR77w8" target='_blank' rel='noopener noreferrer' className='inline-link'> volunteer form </a>
            by <b>February 13th</b>.
            Feel free to reach out if you have any questions, we'd love to have 
            you help out!
          </p>
          <p>If you have any questions about Women in Computing Day or are 
            interested in sponsoring AWC, email us at
            <a href="mailto:awc-g@vt.edu" target='_blank' rel='noopener noreferrer' className='inline-link'> awc-g@vt.edu </a>
            to connect with us.
          </p>
        </div>
      </div>
    </div>
  )
}

export default FlagshipEvents
