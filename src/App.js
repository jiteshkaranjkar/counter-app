import React, { Component } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {
  constructor() {
    super();
    console.log("App constructor");
  }
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 2 },
      { id: 3, value: 1 },
      { id: 4, value: 5 },
      { id: 5, value: 0 }
    ]
  };

  componentWillMount() {
    console.log("App componentWillMount");
  }

  componentDidMount() {
    console.log("App componentDidMount");
  }

  render() {
    console.log("App Render");
    return (
      <React.Fragment>
        <header className="App-header" />
        <NavBar
          totalCounter={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        </main>
      </React.Fragment>
    );
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;

    this.setState({
      counters
    });
  };

  handleReset = () => {
    this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(x => x.id !== counterId);
    this.setState({ counters });
  };
}

export default App;
