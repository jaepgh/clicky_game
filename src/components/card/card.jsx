import React from "react";
import "./card.css";

const CardGuess = props => {
  return (
    <div className="col-md-4 ">
      <div
        className="card mb-4"
        key={props.id}
        value={props.id}
        onClick={() => props.onClick(props.id)}
      >
        <div className="img-container">
          <img alt="Animal" src={props.image} />
        </div>
      </div>
    </div>
  );
};

export default CardGuess;
