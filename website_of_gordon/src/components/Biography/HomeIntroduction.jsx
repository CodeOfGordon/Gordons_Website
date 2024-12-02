import './HomeIntroduction.css';

export default function HomeIntroduction() {
    return(
     <div id="home-introduction-wrapper">
        <img id="author" alt="Author" src='/home-introduction/Author 1.png' />
        <div id="info">
          <h1 id="text-wrapper">Hi, I’m Gordon Huynh</h1>
          <h1 id="subtext-wrapper">I am a student at the University of Waterloo with a passion for learning</h1>
          <div id="Social-medias">
            <a target="noreferrer" href="https://www.linkedin.com/in/gordon-huynh-02a5571b3/">
              <img id="linkedin-symbole" alt="Linkedin logo" src='/home-introduction/LinkedIn-Symbole 1.png' />
            </a>
            <a target="noreferrer" href="https://github.com/CodeOfGordon?tab=repositories">
              <img id="github-invertocat" alt="Github logo" src='/home-introduction/GitHub_Invertocat_Logo 1.png' />
            </a>
            <a id="resume-wrapper"alt="resume box" target="noreferrer" href="https://drive.google.com/file/d/1AZuH0TtcJ1zeRJwlqBP9MoFbTMO1GisN/view?usp=sharing">
              <h1 id="resume">Resume</h1>
            </a>
            <a target="noreferrer" href="https://www.figma.com/design/X13oHDNL1fgeMo7je4vSjJ/Personal-website?node-id=1-6&m=dev&t=HMH7n7xwRNnZRUGp-1">
              <img id="figma" alt="Figma logo" src='/home-introduction/figma_logo.png' />
            </a>
          </div>
        </div>
      </div>
    );
}