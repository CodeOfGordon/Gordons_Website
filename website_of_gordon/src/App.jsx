import './App.css';
import LogosBlock from './components/LogosBlock.jsx';
import CarousselBlock from './components/CarousselBlock.jsx';

function App() {
  const carrouselInfo = {
    images: ['/caroussel/travel_therapy.png', '/caroussel/pokemon_showdown.png', '/caroussel/wallpaper_playlist.png', '/caroussel/express-test-message-board-sc.png'],
    altr: ["Travel Therapy Discord Bot", "Pokemon Showdown Demo", "Wallpaper Engine Playlist Playlist", "Express Test Message Board"],
    titles: ["Travel Therapy Discord Bot", "Pokemon Showdown Demo", "Wallpaper Engine Playlist Playlist", "Express Test Message Board"],
    links: ['https://github.com/alexszokolay/Uoft-ECKS',
      'https://github.com/CodeOfGordon/Pokemon-battle-simulator',
      'https://github.com/CodeOfGordon/Wallpaper-Engine-Playlist-Playlist',
      'https://github.com/CodeOfGordon/test_express_message_board'
    ]
  }
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
      <div id="home-introduction-wrapper">
        <img id="author" alt="Author" src='/bio/Author 1.png' />
        <div id="info">
          <h1 id="text-wrapper">Hi, I’m Gordon Huynh</h1>
          <h1 id="subtext-wrapper">I am a student at the University of Waterloo with a passion for learning</h1>
          <div id="Social-medias">
            <a target="noreferrer" href="https://www.linkedin.com/in/gordon-huynh-02a5571b3/">
              <img id="linkedin-symbole" alt="Linkedin logo" src='/bio/LinkedIn-Symbole 1.png' />
            </a>
            <a target="noreferrer" href="https://github.com/CodeOfGordon?tab=repositories">
              <img id="github-invertocat" alt="Github logo" src='/bio/GitHub_Invertocat_Logo 1.png' />
            </a>
            <a id="resume-wrapper"alt="resume box" target="noreferrer" href="https://drive.google.com/file/d/1AZuH0TtcJ1zeRJwlqBP9MoFbTMO1GisN/view?usp=sharing">
              <h1 id="resume">Resume</h1>
            </a>
            <a target="noreferrer" href="https://www.figma.com/design/X13oHDNL1fgeMo7je4vSjJ/Personal-website?node-id=1-6&m=dev&t=HMH7n7xwRNnZRUGp-1">
              <img id="figma" alt="Figma logo" src='/bio/figma_logo.png' />
            </a>
          </div>
        </div>
      </div>
      
      <div id="city-wrapper">
        <a id="More-info2" target="noreferrer" href="https://youindanang.com/dragon-bridge-da-nang-vietnam/">
          <img id="info2-icon" alt="Extra info" src='/More-info2.png'/>
        </a>
        <img id="city" alt="City" src="/City.png" />
        <img id="reflection" alt="Reflection of city" src='/Reflection.png' />
      </div>
      
      <div id="about-me-wrapper" className="info-block">
        <h1>About me</h1>
        <p className='basic-text'>
          I’m student studying a Bachelors Degree in Math Economics, with an interest in data science and software development, 
          <br/>
          and this is my portfolio. Feel free to take a look!
        </p>
      </div>

      <div id="skills-wrapper" className="info-block">
        <h1>Skills</h1>
        <div id="logos">
          <LogosBlock 
            img1={'/skills/git.png'} img1alt={"git"} 
            img2={'/skills/bash.png'} img2alt={"bash"} 
            img3={'/skills/C.png'} img3alt={"C"} 
            img4={'/skills/javascript.png'} img4alt={"javascript"} />
          <br/>
          <LogosBlock 
            img1={'/skills/react.png'} img1alt={"react"}
            img2={'/skills/tailwind.png'} img2alt={"tailwind"} 
            img3={'/skills/python.png'} img3alt={"python"}
            img4={'/skills/sql.png'} img4alt={"SQL"}/>
          <br/>
          <LogosBlock 
            img1={'/skills/c++.png'} img1alt={"c++"}
            img2={'/skills/qt.png'} img2alt={"qt"}
            img3={'/skills/express-js.png'} img3alt={"Express JS"}/>
        </div>
      </div>

      <div id="experience-wrapper" className="info-block">
        <h1>Experience</h1>
        <CarousselBlock 
          images={carrouselInfo.images} 
          altr={carrouselInfo.altr} 
          titles={carrouselInfo.titles}
          links={carrouselInfo.links}
        />
      </div>
      </body>
    </div>
  );
}

export default App;
