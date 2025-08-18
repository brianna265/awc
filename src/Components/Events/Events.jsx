import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Events.css'
import Heading from '../Heading/Heading';


const Events = () => {

  const navigate = useNavigate();

  const eventTypes = [
    {
      id: 'meetings',
      title: 'Meetings',
      description: 'weekly meetings, event calendar',
      route: '/activities/meetings'
    },

    {
      id: 'flagship-events',
      title: 'Events',
      description: 'flagship events',
      route: '/activities/flagship-events'
    },

    {
      id: 'opportunities',
      title: 'Opportunities',
      description: 'professional development',
      route: '/activities/opportunities'
    }
  ]

  const handleEventTypeClick = (route) => {
    navigate(route);

    // automatically scroll to top of page
    setTimeout(() => {
      window.scrollTo(0,0);
    }, 50);
  };

  return (
    <div className='activities' id='activities' route='/activities'>
      <Heading subtitle='Get Involved' title='What We Do'/>
      <div className='events-info'>
        <div className='event-types'>
          {eventTypes.map((eventType) => (
            <div 
              key={eventType.id}
              className='event-type clickable'
              onClick={() => handleEventTypeClick(eventType.route)}
            >
              <h3>{eventType.title}</h3>
              <p>{eventType.description}</p>
              <div className='click-indicator'>
                <span>Learn More →</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='join-section'>
        <h2>Join Us!</h2>
        <p>If you want to be part of AWC, just stop by one of our meetings or 
          events and talk to us! If you have questions, feel free to 
          <a href="mailto:awc-news-g@vt.edu" className='inline-link'> contact us</a>.
          Remember, <b>you don’t have to be a woman</b> to join AWC! Only a 
          wanting to support women in computing is required!
        </p>
        <p>Join the 
          <a href="https://forms.gle/jsLrgL8DmYZsS7f79" target="_blank" rel='noopener noreferrer' className='inline-link'> listserv </a> 
          and our club on 
          <a href="https://gobblerconnect.vt.edu/organization/awc" target='_blank' rel='noopener noreferrer' className='inline-link'> GobblerConnect </a>
          (using your vt.edu email) to stay updated and become a member of the club!
        </p>
        <div className="email-button">
          <button className='btn-primary'>
            <a href="https://forms.gle/jsLrgL8DmYZsS7f79" target="_blank" rel='noopener noreferrer'>Join our mailing list!</a>
          </button>
        </div>
      </div>
      
    </div>
  )
}

export default Events
