// Sidebar.js
import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCompass, faGraduationCap, faTrophy, faLightbulb, faProjectDiagram, faBriefcase, faUserFriends, faBlog, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">wiZe</div>
      <nav>
        <Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link>
        <Link to="/explore"><FontAwesomeIcon icon={faCompass} /> Explore</Link>
        <Link to="/learn"><FontAwesomeIcon icon={faGraduationCap} /> Learn</Link>
        <Link to="/achieve"><FontAwesomeIcon icon={faTrophy} /> Achieve</Link>
        <Link to="/practice"><FontAwesomeIcon icon={faLightbulb} /> Practice</Link>
        <Link to="/projects"><FontAwesomeIcon icon={faProjectDiagram} /> Projects</Link>
        <Link to="/career"><FontAwesomeIcon icon={faBriefcase} /> Career</Link>
        <Link to="/mentorship"><FontAwesomeIcon icon={faUserFriends} /> Mentorship</Link>
        <Link to="/blogs"><FontAwesomeIcon icon={faBlog} /> Blogs</Link>
        <Link to="/community"><FontAwesomeIcon icon={faUsers} /> Community</Link>
      </nav>
      <div className="connect">
        <p>Connect with us</p>
        <div className="social-icons">
                  
<a href="#"><img src="https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_23-whatsapp-512.png" alt="WhatsApp"/></a>
          <a href="#"><img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-512.png" alt="LinkedIn"/></a>
          <a href="#"><img src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Instagram-512.png" alt="Instagram"/></a>
          <a href="#"><img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/91_Discord_logo_logos-512.png" alt="Discord"/></a>
          <a href="#"><img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Youtube_colored_svg-512.png" alt="YouTube"/></a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
