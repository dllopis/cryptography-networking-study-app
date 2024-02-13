import React, { useEffect, useState } from 'react';
import "../App.css";

const KeyTermsComponent = (props) => {
  const [keyTerms, setKeyTerms] = useState([]);

  useEffect(() => {
    fetch(`/data/key-terms-chapter-${props.chapter}.json`)
      .then((response) => response.json())
      .then((data) => setKeyTerms(Object.entries(data)));
  }, [props.chapter]);

  return (
    <div className="container-fluid d-flex flex-column mt-5">
      <h1 className="mt-4 mb-4 text-center">Key Terms: Chapter {props.chapter}</h1>
      <div className="row g-4 justify-content-center">
        {keyTerms.map(([term, definition]) => (
          <div key={term} className="col-12 col-md-6 col-lg-4">
            <div className="card mx-auto">
              <div className="card-body">
                <h5 className="card-title border-bottom border-2 border-info">{term}</h5>
                <p className="card-text">{definition}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyTermsComponent;
