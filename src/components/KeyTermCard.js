import React, { useState } from "react";
import "../App.css";

const KeyTermCard = (props) => {
  const [flipped, setFlipped] = useState(false);

  const handleCardClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div
        className={`mt-5 mx-auto card${flipped ? " flipped" : ""}`}
        onClick={handleCardClick}
      >
        <div className="card-front">
          <div className="card-body">
            <h5 className="card-title">{props.term}</h5>
          </div>
        </div>
        <div className="card-back">
          <div className="card-body">
            <p className="card-text">{props.definition}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyTermCard;
