import React from 'react'
import './About.css'
import about_img from '../../assets/AWCLogo.png'
import { Link } from 'react-scroll';
import darkArrow from '../../assets/dark-arrow.png'

console.log('Dark arrow path:', darkArrow); // This should show the hashed filename

const About = () => {

  // const handleEventsClick = (e) => {
  //   e.preventDefault();

  //   const eventsSection = document.getElementById('events');

  //   if (eventsSection) {
  //     const navbarHeight = 67.74;
  //     const offset = navbarHeight + 130;
  //     const elementPosition = eventsSection.offsetTop - offset;
  
  //     window.scrollTo({
  //       top: elementPosition,
  //       behavior: 'smooth'
  //     });
  //   }
    
  // }

  const handleContactClick = (e) => {
    e.preventDefault();
    const email = 'awc-news-g@vt.edu';
    const subject = 'Contact from AWC Website';

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

    try {
      window.location.href = mailtoLink;
    }
    catch (error) {
      navigator.clipboard.writeText(email).then(() => {
        alert(`Email client not available. Email address ${email} has been copied to your clipboard!`);
      }).catch(() => {
        alert(`Please email us at: ${email}`);
      });
    }
  }

  return (
    <div className='about' id='about'>
      <img 
        src={darkArrow} 
        alt="Dark arrow"
        onError={(e) => console.log('Image failed to load:', e.target.src)}
        onLoad={() => console.log('Image loaded successfully')}
      />
      <div className='about-top'>
        <div className='about-top-left'>
          <img src={about_img} alt="" className='about-img'/>
        </div>
        <div className='about-top-right'>
          <h3>ABOUT US</h3>
          <h2>A student-run, non-profit organization</h2>
          <p>
            For over <b>20 years</b>, we have worked to promote the recruitment 
          and retention of women in technology and computer-oriented professions.
          This mission is more critical now than ever, as the percentage of women
          pursuing a Computer Science degree is less than <b>25% nationally</b>,
           and below <b>25% at Virginia Tech</b>. Toward restoring diversity, we
          work with the close support of the Department of Computer Science, 
          affiliated CSRC and other IT companies, and the College of
          Engineering.
          </p>
        </div>
      </div>
      <div className='about-bottom'>
        <p>
          This organization is not exclusive! Anyone and everyone who is 
          passionate about computing and gender equality in the field of 
          computing is welcome! Our organization is comprised of undergraduate, 
          graduate, and faculty members from various disciplines. Most of AWC's 
          members are Computer Science (CS) majors, but we also have CS minors 
          and Computer Engineering (CPE), Electrical Engineering (EE), Business 
          Information Technology (BIT), Mathematics (MATH), Computational 
          Modeling and Data Analytics (CMDA), and Statistics majors. Anyone 
          passionate about our mission can join AWC in our networking, social, 
          educational, outreach, and technical events!
        </p>
        <p>
          AWC is involved in many different activities that are designed to 
          foster professional development and contribute to the local community.
          We also have many social activities to help build an enduring sense of
          community. You can find out more about what we do on our 
          <Link to='events' smooth={true} offset={-210} duration={500} className='inline-link'> Events </Link>
          {/* <a href="#events" onClick={handleEventsClick} className='inline-link'> Events </a> */}
          page, and if you’d like to support our efforts, or have any questions 
          at all, please feel free to 
          <a href="mailto:awc-news-g@vt.edu" className='inline-link'> contact us</a>!
        </p>
      </div>
    </div>
  )
}

export default About
