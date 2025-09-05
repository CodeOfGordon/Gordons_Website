import React, { useState, useEffect } from "react";
import './CarousselBlock.css';

export default function CarousselBlock ({images, altr, titles, links}) {
    const [current, setCurrent] = useState(
      images.length > 0 ? Math.floor(images.length / 2) : 0
    );
    const visibleCount = 3;

    const handlePrev = () => setCurrent((prev) => Math.max(prev - 1, 0));
    const handleNext = () => setCurrent((prev) => Math.min(prev + 1, images.length - 1));

    // Calculate indices for left, center, right slots
    const getVisibleIndices = () => {
        if (images.length === 0) return [null, null, null];
        // If far left of caroussel
        if (current === 0) return [null, 0, 1 < images.length ? 1 : null];
        // If far right of caroussel
        if (current === images.length - 1) return [images.length - 2 >= 0 ? images.length - 2 : null, images.length - 1, null];
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
                      <a href={links[idx]} target="_blank" rel="noopener noreferrer">
                        <img
                          src={images[idx]}
                          alt={altr[idx]}
                          title={titles[idx]}
                        />
                      </a>
                      {/* Only show title for center image */}
                      {i === 1 && <p className="basic-text">{titles[idx]}</p>}
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
                disabled={current === images.length - 1}
                aria-label="Next"
            >
                &#8594;
            </button>
        </div>
    );
}