import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    console.log("Counter Constructor");
  }

  componentWillMount() {
    console.log("Counter componentWillMount");
  }

  componentDidMount() {
    console.log("Counter componentDidMount");
  }
  ///you can use an arrow function in the callback: The problem with this syntax
  ///is that a different callback is created each time the LoggingButton renders.
  ///In most cases, this is fine. However, if this callback is passed as a prop to
  ///lower components, those components might do an extra re-rendering. We generally
  ///recommend binding in the constructor or using the class fields syntax, to avoid
  ///this sort of performance problem.
  render() {
    console.log("Counter Render");
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment{" "}
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-secondary btn-sm m-2"
        >
          Delete
        </button>
        {/* <ul>{this.renderTags()}</ul> */}
      </React.Fragment>
    );
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    //return this.state.count ===0?'Zero':this.state.count;
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}
export default Counter;
