/* eslint-disable class-methods-use-this */
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import '../styles/styles.css';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (buttonName) => {
    const newState = calculate(this.state, buttonName);
    // const stt = this.state
    // console.log('Current state:', Object.assign(stt, newState));
    this.setState(newState);
  }

  render() {
    const { state: { total, next } } = this;
    return (
      <div id="app" className="app">
        <Display value={next || (isNaN(total) ? 'Error' : total)} />
        <ButtonPanel onClick={this.handleClick} />
      </div>
    );
  }
}
