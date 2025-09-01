import React, { useEffect, useState } from 'react'
import './Navbar.css'
import navbar_logo from '../../assets/navbar-removebg.png'
import menu_icon from '../../assets/menu-icon.png'
import { useNavigate, useLocation } from 'react-router-dom'

const Navbar = () => {
  // navbar heading background
  const [sticky, setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  },[])

  // navbar heading -> menu icon
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  // scrolling to different sections
  const sectionOffsets = {
    'home': -67.74,
    'about': 50,
    'activities': 60
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navBarHeight = 67.74;
      const offset = navBarHeight + sectionOffsets[sectionId];
      const elementPosition = section.offsetTop - offset;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }

  // routing and scrolling for all navbar buttons
  const navigate = useNavigate();
  const location = useLocation();
  const handleNavClick = (sectionId) => {
    if (location.pathname === '/') {
      // on main page
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);  
    }
    else {
      // on subpage
      navigate('/');
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 200);
    }
  }

  // detect if user on mobile device
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 832 || 'ontouchstart' in window);
    }

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // dropdown menu states
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [activitiesDropdownOpen, setActivitiesDropdownOpen] = useState(false);

  // handle "About" click - for both "About" and "About Us"
  const handleAboutClick = () => {
    if (isMobile) {
      // on mobile
      setAboutDropdownOpen(!aboutDropdownOpen); // toggle dropdown
      setActivitiesDropdownOpen(false); // close other dropdown
    }
    else {
      // on desktop
      setAboutDropdownOpen(false);  // close dropdown if it's open
      handleNavClick('about');  // navigate to about section
    }
    
  }

  // handle "Activities" click
  const handleActivitiesClick = () => {
    if (isMobile) {
      // on mobile
      setActivitiesDropdownOpen(!activitiesDropdownOpen); // toggle dropdown
      setAboutDropdownOpen(false); // close other dropdown
    }
    else {
      // on desktop
      setActivitiesDropdownOpen(false);   // close dropdown if it's open
      handleNavClick('activities');  // navigate to activities section
    }
    
  }

  // handle subpage click
  const handleSubpageClick = (route, closeDropdownFn) => {
    closeDropdownFn();
    navigate(route);

    // automatically scroll to top of page
    setTimeout(() => {
      window.scrollTo(0,0);
    }, 50);
  }

  // close dropdown when clicking outside (for mobile)
  useEffect(() => {
    if (!isMobile) return;

    const closeDropdowns = (e) => {
      if (!e.target.closest('.nav-dropdown')) {
        setAboutDropdownOpen(false);
        setActivitiesDropdownOpen(false);
      }
    }

    document.addEventListener('click', closeDropdowns);
    return () => document.removeEventListener('click', closeDropdowns);
  }, [isMobile])

  // close mobile sidebar when clicking outside
  useEffect(() => {
    const closeMobileSidebar = (e) => {
      // check mobile menu is open, click is outside nav element and menu icon
      if (mobileMenu && !e.target.closest('nav') && !e.target.closest('.menu-icon')) {
        setMobileMenu(false);

        // close dropdowns
        setAboutDropdownOpen(false);
        setActivitiesDropdownOpen(false);
      }
    };

    document.addEventListener('click', closeMobileSidebar);
    return () => document.removeEventListener('click', closeMobileSidebar);
  }, [mobileMenu]);

  // hover handlers for dropdown menus (for desktop)
  const handleAboutDropdownMouseEnter = () => {
    if (!isMobile) {
      setAboutDropdownOpen(true);
    }
  }

  const handleAboutDropdownMouseLeave = () => {
    if (!isMobile) {
      setAboutDropdownOpen(false);
    }
  }

  const handleActivitiesDropdownMouseEnter = () => {
    if (!isMobile) {
      setActivitiesDropdownOpen(true);
    }
  }

  const handleActivitiesDropdownMouseLeave = () => {
    if (!isMobile) {
      setActivitiesDropdownOpen(false);
    }
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      {/* navbar logo */}
      <button className='nav-btn' onClick={() => handleNavClick('home')}>
        <img src={navbar_logo} alt="navbar-logo" className='navbar-logo'/>
      </button>
      
      <ul className={mobileMenu ? '':'hide-mobile-menu'}>
        {/* home */}
        <li><button className='nav-btn' onClick={() => handleNavClick('home')}>Home</button></li>
        
        {/* about dropdown */}
        <li>
          <div className='nav-dropdown' onMouseEnter={handleAboutDropdownMouseEnter} onMouseLeave={handleAboutDropdownMouseLeave}>
            <button className='dropdown-toggle' onClick={handleAboutClick}>
              About
              <span className={`dropdown-arrow ${aboutDropdownOpen ? 'rotated' : ''}`}>▼</span>
            </button>

            {aboutDropdownOpen && (
              <div className='dropdown-menu'>
                <button className='nav-btn dropdown-item' onClick={() => isMobile ? handleNavClick('about') : handleAboutClick()}>
                  About Us
                </button>
                <button className='nav-btn dropdown-item' onClick={() => handleSubpageClick('/about/officers', () => setAboutDropdownOpen(false))}>
                  Officer Board
                </button>
              </div>
            )}
          </div>
        </li>

        {/* activities dropdown */}
        <li>
          <div className='nav-dropdown' onMouseEnter={handleActivitiesDropdownMouseEnter} onMouseLeave={handleActivitiesDropdownMouseLeave}>
            <button className='dropdown-toggle' onClick={handleActivitiesClick}>
              Activities
              <span className={`dropdown-arrow ${activitiesDropdownOpen ? 'rotated' : ''}`}>▼</span>
            </button>

            {activitiesDropdownOpen && (
              <div className='dropdown-menu'>
                <button className='nav-btn dropdown-item' onClick={() => handleSubpageClick('activities/meetings', () => setActivitiesDropdownOpen(false))}>
                  Meetings
                </button>
                <button className='nav-btn dropdown-item' onClick={() => handleSubpageClick('activities/flagship-events', () => setActivitiesDropdownOpen(false))}>
                  Events
                </button>
                <button className='nav-btn dropdown-item' onClick={() => handleSubpageClick('activities/opportunities', () => setActivitiesDropdownOpen(false))}>
                  Opportunities
                </button>
              </div>
            )}
          </div>
        </li>

        {/* gallery */}
        {/* <li><Link to='gallery' smooth={true} offset={-120} duration={500}>Gallery</Link></li> */}

        {/* linktree */}
        <li><a className='btn-primary' href="https://linktr.ee/awc_vt" target='_blank' rel='noopener noreferrer'>Join Us</a></li>
      </ul>
      <img src={menu_icon} alt="menu-icon" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
