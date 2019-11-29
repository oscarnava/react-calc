/* eslint-disable class-methods-use-this */
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../styles/styles.css';


export default class App extends React.Component {
  render() {
    return (
      <div id="app" className="app">
        <Display value='0' />
        <ButtonPanel />
      </div>
    );
  }
}
