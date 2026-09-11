import './AboutMe.css';

export default function AboutMe() {
  return (
    <section id="about-me-wrapper" className="info-block" aria-labelledby="about-me-title">
      <div className="about-me__layout">
        <div className="about-me__heading">
          <h1 id="about-me-title">About me</h1>
          <p className="about-me__lead">I like finding the useful idea inside a complicated problem.</p>
        </div>

        <div className="about-me__details">
          <p>
            At Waterloo, I study Mathematical Economics with a minor in Computing. I build across
            data, machine learning, cloud systems, and software, with the same goal: make complex
            things easier to use.
          </p>

          <dl className="about-me__facts">
            <div>
              <dt>Studying</dt>
              <dd>Mathematical Economics, with a Computing minor</dd>
            </div>
            <div>
              <dt>Building</dt>
              <dd>Data tools, machine learning systems, and product software</dd>
            </div>
          </dl>

        </div>
      </div>
    </section>
  );
}
