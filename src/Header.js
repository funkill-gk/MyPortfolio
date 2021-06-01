import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header id="welcome-section">
      <div className="forest" />
      <div className="silhouette" />
      <div className="moon" />
      <div className="container">
        <h1>
          <span className="line">A</span>
          <span className="line">Full Stack</span>
          <span className="line">
            <span className="color">D</span>eveloper .
          </span>
        </h1>
        <div className="buttons">
          <a href="#projects">my portfolio</a>
          <a href="#contact" className="cta">
            get in touch
          </a>
        </div>
      </div>
    </header>
    )
}

export default Header
