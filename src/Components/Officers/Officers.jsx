import React from 'react'
import './Officers.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// import officer_1 from '../../assets/Leadership/anya-b.png'
// import officer_2 from '../../assets/Leadership/shreya-t.png'
// import officer_3 from '../../assets/Leadership/swathi-v.png'
// import officer_4 from '../../assets/Leadership/aastha-p.jpeg'
// import officer_5 from '../../assets/Leadership/no-photo.png'
// import officer_6 from '../../assets/Leadership/no-photo.png'
// import officer_7 from '../../assets/Leadership/no-photo.png'
// import officer_8 from '../../assets/Leadership/no-photo.png'
// import officer_9 from '../../assets/Leadership/no-photo.png'
// import officer_10 from '../../assets/Leadership/no-photo.png'
// import officer_11 from '../../assets/Leadership/no-photo.png'
// import officer_12 from '../../assets/Leadership/no-photo.png'
// import officer_13 from '../../assets/Leadership/no-photo.png'
// import officer_14 from '../../assets/Leadership/no-photo.png'
// import officer_15 from '../../assets/Leadership/no-photo.png'
// import officer_16 from '../../assets/Leadership/no-photo.png'
// import officer_17 from '../../assets/Leadership/no-photo.png'
// import officer_18 from '../../assets/Leadership/no-photo.png'
// import officer_19 from '../../assets/Leadership/no-photo.png'
import Heading from '../Heading/Heading'

