/* eslint-disable class-methods-use-this */
import React from 'react';

export default class Button extends React.Component {
  render() {
    return (
      <div className='button'>
        {this.props.name}
      </div>
    );
  }
}
