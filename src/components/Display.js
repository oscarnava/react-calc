/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
import React from 'react';

export default class Display extends React.Component {
  render() {
    return (
      <div className='display'>
        {this.props.value || '0'}
      </div>
    );
  }
}
