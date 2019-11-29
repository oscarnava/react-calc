/* eslint-disable class-methods-use-this */
import React from 'react';
import PropTypes from 'prop-types';

export default class Display extends React.Component {
  render() {
    return (
      <div style={{ border: 'dotted thick blue' }}>
        {this.props.value}
      </div>
    );
  }
}

Display.propTypes = {
  value: PropTypes.string.isRequired,
};

Display.defaultProps = {
  value: '0',
};
