import './App.css';
import HomeIntroduction from './components/Biography/HomeIntroduction.jsx';
import AboutMe from './components/About-Me/AboutMe.jsx';
import Skills from './components/Skills/Skills.jsx';
import Experience from './components/Experience/Experience.jsx';

function App() {

  return (
    <div id="App">
      
      <span id="navbar-wrapper">
        <ul id="navbar">
          <li><a href="#navbar-wrapper">Home</a></li>
          <li><a href="#about-me-wrapper">About me</a></li>
          <li><a href="#skills-wrapper">Skills</a></li>
          <li><a href="#experience-wrapper">Experience</a></li>
        </ul>
      </span>
      <body>

      <HomeIntroduction/>
      
      <div id="city-wrapper">
        <a id="More-info2" target="noreferrer" href="https://youindanang.com/dragon-bridge-da-nang-vietnam/">
          <img id="info2-icon" alt="Extra info" src='/More-info2.png'/>
        </a>
        <img id="city" alt="City" src="/City.png" />
        <img id="reflection" alt="Reflection of city" src='/Reflection.png' />
      </div>
      
      <AboutMe/>

      <Skills/>

      <Experience/>
      </body>
    </div>
  );
}

export default App;
