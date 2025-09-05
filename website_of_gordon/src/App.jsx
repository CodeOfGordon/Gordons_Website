import './App.css';
import HomeIntroduction from './components/Biography/HomeIntroduction.jsx';
import AboutMe from './components/About-Me/AboutMe.jsx';
import Skills from './components/Skills/Skills.jsx';
import Experience from './components/Experience/Experience.jsx';
import { useState } from 'react';

function App() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div id="App">
      <nav id="navbar-wrapper">
        <button
          id="hamburger"
          aria-label="Toggle navigation"
          onClick={() => setNavOpen(!navOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <ul id="navbar" className={navOpen ? 'open' : ''}>
          <li><a href="#home-introduction-wrapper" onClick={() => setNavOpen(false)}>Home</a></li>
          <li><a href="#about-me-wrapper" onClick={() => setNavOpen(false)}>About me</a></li>
          <li><a href="#skills-wrapper" onClick={() => setNavOpen(false)}>Skills</a></li>
          <li><a href="#experience-wrapper" onClick={() => setNavOpen(false)}>Experience</a></li>
        </ul>
      </nav>

      <HomeIntroduction/>

      <div id="city-wrapper">
        <div id="city-image-container">
          <img id="city" alt="City" src="/City.png" />
          <a
            id="More-info2"
            target="_blank"
            rel="noreferrer"
            href="https://youindanang.com/dragon-bridge-da-nang-vietnam/"
            aria-label="Learn more about the dragon bridge"
          >
            <img id="info2-icon" alt="Extra info" src="/More-info2.png" />
          </a>
          <img id="reflection" alt="Reflection of city" src="/Reflection.png" />
        </div>
      </div>

      <AboutMe/>
      <Skills/>
      <Experience/>
    </div>
  );
}

export default App;