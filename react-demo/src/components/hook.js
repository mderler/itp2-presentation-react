import React, { useState } from "react";

export default function ColorChanger() {
  const colors = ["white", "green", "blue", "violet", "cyan"];
  const [color, setColor] = useState(colors[0]);

  const btnList = colors.map((c) => (
    <button key={c} onClick={() => setColor(c)}>
      {c}
    </button>
  ));
  return <div style={{ background: color }}>{btnList}</div>;
}
