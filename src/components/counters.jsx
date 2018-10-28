import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  constructor() {
    super();
    console.log("Counters Constructor");
  }

  componentWillMount() {
    console.log("Counters componentWillMount");
  }

  componentDidMount() {
    console.log("Counters componentDidMount");
  }

  render() {
    console.log("Counters Render");
    const { onReset, onDelete, onIncrement, counters } = this.props;
    return (
      <div>
        <button
          onClick={() => onReset()}
          className="btn btn-secondary btn-sm m-2"
        >
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
          />
        ))}
      </div>
    );
  }
}
export default Counters;
