/* eslint-disable class-methods-use-this */
import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  render() {
    return (
      <div style={{ border: 'dotted thin red', display: 'inline-block' }}>
        {this.props.name}
      </div>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
};
