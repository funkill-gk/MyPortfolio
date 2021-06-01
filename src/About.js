import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about">
        <div className="wrapper">
          <article>
            <div className="title">
              <h3>About Me</h3>
              <p className="separator" />
            </div>
            <div className="desc full">
              <h4 className="subtitle">My name is Athith.</h4>
              <p>
                I am a Full stack web developer based out of Tamil Nadu , southern part of India
              </p>
              <p>
                I really enjoy solving problems as well as fixing things. I am in the
                learning curve and always excited to learn new things; the more, the better. I love gaming (PC or console,you name it...).
                Open world RPGs are my thing ❤️. Spent a lot of time playing Witcher3-one of my all time fav ❤️.
              </p>
            </div>
            <div className="title">
              <h3>What do I do?</h3>
              <p className="separator" />
            </div>
            <div className="desc">
              <h4 className="subtitle">Minus(-) the Work</h4>
              <p>
                Apart from what I do in my work , I build  personal projects and learn by doing. 
                For Front-end , I am pretty familiar with <strong>React JS</strong> Framework and still I am expanding my expertise
                in the area. Also, the usual ones ,HTML and CSS. 
              </p>
              <p>
                For the back-end too I work with Javascript - Node Js. I also did use Firebase ,and MS SQL server.
              </p>
            </div>
            <div className="desc">
              <h4 className="subtitle">Work</h4>
              <p>
                I started my professional career , in one of the leading IT service provider in the world - <strong>TATA Consultancy Services</strong>
                ,where I took multiple roles of development , testing and also support functions. We worked in an Agile environment.
                I predominantly worked in .NET framework(MVC) and for testing - I worked with Selenium(C#).
              </p>
              <p>
                I also worked with few Legacy applications with VB .NET , SQL , C++. 
              </p>
            </div>
          </article>
        </div>
      </section>
    )
}

export default About
