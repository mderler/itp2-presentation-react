import React from "react";

class Game extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Board size={4} />
        <GameBar />
      </div>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: props.size,
      squares: [],
    };

    const realSize = props.size * props.size;
    const maxSquares = Math.floor(realSize * 0.25);

    this.state.squares.fill(false, 0, realSize);
    let running = true;
    while (running) {}
  }

  render() {
    const size = this.props.size;
    let content = [];
    for (let y = 0; y < size; y++) {
      content.push(<Row row={y} size={size} />);
    }
    return (
      <div key="board">
        <table className="boardTable">
          <tbody>{content}</tbody>
        </table>
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
          <tbody>
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
          </tbody>
        </table>
      </div>
    );
  }
}

function Square(props) {
  const squareID = "square" + props.value;
  return (
    <td key={"boardSquare" + props.value} className="boardSquare">
      <button
        key={squareID}
        className="square"
        onClick={console.log.bind(this, "test")}
      >
        {props.value}
      </button>
    </td>
  );
}

function Row(props) {
  let row = [];
  for (let x = 0; x < props.size; x++) {
    const index = x + props.row * props.size;
    row.push(<Square value={index} />);
  }

  return (
    <tr key={"boardRow" + props.row} className="boardRow">
      {row}
    </tr>
  );
}

export default Game;
