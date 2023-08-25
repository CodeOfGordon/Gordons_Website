import './App.css';
import Logos_block from './components/Logos_block.js';
import Caroussel_block from './components/Caroussel_block';
//import React, { useState } from 'react';
import city from './images/City.png';
import reflection from './images/Reflection.png';
import author from './images/Author 1.png';
import linkedin from './images/LinkedIn-Symbole 1.png';
import github from './images/GitHub_Invertocat_Logo 1.png';
import info_extra from './images/More-info2.png';
import git from './images/git.png';
import bash from './images/bash.png';
import C from './images/C.png';
import javascript from './images/javascript.png';
import react from './images/react.png';
import tailwind from './images/tailwind.png';
import python from './images/python.png';
import travel from './images/travel_therapy.png';
import pokemon from './images/pokemon_showdown.png';
import wallpaper from './images/wallpaper_playlist.png';
import left_arrow from './images/Left Arrow.png';
import right_arrow from './images/Right Arrow.png';


function App() {
  return (
    <div className="App">
      
      <span id="navbar-wrapper">
        <ul className="navbar">
          <a href="#navbar-wrapper" className="home">Home</a>
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
      
      <div id="about-me-wrapper" className="info_block">
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

      <div id="skills-wrapper" className="info_block">
        <h1>Skills</h1>
        <div id="logos">
          <Logos_block 
            img1={git} img1alt={"git"} 
            img2={bash} img2alt={"bash"} 
            img3={C} img3alt={"C"} 
            img4={javascript} img4alt={"javascript"} 
            img5={react} img5alt={"react"} />
          <br/>
          <Logos_block 
            img1={tailwind} img1alt={"tailwind"} 
            img2={python} img2alt={"python"}/>
        </div>
      </div>

      <div id="experience-wrapper" className="info_block">
        <h1>Experience</h1>
          <ul className="caroussel">
            <button className="caroussel_button">
              <img src={left_arrow} alt="left arrow of caroussel"/>
            </button>
            <Caroussel_block image={travel} altr={"travel therapy bot"}/>
            <Caroussel_block/>
            <Caroussel_block/>
            <button className="caroussel_button">
              <img src={right_arrow} alt="right arrow of caroussel"/>
            </button>
          </ul>
      </div>
      </body>
    </div>
  );
}

export default App;
