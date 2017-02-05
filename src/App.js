import React, { Component } from 'react';

import Store from './store';

count initialState = { count: 0 };

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    
  }

  decrement() {

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
