import "../style.css";
import Cell from "./cell";
import Status from "./status";
import React, { Component } from "react";

class Table extends Component {
  magicSquare;
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      isXnext: false,
      p1Num: 0,
      p2Num: 0,
    };
    this.magicSquare = [2, 7, 6, 9, 5, 1, 4, 5, 8];
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
    const winner = this.calWinner(this.state.squares);
    let messsage;
    if (winner) {
      messsage = `Winner :${winner}`;
    } else {
      messsage = `Player :${this.state.isXnext ? "O" : "X"}`;
    }

    return (
      <div className="table">
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

    if (newSquares[i] || this.calWinner(newSquares)) {
      return;
    }
    if (this.state.p1Num === 15) alert("p1");
    if (this.state.p2Num === 15) alert("p2");

    if (this.state.isXnext) {
      newSquares[i] = "O";
      this.setState({
        squares: newSquares,
        isXnext: !this.state.isXnext,
        p1Num: this.state.p2Num + this.magicSquare[i],
      });
      console.log("p1", this.state.p1Num);
    } else {
      newSquares[i] = "X";
      this.setState({
        squares: newSquares,
        isXnext: !this.state.isXnext,
        p2Num: this.state.p2Num + this.magicSquare[i],
      });
      console.log("p2", this.state.p2Num);
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
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }
}

export default Table;
