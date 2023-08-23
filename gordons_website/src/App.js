import './App.css';
//import React, { useState } from 'react';
import city from './images/City.png';
import reflection from './images/Reflection.png';
import author from './images/Author 1.png';
import linkedin from './images/LinkedIn-Symbole 1.png';
import github from './images/GitHub_Invertocat_Logo 1.png';
import info_extra from './images/More-info2.png';


function App() {
  return (
    <div className="App">
      
      <span className="navbar-wrapper">
        <ul className="navbar">
          <a href="#home-introduction-wrapper" className="home">Home</a>
          <a href="#about-me-wrapper" className="about-me">About me</a>
          <a className="experience">Experience</a>
          <a className="contact">Contact</a>
        </ul>
      </span>
      <body>
      <div id="home-introduction-wrapper">
        <img className="author" alt="Author" src={author} />
        <div className="info">
          <h1 className="text-wrapper">Hi, I’m Gordon Huynh</h1>
          <h1 className="subtext-wrapper">I am a student at the University of Waterloo with a passion for tech</h1>
          <div className="Social-medias">
            <a target="_blank" href="https://www.linkedin.com/in/gordon-huynh-02a5571b3/">
              <img className="linkedin-symbole" alt="Linkedin symbole" src={linkedin} />
            </a>
            <a target="_blank" href="https://github.com/CodeOfGordon?tab=repositories">
              <img className="github-invertocat" alt="Github invertocat" src={github} />
            </a>
            <a className="resume-wrapper" target="_blank" href="https://drive.google.com/file/d/18oq8aBr6L-bAwDpONeU_5ohLOpXfCApU/view?usp=sharing">
              <h1 className="resume">Resume</h1>
            </a>
          </div>
        </div>
      </div>
      
      <div className="city-wrapper">
        <a className="More_info2" target="_blank" href="https://youindanang.com/dragon-bridge-da-nang-vietnam/">
          <img id="info2_icon" alt="Extra info" src={info_extra}/>
        </a>
        <img className="city" alt="City" src={city} />
        <img className="reflection" alt="Reflection of city" src={reflection} />
      </div>
      
      <div id="about-me-wrapper">
        <h1>About me</h1>
        <p id="about-me-text">
          I’m student studying for a Bachelors Degree of Arts in Math Economics, 
          and I am planning to minor in computing considering my interest in tech, 
          and how I hope to find a way to marry the two topics someday. 
          <br/><br/>
          There are many things I have learned, yet to learn, and things that I will want 
          to learn in the future.
          This is the main reason why I want to go into the field of tech, 
          so I can keep life more interesting.
        </p>
      </div>
      </body>
      

    </div>
  );
}

export default App;
