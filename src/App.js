import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div className="counter">
        <span className="counter__count">{this.state.count}</span>

        <div className="buttons">
          <button className="buttons__decrement" onClick={this.decrement}>-</button>
          <button className="buttons__increment" onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}
