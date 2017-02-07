import React, { Component } from 'react';

import { createStore } from './redux';

const initialState = { count: 0 };

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT': return { count: state.count + action.amount };
    case 'DECREMENT': return { count: state.count - action.amount };
    case 'RESET': return { count: 0 };
    default: return state;
  }
}

const incrementAction = { type: 'INCREMENT', amount: 1 };
const decrementAction = { type: 'DECREMENT', amount: 1 };
const resetAction = { type: 'RESET' };

const store = createStore(reducer, initialState);

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }

  increment() {
    let amount = this.refs.amount.value;
    store.dispatch(incrementAction);
  }

  decrement() {
    let amount = this.refs.amount.value;
    store.dispatch(decrementAction);
  }

  reset() {
    store.dispatch(resetAction);
  }

  render() {
    const count = store.getState().count;
    return (
      <div className="counter">
        <span className="counter__count">{count}</span>

        <div className="buttons">
          <button className="buttons__decrement" onClick={this.decrement}>-</button>
          <button className="buttons__reset" onClick={this.reset}>R</button>
          <button className="buttons__increment" onClick={this.increment}>+</button>
        </div>

        <input type="text" ref="amount" defaultValue="1" />
      </div>
    )
  }
}
