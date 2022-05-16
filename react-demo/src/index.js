import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./components/counter";
import Demo from "./components/demo";
import Game from "./components/game";
import ColorChanger from "./components/hook";
import "./style.css";

function App() {
  return (
    <div>
      <div className="center counter">
        <Demo name="Counter" value={<Counter />} />
      </div>
      <div className="grad1">

      </div>
      <div className="center game">
        <Demo name="Game" value={<Game />} />
      </div>
      <div  className="grad2">

      </div>
      <div className="center colorchanger">
        <Demo name="Color Changer" value={<ColorChanger />} />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
