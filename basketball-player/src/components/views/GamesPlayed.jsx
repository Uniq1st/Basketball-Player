import React from "react";

// Presentational Component;
// It has no state nor lifecycle methods;
// All it does, and all it ever will do, is render HTML + JavaScript aka JSX;
function GamesPlayed(props) {
  return <h1>Games Played By Player: {props.gamesPlayed}</h1>
}

export default GamesPlayed;