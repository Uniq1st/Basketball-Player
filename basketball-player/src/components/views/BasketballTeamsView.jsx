import React from "react";

function BasketballTeamsView(props) {
  return (
    <div className="team-grid">
      {props.teams.map(team => <div>{team}</div>)}
    </div>
    )
}
export default BasketballTeamsView;
