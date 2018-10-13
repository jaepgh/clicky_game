import React from "react";
import CardGuess from "../card";

const Board = props => {
  return (
    <main className="row">
      {props.array.map(element => (
        <CardGuess
          key={element.id}
          onClick={props.onClick}
          id={element.id}
          image={element.image}
        />
      ))}
    </main>
  );
};

export default Board;
