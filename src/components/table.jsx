import "../style.css";
import Cell from "./cell";
import Status from "./status";
import React, { Component } from "react";
import slash from "../resources/slash.png";

class Table extends Component {
  slashMappings;
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      isXnext: false,
      winner: null,
    };
    this.slashMappings = new Map([
      [-1, "R1"],
      [14, "R2"],
      [47, "R3"],
      [3, "C1"],
      [10, "C2"],
      [19, "C3"],
      [8, "D1"],
      [12, "D2"],
    ]);
  }
  renderCell(i) {
    return (
      <Cell
        value={this.state.squares[i]}
        onClick={() => this.clickHandler(i)}
      />
    );
  }

  render() {
    const winnerDetails = this.calWinner(this.state.squares);
    let messsage;
    if (winnerDetails.winner) {
      messsage = `Winner :${winnerDetails.winner}`;
    } else {
      messsage = `Player :${this.state.isXnext ? "O" : "X"}`;
    }

    console.log();

    return (
      <div className="table">
        <img
          src={winnerDetails.winner ? slash : ""}
          id="slash"
          className={this.slashMappings.get(winnerDetails.lineHash)}
        />
        {/* <img src={slash} alt="ok" id="slash" className="D2" /> */}
        {this.renderCell(0)}
        {this.renderCell(1)}
        {this.renderCell(2)}
        <br />
        {this.renderCell(3)}
        {this.renderCell(4)}
        {this.renderCell(5)}
        <br />
        {this.renderCell(6)}
        {this.renderCell(7)}
        {this.renderCell(8)}
        <br />
        <Status msg={messsage}></Status>
      </div>
    );
  }

  clickHandler(i) {
    const newSquares = this.state.squares.slice();

    if (newSquares[i] || this.calWinner(newSquares).winner) {
      return;
    }

    if (this.state.isXnext) {
      newSquares[i] = "O";
      this.setState({
        squares: newSquares,
        isXnext: !this.state.isXnext,
      });
    } else {
      newSquares[i] = "X";
      this.setState({
        squares: newSquares,
        isXnext: !this.state.isXnext,
      });
    }
  }
  calWinner() {
    let squares = this.state.squares;
    const lines = [
      [0, 1, 2], //3
      [3, 4, 5], //12
      [6, 7, 8], //21
      [0, 3, 6], //9
      [1, 4, 7], //12
      [2, 5, 8], //15
      [0, 4, 8], //12
      [2, 4, 6], //12
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      // console.log(a + b * b - c);
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return { winner: squares[a], lineHash: a + b * b - c };
      }
    }
    return { winner: null, line: null };
  }
}

export default Table;
