import React, { Component } from "react";

class ClassClick extends Component {
  clickHandle() {
    alert("Classclick Button Clicked");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandle}>ClassClick</button>
      </div>
    );
  }
}

export default ClassClick;
