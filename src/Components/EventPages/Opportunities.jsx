import React from 'react'
import './Meetings.css'
import { useNavigate } from 'react-router-dom'

const Opportunities = () => {
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
      
      <div className='event-header'>
        <button className='back-button' onClick={handleBack}>
          ← Back
        </button>
        <div className='header-content'>
          <h1>Opportunities</h1>
          <p></p>
        </div>
      </div>

      <div className='content-section'>
        <div className='content'>
            <h1>Grace Hopper Celebration of Women in Computing</h1>
            <p>Each year, AWC sends members to the 
                <a href="https://ghc.anitab.org" target='_blank' rel='noopener noreferrer' className='inline-link'> Grace Hopper Celebration of Women in Computing (GHC)</a>. 
                This vibrant and inspiring conference brings together students, 
                professionals, and leaders to share research, foster mentorship, 
                and empower the next generation of women in computing.
            </p>
            {/* <h2>Want to attend?</h2> */}
            {/* <p>Active involvement in AWC is the first step! Thanks to support 
                from the CS Department, we offer a limited number of GHC 
                scholarships to dedicated members who regularly attend meetings 
                and events. It’s an incredible opportunity to connect, learn, 
                and grow from peers and leaders in the field
            </p> */}
            <p>Stay tuned for applications to attend the conference!</p>
        </div>
        
        <div className='content'>
            <h1>Job Opportunities</h1>
            <p>Stay updated on internships, full-time positions, and career 
              opportunities shared through our network. We regularly share job 
              postings from our industry partners and alumni connections.
            </p>
            <p>Join our 
              <a href="https://forms.gle/jsLrgL8DmYZsS7f79" target='_blank' rel='noopener noreferrer' className='inline-link'> mailing list </a>
              and attend our networking events to stay 
              informed about the latest opportunities in tech!
            </p>
        </div>
      </div>
    </div>
  )
}

export default Opportunities
