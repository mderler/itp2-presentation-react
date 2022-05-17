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
    this.realSize = props.size * props.size;

    this.state = {
      size: props.size,
      squares: Array(this.realSize).fill(false),
    };

    this.squareClicked = this.squareClicked.bind(this);
  }

  componentDidMount() {
    const blackAmount = Math.floor(this.realSize * 0.25);

    for (let i = 0; i < blackAmount; i++) {
      this.placeBlack();
    }
  }

  placeBlack() {
    let index = Math.floor(Math.random() * this.realSize);
    const squares = this.state.squares;

    while (true) {
      if (squares[index] === true) {
        index = (index + 1) % this.realSize;
        continue;
      }
      squares[index] = true;
      this.setState({});
      break;
    }
  }

  squareClicked(id) {
    const squares = this.state.squares;
    const gameBarState = getGameBarSate();

    if (!squares[id]) {
      updateGameBarState({ misses: gameBarState.misses + 1 });
      return;
    }

    updateGameBarState({ hits: gameBarState.hits + 1 });
    this.placeBlack();
    squares[id] = false;
  }

  render() {
    const size = this.props.size;
    let content = [];
    for (let y = 0; y < size; y++) {
      let row = [];
      for (let x = 0; x < size; x++) {
        const index = x + y * size;
        row.push(
          <td key={index} className="gameItem">
            <Square
              id={index}
              onClick={this.squareClicked}
              black={this.state.squares[index]}
            />
          </td>
        );
      }
      content.push(
        <tr key={y} className="gameRow">
          {row}
        </tr>
      );
    }
    return (
      <div id="board">
        <table className="gameTable">
          <tbody>{content}</tbody>
        </table>
      </div>
    );
  }
}

function Square(props) {
  const color = props.black === true ? "black" : "white";
  return (
    <button
      className="square"
      onMouseDown={props.onClick.bind(this, props.id)}
      style={{ background: color }}
    ></button>
  );
}

function updateGameBarState(props) {
  this.setState(props);
}

function getGameBarSate() {
  return this.state;
}

class GameBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hits: 0,
      misses: 0,
    };
    updateGameBarState = updateGameBarState.bind(this);
    getGameBarSate = getGameBarSate.bind(this);
  }

  render() {
    return (
        <div id="gameBar">
          <table>
            <tbody>
              <tr>
                <td>Hits: {this.state.hits}</td>
                <td>Misses: {this.state.misses}</td>
                <td>
                  <button className="button" onClick={() => this.setState({ hits: 0, misses: 0 })}>
                    Reset
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    );
  }
}

export default Game;
