import './App.css';
import LogosBlock from './components/LogosBlock.jsx';
import CarousselBlock from './components/CarousselBlock.jsx';
import travel from './assets/travel_therapy.png';
import pokemon from './assets/pokemon_showdown.png';
import wallpaper from './assets/wallpaper_playlist.png';

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
          <li><a href="#navbar-wrapper">Home</a></li>
          <li><a href="#about-me-wrapper">About me</a></li>
          <li><a href="#skills-wrapper">Skills</a></li>
          <li><a href="#experience-wrapper">Experience</a></li>
        </ul>
      </span>
      <body>
      <div id="home-introduction-wrapper">
        <img id="author" alt="Author" src='/Author 1.png' />
        <div id="info">
          <h1 id="text-wrapper">Hi, I’m Gordon Huynh</h1>
          <h1 id="subtext-wrapper">I am a student at the University of Waterloo with a passion for learning</h1>
          <div id="Social-medias">
            <a target="noreferrer" href="https://www.linkedin.com/in/gordon-huynh-02a5571b3/">
              <img id="linkedin-symbole" alt="Linkedin symbole" src='/LinkedIn-Symbole 1.png' />
            </a>
            <a target="noreferrer" href="https://github.com/CodeOfGordon?tab=repositories">
              <img id="github-invertocat" alt="Github invertocat" src='/GitHub_Invertocat_Logo 1.png' />
            </a>
            <a id="resume-wrapper" target="noreferrer" href="https://drive.google.com/file/d/1AZuH0TtcJ1zeRJwlqBP9MoFbTMO1GisN/view?usp=sharing">
              <h1 id="resume">Resume</h1>
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
          I’m student studying for a Bachelors Degree of Arts in Math Economics, 
          and I am planning to minor in computing considering my interest in tech! 
          <br/><br/>
          There are many things I have learned, yet to learn, and things that I will want 
          to learn in the future; and I hope I work towards these goals in the workplace!
        </p>
      </div>

      <div id="skills-wrapper" className="info-block">
        <h1>Skills</h1>
        <div id="logos">
          <LogosBlock 
            img1={'/git.png'} img1alt={"git"} 
            img2={'/bash.png'} img2alt={"bash"} 
            img3={'/C.png'} img3alt={"C"} 
            img4={'/javascript.png'} img4alt={"javascript"} />
          <br/>
          <LogosBlock 
            img1={'/react.png'} img1alt={"react"}
            img2={'/tailwind.png'} img2alt={"tailwind"} 
            img3={'/python.png'} img3alt={"python"}
            img4={'/sql.png'} img4alt={"SQL"}/>
        </div>
      </div>

      <div id="experience-wrapper" className="info-block">
        <h1>Experience</h1>
        <CarousselBlock images={images_} altr={headers} titles={headers} paragraphs={texts}/>
      </div>

      {/* <div id="form-wrapper" className="info-block">
        <h1>Under construction</h1>
        <p className='basic-text'>
          
        </p>
        <form id='email'>
          
        </form>
      </div> */}
      </body>
    </div>
  );
}

export default App;
