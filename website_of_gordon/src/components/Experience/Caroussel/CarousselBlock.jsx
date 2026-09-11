import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { LuArrowLeft, LuArrowRight, LuArrowUpRight } from "react-icons/lu";
import "./CarousselBlock.css";

export default function CarousselBlock({ projects }) {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => () => window.cancelAnimationFrame(frameRef.current), []);

  const moveTo = (index) => {
    const track = trackRef.current;
    const slide = track?.children[index];
    if (!track || !slide) return;

    const left = slide.getBoundingClientRect().left - track.getBoundingClientRect().left + track.scrollLeft;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({ left, behavior: reduceMotion ? "auto" : "smooth" });
    setCurrent(index);
  };

  const handleScroll = () => {
    window.cancelAnimationFrame(frameRef.current);
    frameRef.current = window.requestAnimationFrame(() => {
      const track = trackRef.current;
      if (!track) return;

      const trackLeft = track.getBoundingClientRect().left;
      const closest = Array.from(track.children).reduce(
        (best, slide, index) => {
          const distance = Math.abs(slide.getBoundingClientRect().left - trackLeft);
          return distance < best.distance ? { index, distance } : best;
        },
        { index: 0, distance: Number.POSITIVE_INFINITY },
      );
      setCurrent(closest.index);
    });
  };

  if (projects.length === 0) return null;

  return (
    <div className="project-carousel">
      <div
        ref={trackRef}
        className="project-carousel__track"
        onScroll={handleScroll}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") moveTo(Math.max(0, current - 1));
          if (event.key === "ArrowRight") moveTo(Math.min(projects.length - 1, current + 1));
        }}
        tabIndex="0"
        aria-label="Project carousel. Use the left and right arrow keys to browse."
      >
        {projects.map((project, index) => (
          <article className="project-card" key={`${project.title}-${project.image}`} aria-current={index === current ? "true" : undefined}>
            <h2>{project.title}</h2>
            {project.link ? (
              <a className="project-card__media" href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.alt} loading={index < 2 ? "eager" : "lazy"} />
                <span className="project-card__visit">View project <LuArrowUpRight aria-hidden="true" /></span>
              </a>
            ) : (
              <div className="project-card__media">
                <img src={project.image} alt={project.alt} loading={index < 2 ? "eager" : "lazy"} />
              </div>
            )}
          </article>
        ))}
      </div>

      <div className="project-carousel__controls">
        <span className="project-carousel__count" aria-live="polite">
          {String(current + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
        </span>
        <div className="project-carousel__progress" aria-hidden="true">
          <span style={{ transform: `scaleX(${(current + 1) / projects.length})` }} />
        </div>
        <div className="project-carousel__buttons">
          <button type="button" onClick={() => moveTo(current - 1)} disabled={current === 0} aria-label="Previous project">
            <LuArrowLeft aria-hidden="true" />
          </button>
          <button type="button" onClick={() => moveTo(current + 1)} disabled={current === projects.length - 1} aria-label="Next project">
            <LuArrowRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}

CarousselBlock.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      link: PropTypes.string,
    }),
  ).isRequired,
};
