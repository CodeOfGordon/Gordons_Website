import './HomeIntroduction.css';

export default function HomeIntroduction() {
  return (
    <div id="home-introduction-wrapper" className="info-block">
      <div className="intro-flex">
        <img
          className="author-img"
          alt="Author"
          src="/home-introduction/Author 1.png"
        />
        <div className="intro-content">
          <h1 className="intro-title">Hi, I’m Gordon Huynh</h1>
          <p className="basic-text">
            I am a student at the University of Waterloo with a passion for learning.
          </p>
          <div className="social-medias">
            <a
              className="icon-link"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/gordon-huynh-02a5571b3/"
            >
              <img
                className="icon-img"
                alt="Linkedin logo"
                src="/home-introduction/LinkedIn-Symbole 1.png"
              />
            </a>
            <a
              className="icon-link"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/CodeOfGordon?tab=repositories"
            >
              <img
                className="icon-img"
                alt="Github logo"
                src="/home-introduction/GitHub_Invertocat_Logo 1.png"
              />
            </a>
            <a
              className="resume-wrapper"
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1AZuH0TtcJ1zeRJwlqBP9MoFbTMO1GisN/view?usp=sharing"
            >
              Resume
            </a>
            <a
              className="icon-link"
              target="_blank"
              rel="noreferrer"
              href="https://www.figma.com/design/X13oHDNL1fgeMo7je4vSjJ/Personal-website?node-id=1-6&m=dev&t=HMH7n7xwRNnZRUGp-1"
            >
              <img
                className="icon-img"
                alt="Figma logo"
                src="/home-introduction/figma_logo.png"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}