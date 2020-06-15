import React, { Component } from "react"; 

class BasketballPlayerForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleChange(event) {
    // first argument: keys and values you want to modify on state;
    // second arugment: callback function that will run after the setState runs;
    this.setState({[event.target.name]: event.target.value}, () => {
      console.log("state of bballplayerform", this.state);
    });
  }

  handleCancel(event) {
    this.props.clearCurrentPlayer();
    this.setState({firstName: "", lastName: ""});
  }

  render() {
    return (
      <div>
      <form onSubmit={(event) => this.props.handleSubmit(event, this.state.firstName, this.state.lastName)}>
        <label>First Name:</label>
        <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
        <br></br>
        <label>Last Name:</label>
        <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
        <br></br>
        <button>Submit</button>
        <button onClick={this.handleCancel}>Cancel</button>
      </form>
      </div>
    )
  }
}

export default BasketballPlayerForm;