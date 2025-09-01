import React from 'react'
import './About.css'
import about_img from '../../assets/AWCLogo.png'
import { Link } from 'react-scroll';

const About = () => {

  return (
    <div className='about' id='about'>
      <div className='about-top'>
        <div className='about-top-left'>
          <img 
            src={about_img} 
            alt="" 
            onError={(e) => console.log('Image failed to load:', e.target.src)}
            onLoad={() => console.log('Image loaded successfully')}
            className='about-img'
          />
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
          <Link to='activities' smooth={true} offset={-150} duration={500} className='inline-link'> Activities </Link>
          page, and if you’d like to support our efforts, or have any questions 
          at all, please feel free to 
          <a href="mailto:awc-g@vt.edu" target='_blank' rel='noopener noreferrer' className='inline-link'> contact us</a>!
        </p>
      </div>
    </div>
  )
}

export default About
