import React, { useState } from "react";

export default function ColorChanger() {
  const colors = ["white", "green", "blue", "violet", "cyan", "red", "grey"];
  const [color, setColor] = useState(colors[0]);

  const btnList = colors.map((c) => (
    <button className="button" key={c} onClick={() => setColor(c)}>
      {c}
    </button>
  ));
  return <div>{btnList}
      <div className="circle" style={{ background: color }}>
      </div>
    </div>;
}
