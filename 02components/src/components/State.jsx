import React, { Component } from "react";

class stateFunc extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome To my channel",
    };
  }
  change() {
    this.setState({
      message: "Thank You for Subscribing",
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.change()}>Subscribe</button>
      </div>
    );
  }
}

export default stateFunc;
