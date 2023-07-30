import './App.css';
//import React, { useState } from 'react';
import city from './images/City.png';
import reflection from './images/Reflection.png';
import author from './images/Author 1.png';
import linkedin from './images/LinkedIn-Symbole 1.png';
import github from './images/GitHub_Invertocat_Logo 1.png';
import resume from './images/resume.png';


function App() {
  return (
    <div className="App">
      

      <div className="home-introduction-wrapper">
        
        <span className="navbar-wrapper">
          <div className="navbar">
            <a className="home">Home</a>
            <a className="about-me">About me</a>
            <a className="experience">Experience</a>
            <a className="contact">Contact</a>
          </div>
        </span>

        <img className="author" alt="Author" src={author} />
        <h1 className="text-wrapper">Hi, I’m Gordon Huynh</h1>
        <h1 className="subtext-wrapper">I am a student at the University of Waterloo with a passion for tech</h1>
        <a href="https://www.linkedin.com/in/gordon-huynh-02a5571b3/">
          <img className="linkedin-symbole" alt="Linkedin symbole" src={linkedin} />
        </a>
        <a href="https://github.com/CodeOfGordon?tab=repositories">
          <img className="github-invertocat" alt="Github invertocat" src={github} />
        </a>
        <a href="https://drive.google.com/file/d/18oq8aBr6L-bAwDpONeU_5ohLOpXfCApU/view?usp=sharing">
          <img className="resume" alt="resume button" src={resume} />
        </a>
      </div>
      
      <img className="city" alt="City" src={city} />
      <img className="reflection" alt="Reflection" src={reflection} />
      
    </div>
  );
}

export default App;
