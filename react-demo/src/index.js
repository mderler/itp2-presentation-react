import React from "react";
import ReactDOM from "react-dom";
import Counter from "./components/counter";
import Demo from "./components/demo";
import Game from "./components/game";
import "./style.css";

function App() {
  return (
    <div>
      <Demo name="Counter" value={<Counter />} />
      <Demo name="Game" value={<Game />} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
