import React from 'react'
import './Footer.css'
import linktree from '../../assets/Linktree.png'

const Footer = () => {
  return (
    <div className='footer'>
        <a href="https://linktr.ee/vt_awc" target="_blank" rel='noopener noreferrer'>
          <img src={linktree} alt="linktree-logo"/>
        </a>
        <p>Made with 💙 by AWC Webmasters</p>
    </div>
  )
}

export default Footer
