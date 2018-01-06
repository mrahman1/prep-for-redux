import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux'

//reducer takes in an action and a state
const reducer = (state = {count: 101}, action) => {
  console.log('state:', state);
  console.log('action:', action);

  switch(action.type){
    case 'INCREMENT':
      return {count: state.count + 1}
    case 'DECREMENT':
      return {count: state.count - 1}
    default:
      return state;
  }
}

const store = createStore(reducer)
const apple = console.log('apple')

store.subscribe = (() => {
  console.log('the new state is',store.getState());
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Counter />
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
    );
  }
}

class Counter extends Component {

  increment = () => {
    store.dispatch({type: 'INCREMENT'})
  };

  decrement = () => {
    store.dispatch({type: 'DECREMENT'})
    // this.setState(prevState => ({ count: prevState.count - 1 }));
  };

  // renderDescription = () => {
  //   const remainder = store.getState % 5;
  //   const upToNext = 5 - remainder;
  //   return `The current count is less than ${store.getState() + upToNext}`;
  // };

  render() {
    return (
      <div className="Counter">
        <h1>{store.getState().count}</h1>
        <button onClick={this.decrement.count}> - </button>
        <button onClick={this.increment.count}> + </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
