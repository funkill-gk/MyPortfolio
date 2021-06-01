import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/react-fontawesome';
import 'react-fontawesome';
import '@fortawesome/free-solid-svg-icons';

const SocialLinks = () => {
    return (
        <div className="social">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css"></link>
      <a
        href="https://twitter.com/iamathithya"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's Twitter profile"
      >
        {' '}
        <i className="fab fa-twitter" />
      </a>
      
      <a
        href="mailto:athithiyer@outlook.com"
        target="_blank"
        rel="noopener noreferrer"
        title="Send a mail to author"
      >
        {' '}
        <i class="fas fa-at"></i>
      </a>
      <a
        id="profile-link"
        href="https://github.com/funkill-gk"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's GitHub Profile"
      >
        {' '}
        <i className="fab fa-github" />
      </a>
      
    </div>
    )
}

export default SocialLinks
