import React from "react";

class Game extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Board boxes={4} />
        <GameBar />
      </div>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: props.boxes,
    };
  }

  render() {
    const boxes = this.props.boxes;
    let content = [];
    for (let y = 0; y < boxes; y++) {
      let row = [];
      for (let x = 0; x < boxes; x++) {
        let index = x + y * boxes;
        row.push(
          <td className="tableSquare">
            <Square key={index} value={index} />
          </td>
        );
      }
      content.push(<tr className="tableRow">{row}</tr>);
    }
    return (
      <div>
        <table className="boardTable">{content}</table>
      </div>
    );
  }
}

class GameBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hits: 0,
      misses: 0,
      hps: 0,
    };
  }

  render() {
    return (
      <div>
        <table>
          <tr>
            <td>Hits: {this.state.hits}</td>
            <td>Misses: {this.state.misses}</td>
            <td>
              <button>Start</button>
            </td>
            <td>
              <button>Stop</button>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

function Square(props) {
  return (
    <button key={props.key} className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Game;
