import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./components/counter";
import Demo from "./components/demo";
import Game from "./components/game";
import ColorChanger from "./components/hook";
import "./style.css";

function App() {
  return (
    <div className="center">
      <Demo name="Counter" value={<Counter />} />
      <Demo name="Game" value={<Game />} />
      <Demo name="Color Changer" value={<ColorChanger />} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