const Officers = () => {
  // automatically scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0
    });
  }, [])  // empty dependency array - this runs once when component mounts

  // back to main page
  const navigate = useNavigate();
  const handleBackToMain = () => {
    navigate('/');
    setTimeout(() => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const navBarHeight = 67.74;
        const offset = navBarHeight + 50;
        const elementPosition = aboutSection.offsetTop - offset;

        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <div className='officers' id='officers'>
      {/* header section */}
      <div className='officers-header'>
        <button className='back-button' onClick={handleBackToMain}>
        ← Back
      </button>
      <div className='header-content'>
          <p>2025-2026 Officer Team</p>
          <h1>Meet the Team!</h1>   
        </div>
        {/* <Heading subtitle='2025-2026 Officer Team' title='Meet the Team!'/> */}
      </div>
      
      <div className='officer-section'>
        <div className='officer'>
        <img src={`${import.meta.env.BASE_URL}images/Leadership/anya-b.png`} alt="anya-b" />
        <div className='blurb'>
            {/* <p className='blurb-text'>short personal blurb for each officer here?</p> */}
        </div>
        <div className='caption'>
            <p><b>Anya Beichner</b><br />President</p>
        </div>
      </div>
      <div className='officer'>
        <img src={`${import.meta.env.BASE_URL}images/Leadership/shreya-t.png`} alt="shreya-t" />
        <div className='blurb'>
            {/* <p className='blurb-text'>or nah?</p> */}
        </div>
        <div className='caption'>
            <p><b>Shreya Thothathri</b><br />Vice President</p>
        </div>
      </div>
      <div className='officer'>
        <img src={`${import.meta.env.BASE_URL}images/Leadership/swathi-v.png`} alt="swathi-v" />
        <div className='blurb'>
            {/* <p className='blurb-text'>we need pictures</p> */}
        </div>
        <div className='caption'>
            <p><b>Swathi Vijayakumar</b><br />Vice President</p>
        </div>
      </div>
      <div className='officer'>
        <img src={`${import.meta.env.BASE_URL}images/Leadership/aastha-p.jpeg`} alt="aastha-p" />
        <div className='blurb'>
            <p className='blurb-text'></p>
        </div>
        <div className='caption'>
            <p><b>Aastha Paranthaman</b><br />Treasurer</p>
        </div>
      </div>
      <div className='officer'>
        <img src={`${import.meta.env.BASE_URL}images/Leadership/no-photo.png`} alt="" />
        <div className='blurb'>
            <p className='blurb-text'></p>
        </div>
        <div className='caption'>
            <p><b>Maryam Jadoon</b><br />Events Chair</p>
        </div>
      </div>
      <div className='officer'>
        <img src={`${import.meta.env.BASE_URL}images/Leadership/no-photo.png`} alt="" />
        <div className='blurb'>
            <p className='blurb-text'></p>
        </div>
        <div className='caption'>
            <p><b>Rachana Chengari</b><br />Historian</p>
        </div>
      </div>
      <div className='officer'>
        <img src={`${import.meta.env.BASE_URL}images/Leadership/no-photo.png`} alt="" />
        <div className='blurb'>
            <p className='blurb-text'></p>
        </div>
        <div className='caption'>
            <p><b>Brianna Wang</b><br />Webmaster</p>
        </div>
      </div>
      <div className='officer'>
        <img src={`${import.meta.env.BASE_URL}images/Leadership/no-photo.png`} alt="" />
        <div className='blurb'>
            <p className='blurb-text'></p>
        </div>
        <div className='caption'>
            <p><b>Design Chair</b><br />Design Chair</p>
        </div>
      </div>
      <div className='officer'>
        <img src={`${import.meta.env.BASE_URL}images/Leadership/no-photo.png`} alt="" />
        <div className='blurb'>
            <p className='blurb-text'></p>
        </div>
        <div className='caption'>
            <p><b>Shristi Chakraborty</b><br />Social Media Chair</p>
        </div>
      </div>
      <div className='officer'>
        <img src={`${import.meta.env.BASE_URL}images/Leadership/no-photo.png`} alt="" />
        <div className='blurb'>
            <p className='blurb-text'></p>
        </div>
        <div className='caption'>
            <p><b>Nandita Prasanth</b><br />Advertising Chair</p>
        </div>
      </div>
      <div className='officer'>
        <img src={`${import.meta.env.BASE_URL}images/Leadership/no-photo.png`} alt="" />
        <div className='blurb'>
            <p className='blurb-text'></p>
        </div>
        <div className='caption'>
            <p><b>Harini Ramaswamy</b><br />Newsletter Chair</p>
        </div>
      </div>
      <div className='officer'>
        <img src={`${import.meta.env.BASE_URL}images/Leadership/no-photo.png`} alt="" />
        <div className='blurb'>
            <p className='blurb-text'></p>
        </div>
        <div className='caption'>
            <p><b>Sanju Devakumaran</b><br />Conference Chair</p>
        </div>
      </div>
      <div className='officer'>
        <img src={`${import.meta.env.BASE_URL}images/Leadership/no-photo.png`} alt="" />
        <div className='blurb'>
            <p className='blurb-text'></p>
        </div>
        <div className='caption'>
            <p><b>Chythra Malapati</b><br />CAMEO Chair</p>
        </div>
      </div>
      <div className='officer'>
        <img src={`${import.meta.env.BASE_URL}images/Leadership/no-photo.png`} alt="" />
        <div className='blurb'>
            <p className='blurb-text'></p>
        </div>
        <div className='caption'>
            <p><b>Ashwika Battu</b><br />SEC Chair</p>
        </div>
      </div>
      <div className='officer'>
        <img src={`${import.meta.env.BASE_URL}images/Leadership/no-photo.png`} alt="" />
        <div className='blurb'>
            <p className='blurb-text'></p>
        </div>
        <div className='caption'>
            <p><b>Graduate Outreach Chair</b><br />Graduate Outreach Chair</p>
        </div>
      </div>
      <div className='officer'>
        <img src={`${import.meta.env.BASE_URL}images/Leadership/no-photo.png`} alt="" />
        <div className='blurb'>
            <p className='blurb-text'></p>
        </div>
        <div className='caption'>
            <p><b>Ishita Jain</b><br />WCD Chair</p>
        </div>
      </div>
      <div className='officer'>
        <img src={`${import.meta.env.BASE_URL}images/Leadership/no-photo.png`} alt="" />
        <div className='blurb'>
            <p className='blurb-text'></p>
        </div>
        <div className='caption'>
            <p><b>Chloe Kim</b><br />WCD Chair</p>
        </div>
      </div>
      <div className='officer'>
        <img src={`${import.meta.env.BASE_URL}images/Leadership/no-photo.png`} alt="" />
        <div className='blurb'>
            <p className='blurb-text'></p>
        </div>
        <div className='caption'>
            <p><b>Mia Nguyen</b><br />HackViolet Director</p>
        </div>
      </div>
      <div className='officer'>
        <img src={`${import.meta.env.BASE_URL}images/Leadership/no-photo.png`} alt="" />
        <div className='blurb'>
            <p className='blurb-text'></p>
        </div>
        <div className='caption'>
            <p><b>Jinju Brown</b><br />HackViolet Director</p>
        </div>
      </div>
    </div>
      </div>
      
      
  )
}

export default Officers
