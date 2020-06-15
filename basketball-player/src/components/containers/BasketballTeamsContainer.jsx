import React, { Component } from "react";
import axios from "axios";
import BasketballTeamsView from "../views/BasketballTeamsView"

class BasketballTeamsContainer extends Component {
  constructor() {
    super();
    this.state = {
      teams: []
    }
  }

  componentDidMount() {
    axios
      .get("https://nba-players.herokuapp.com/teams")
      .then(res => res.data)
      .then(allTeams => this.setState({teams: allTeams}))
      .catch(err => console.log(err));
  }

  render() {
    return <BasketballTeamsView teams={this.state.teams} />
  }
}

export default BasketballTeamsContainer;