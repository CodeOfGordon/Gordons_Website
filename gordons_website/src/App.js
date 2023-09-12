import { useState } from 'react';
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
import SQL from './images/sql.png';

function App() {
  const images_ = [travel, pokemon, wallpaper];
  const headers = [
    "Travel Therapy Discord Bot",
    "Pokemon Showdown Demo",
    "Wallpaper Engine Playlist Playlist"
  ]
  const texts = [
    "We created a Discord bot using Python, the Co:here API, and Discord API. This bot uses AI to suggest places in Toronto to calm down depending on the input it receives.",
    "We created a demo UI for a pokemon showdown game with randomized pokemon and movesets. This was created using Python and Tkinter.",
    "I created this to help others create a playlist of their playlists! I achieved this using Wallpaper Engine’s commands, batch, vbs, and understanding task manager."
  ];
  
  

  return (
    <div id="App">
      
      <span id="navbar-wrapper">
        <ul id="navbar">
          <a href="#navbar-wrapper">Home</a>
          <a href="#about-me-wrapper">About me</a>
          <a href="#skills-wrapper">Skills</a>
          <a href="#experience-wrapper">Experience</a>
        </ul>
      </span>
      <body>
      <div id="home-introduction-wrapper">
        <img id="author" alt="Author" src={author} />
        <div id="info">
          <h1 id="text-wrapper">Hi, I’m Gordon Huynh</h1>
          <h1 id="subtext-wrapper">I am a student at the University of Waterloo with a passion for learning</h1>
          <div id="Social-medias">
            <a target="noreferrer" href="https://www.linkedin.com/in/gordon-huynh-02a5571b3/">
              <img id="linkedin-symbole" alt="Linkedin symbole" src={linkedin} />
            </a>
            <a target="noreferrer" href="https://github.com/CodeOfGordon?tab=repositories">
              <img id="github-invertocat" alt="Github invertocat" src={github} />
            </a>
            <a id="resume-wrapper" target="noreferrer" href="https://drive.google.com/file/d/18oq8aBr6L-bAwDpONeU_5ohLOpXfCApU/view?usp=sharing">
              <h1 id="resume">Resume</h1>
            </a>
          </div>
        </div>
      </div>
      
      <div id="city-wrapper">
        <a id="More_info2" target="noreferrer" href="https://youindanang.com/dragon-bridge-da-nang-vietnam/">
          <img id="info2_icon" alt="Extra info" src={info_extra}/>
        </a>
        <img id="city" alt="City" src={city} />
        <img id="reflection" alt="Reflection of city" src={reflection} />
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
        </p>
      </div>

      <div id="skills-wrapper" className="info_block">
        <h1>Skills</h1>
        <div id="logos">
          <Logos_block 
            img1={git} img1alt={"git"} 
            img2={bash} img2alt={"bash"} 
            img3={C} img3alt={"C"} 
            img4={javascript} img4alt={"javascript"} />
          <br/>
          <Logos_block 
            img1={react} img1alt={"react"}
            img2={tailwind} img2alt={"tailwind"} 
            img3={python} img3alt={"python"}
            img4={SQL} img4alt={"SQL"}/>
        </div>
      </div>

      <div id="experience-wrapper" className="info_block">
        <h1>Experience</h1>
        <div id="caroussel">
          <Caroussel_block images={images_} altr={headers} titles={headers} paragraphs={texts}/>
        </div>
      </div>
      </body>
    </div>
  );
}

export default App;
