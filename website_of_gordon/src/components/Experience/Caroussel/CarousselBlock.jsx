import React, { useState } from "react";
import './CarousselBlock.css';

export default function CarousselBlock({ projects }) {
    const [current, setCurrent] = useState(
      projects.length > 0 ? Math.floor(projects.length / 2) : 0
    );
    const visibleCount = 3;

    const handlePrev = () => setCurrent((prev) => Math.max(prev - 1, 0));
    const handleNext = () => setCurrent((prev) => Math.min(prev + 1, projects.length - 1));

    // Calculate indices for left, center, right slots
    const getVisibleIndices = () => {
        if (projects.length === 0) return [null, null, null];
        // If far left of caroussel
        if (current === 0) return [null, 0, 1 < projects.length ? 1 : null];
        // If far right of caroussel
        if (current === projects.length - 1) return [projects.length - 2 >= 0 ? projects.length - 2 : null, projects.length - 1, null];
        // If middle of caroussel
        return [current - 1, current, current + 1];
    };

    const visibleIndices = getVisibleIndices();

    return(
        <div id="caroussel-slider">
            <button
                className="caroussel-arrow left"
                onClick={handlePrev}
                disabled={current === 0}
                aria-label="Previous"
            >
                &#8592;
            </button>
            <div className="caroussel-track">
              {visibleIndices.map((idx, i) => (
                <div
                  key={i}
                  className={`caroussel-slide ${i === 1 ? "caroussel-center" : "caroussel-side"}`}
                >
                  {idx !== null ? (
                    <>
                      <a href={projects[idx].link} target="_blank" rel="noopener noreferrer">
                        <img
                          src={projects[idx].image}
                          alt={projects[idx].alt}
                          title={projects[idx].title}
                        />
                      </a>
                      {/* Only show title for center image */}
                      {i === 1 && <p className="basic-text">{projects[idx].title}</p>}
                    </>
                  ) : (
                    // Empty slot for when the image is at the start or end
                    <div className="empty-slot"></div>
                  )}
                </div>
              ))}
            </div>
            <button
                className="caroussel-arrow right"
                onClick={handleNext}
                disabled={current === projects.length - 1}
                aria-label="Next"
            >
                &#8594;
            </button>
        </div>
    );
}
