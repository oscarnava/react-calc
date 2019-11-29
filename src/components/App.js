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
    this.setState(newState);
  }

  render() {
    const { state: { total, next } } = this;
    return (
      <div id="app" className="app">
        <Display value={next || total} />
        <ButtonPanel onClick={this.handleClick} />
      </div>
    );
  }
}
