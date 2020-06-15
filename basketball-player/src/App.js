import React, { Component } from "react";
import axios from "axios";
import "./App.css";
// import BasketballPlayerForm from "./components/BasketballPlayerForm";
// import GamesPlayed from "./components/GamesPlayed";
import { BasketballPlayerForm, GamesPlayed, BasketballTeamsContainer } from "./components";


class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPlayer: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearCurrentPlayer = this.clearCurrentPlayer.bind(this);
  }

  handleSubmit(event, firstName, lastName) {
    event.preventDefault();
    axios
      .get(
        `https://nba-players.herokuapp.com/players-stats/${lastName}/${firstName}`
      )
      .then((res) => res.data)
      .then((currentPlayer) => {
        this.setState({ currentPlayer: currentPlayer });
        console.log("currentPlayer on App State", currentPlayer);
      })
      .catch((err) => console.log(err));
  }

  clearCurrentPlayer() {
    this.setState({currentPlayer: {}});
  }

  render() {
    return (
      <div className="App">
        {console.log("APP STATE", this.state)}
        Full Name of Player: {this.state.currentPlayer.name}
        <br></br>
        Team Name of Player: {this.state.currentPlayer.team_name}

        <BasketballPlayerForm handleSubmit={this.handleSubmit} clearCurrentPlayer={this.clearCurrentPlayer} />
        <GamesPlayed gamesPlayed={this.state.currentPlayer.games_played} />
        <BasketballTeamsContainer />
      </div>
    );
  }
}

export default App;