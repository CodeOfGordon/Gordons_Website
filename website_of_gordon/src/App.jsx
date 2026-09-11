import './App.css';
import HomeIntroduction from './components/Biography/HomeIntroduction.jsx';
import AboutMe from './components/About-Me/AboutMe.jsx';
import Skills from './components/Skills/Skills.jsx';
import WorkExperience from './components/WorkExperience/WorkExperience.jsx';
import Projects from './components/Experience/Experience.jsx';
import { useState } from 'react';

function App() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div id="App">
      <nav id="navbar-wrapper">
        <button
          id="hamburger"
          aria-label="Toggle navigation"
          aria-expanded={navOpen}
          aria-controls="navbar"
          onClick={() => setNavOpen(!navOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <ul id="navbar" className={navOpen ? 'open' : ''}>
          <li><a href="#home-introduction-wrapper" onClick={() => setNavOpen(false)}>Home</a></li>
          <li><a href="#about-me-wrapper" onClick={() => setNavOpen(false)}>About me</a></li>
          <li><a href="#work-experience-wrapper" onClick={() => setNavOpen(false)}>Experience</a></li>
          <li><a href="#skills-wrapper" onClick={() => setNavOpen(false)}>Skills</a></li>
          <li><a href="#projects-wrapper" onClick={() => setNavOpen(false)}>Projects</a></li>
        </ul>
      </nav>

      <main>
        <HomeIntroduction/>

        <div id="city-wrapper">
          <div id="city-image-container">
            <img id="city" alt="Illustration of Da Nang's Dragon Bridge" src="/City.png" />
            <a
              id="More-info2"
              target="_blank"
              rel="noreferrer"
              href="https://youindanang.com/dragon-bridge-da-nang-vietnam/"
              aria-label="Learn more about Da Nang's Dragon Bridge"
            >
              <img id="info2-icon" alt="" src="/More-info2.png" />
            </a>
            <img id="reflection" alt="" src="/Reflection.png" />
          </div>
        </div>

        <AboutMe/>
        <WorkExperience/>
        <Skills/>
        <Projects/>
      </main>
    </div>
  );
}

export default App;
