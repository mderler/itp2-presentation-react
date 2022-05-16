import React from "react";

function Demo(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      {props.value}
    </div>
  );
}

export default Demo;
