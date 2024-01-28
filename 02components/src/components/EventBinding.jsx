import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
    // for 3rd approach : Binding in constructor
    this.changeState = this.changeState.bind(this);
  }
  changeState() {
    this.setState({
      message: "How can I help you?",
    });
    console.log(this);
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* 
    Approach 01:
    <button onClick={this.changeState.bind(this)}>Event Binding</button>
        */}
        {/* Approach 02
        <button onClick={() => this.changeState()}>Event Binding</button>
        */}
        {/* Approach 03 */}
        <button onClick={this.changeState}>Event Binding</button>
      </div>
    );
  }
}

export default EventBind;
