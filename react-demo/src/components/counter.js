import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div className="center">
        <button className="button" onClick={() => this.setState({ count: this.state.count + 1 })}>
          {this.state.count}
        </button>
      </div>
    );
  }
}

export default Counter;
