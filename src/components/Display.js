/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
import React from 'react';
import PropTypes from 'prop-types';

export default class Display extends React.Component {
  render() {
    return (
      <div className='display'>
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
