import "../style.css";
import React, { Component } from "react";
import cross from "../resources/cross.png";
import circle from "../resources/circle.png";

class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  state = {};

  render() {
    let imgSrc;

    if (this.props.value === "X") {
      imgSrc = cross;
    } else if (this.props.value === "O") {
      imgSrc = circle;
    } else {
      imgSrc = "";
    }

    return (
      <div
        className="cell"
        onClick={() => {
          this.props.onClick();
        }}
      >
        <img src={imgSrc} alt="" />
      </div>
    );
  }
}

export default Cell;
