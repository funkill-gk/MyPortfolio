import React from 'react';
import Project from './Project';
import './Portfolio.css';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/react-fontawesome';

const Portfolio = props => {
    return (
        <section id="projects">
        <div className="projects-container">
          <div className="heading">
            <h3 className="title">My Works</h3>
            <p className="separator" />
            <p className="subtitle">
              Below are the projects that I built, using React JS, which I have been learning these days.
              
            </p>
          </div>
          <div className="projects-wrapper">
            <Project
              title="E-commerce Website - the Ducks"
              img={'\ecom.png'}
              tech="js css react node"
              link="#"
              repo="https://github.com/funkill-gk/theDucks-EcomWebsite"
            >
              <small>
                Built using React.js , React Router,CSS and Firebase for Authentication.
              </small>
              <p>
                This is a full-stack E-Commerce website that I made for better understanding of ReactJS and Firebase. 
              </p>
            </Project>
            <Project
              title="Portfolio Website."
              img={'\silder1.PNG'}
              tech="react css"
              link="https://rakeshk-portfolio.netlify.app/"
              repo="https://github.com/funkill-gk/photoSlider-React-portfolio"
            >
              <small>
                Built using React Js and CSS.
              </small>
              <p>
                A simple portfolio website for shocasing art works that uses react for slider animations.
              </p>
            </Project>
            <Project
              title="Pokedex - Web."
              img={'\pokedex.png'}
              tech="react css"
              link="#"
              repo="https://github.com/funkill-gk/pokedex-withReact"
            >
              <small>Built using React Js, axios for API and CSS..</small>
              <p>
                A simple React web app for Pokedex. This application is connected to PokeAPI with Axios to retreive all pokemon details.
              </p>
            </Project>
            
          </div>
        </div>
      </section>
    )
}

export default Portfolio
