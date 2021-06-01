import React from 'react';
import './Footer.css';
import SocialLinks from './SocialLinks';

const Footer = () => {
    return (
        <footer>
        <div className="wrapper">
          <h3>THANKS FOR VISITING</h3>
          <p>© {new Date().getFullYear()} Athithnarayan GK.</p>
          <SocialLinks />
        </div>
      </footer>
    )
}

export default Footer
