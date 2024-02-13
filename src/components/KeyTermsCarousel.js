import React, { useEffect, useState } from "react";
import KeyTermCard from "./KeyTermCard";

const KeyTermsCarousel = (props) => {
  const [keyTerms, setKeyTerms] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data/key-terms-chapter-${props.chapter}.json`)
    .then((response) => response.json())
      .then((data) => setKeyTerms(Object.entries(data)));
  }, [props.chapter]);

  return (
    <div className="container-fluid h-100 p-0">
      <div id="keyTermsCarousel" className="carousel h-100">
        <div className="carousel-inner h-100">
          {keyTerms.map(([term, definition], index) => (
            <div
              key={term}
              className={`carousel-item h-100 ${index === 0 ? "active" : ""}`}
            >
              <KeyTermCard key={term} term={term} definition={definition} />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev bg-dark"
          type="button"
          data-bs-target="#keyTermsCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next bg-dark"
          type="button"
          data-bs-target="#keyTermsCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default KeyTermsCarousel;
