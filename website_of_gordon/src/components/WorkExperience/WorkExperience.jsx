import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { LuArrowUpRight, LuCalendarDays, LuMapPin, LuPlay, LuX } from "react-icons/lu";
import { workExperience } from "../../data/workExperienceData.jsx";
import "./WorkExperience.css";

function DemoPreview({ media, onOpen }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!video || reduceMotion) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.45 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <article className="demo-card">
      <button
        className="demo-preview"
        type="button"
        onClick={(event) => onOpen(media, event.currentTarget)}
        aria-label={`Watch the full ${media.title} demo`}
      >
        <video
          ref={videoRef}
          className="demo-preview__video"
          muted
          loop
          playsInline
          preload="metadata"
          poster={media.poster}
          aria-hidden="true"
        >
          <source src={media.previewWebm} type="video/webm" />
          <source src={media.previewMp4} type="video/mp4" />
        </video>
        <span className="demo-preview__action">
          <LuPlay aria-hidden="true" />
          Watch full demo
        </span>
      </button>
      <div className="demo-card__copy">
        <h3>{media.title}</h3>
        <p>{media.description}</p>
      </div>
    </article>
  );
}

DemoPreview.propTypes = {
  media: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    previewWebm: PropTypes.string.isRequired,
    previewMp4: PropTypes.string.isRequired,
  }).isRequired,
  onOpen: PropTypes.func.isRequired,
};

function DemoDialog({ media = null, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !media) return;
    dialog.showModal();
  }, [media]);

  if (!media) return null;

  return (
    <dialog
      ref={dialogRef}
      className="demo-dialog"
      onClose={onClose}
      onCancel={onClose}
      aria-labelledby="demo-dialog-title"
    >
      <div className="demo-dialog__header">
        <div>
          <p>Stratis product demo</p>
          <h2 id="demo-dialog-title">{media.title}</h2>
        </div>
        <button className="demo-dialog__close" type="button" onClick={() => dialogRef.current?.close()}>
          <LuX aria-hidden="true" />
          <span className="visually-hidden">Close demo</span>
        </button>
      </div>
      <video className="demo-dialog__video" controls autoPlay playsInline preload="metadata" poster={media.poster}>
        <source src={media.fullWebm} type="video/webm" />
        <source src={media.fullMp4} type="video/mp4" />
        Your browser does not support embedded video.
      </video>
      <p className="demo-dialog__description">{media.description}</p>
    </dialog>
  );
}

DemoDialog.propTypes = {
  media: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    fullWebm: PropTypes.string.isRequired,
    fullMp4: PropTypes.string.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

export default function WorkExperience() {
  const [activeDemo, setActiveDemo] = useState(null);
  const triggerRef = useRef(null);

  const openDemo = (media, trigger) => {
    triggerRef.current = trigger;
    setActiveDemo(media);
  };

  const closeDemo = () => {
    setActiveDemo(null);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  };

  return (
    <section id="work-experience-wrapper" className="info-block work-experience" aria-labelledby="work-experience-title">
      <div className="work-experience__heading">
        <h1 id="work-experience-title">Work experience</h1>
        <p>I turn complicated systems into useful tools people can understand and rely on.</p>
      </div>

      <ol className="experience-list">
        {workExperience.map((experience) => (
          <li key={experience.company} className="experience-entry">
            <div className="experience-entry__identity">
              <a
                className={experience.logoTheme === "dark" ? "experience-entry__brand-link experience-entry__brand-link--dark" : "experience-entry__brand-link"}
                href={experience.companyUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit ${experience.company} website`}
              >
                {experience.logo ? (
                  <img src={experience.logo} alt={`${experience.company} logo`} />
                ) : <span>{experience.company}</span>}
                <LuArrowUpRight aria-hidden="true" />
              </a>
            </div>
            <div className="experience-entry__content">
              <div className="experience-entry__header">
                <div>
                  <h2>{experience.company}</h2>
                  <p className="experience-entry__role">{experience.role}</p>
                </div>
                <div className="experience-entry__meta">
                  <span><LuCalendarDays aria-hidden="true" />{experience.period}</span>
                  <span><LuMapPin aria-hidden="true" />{experience.location}</span>
                </div>
              </div>
              <p className="experience-entry__summary">{experience.summary}</p>

              {experience.media && (
                <div className="demo-grid" aria-label="Stratis product demos">
                  {experience.media.map((media) => (
                    <DemoPreview key={media.id} media={media} onOpen={openDemo} />
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>

      <DemoDialog media={activeDemo} onClose={closeDemo} />
    </section>
  );
}
