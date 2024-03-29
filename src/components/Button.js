/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  handleClick = ({ target: { innerText } }) => {
    this.props.onClick(innerText);
  }

  render() {
    const { props: { name, color = 'lightgray', wide = false } } = this;

    return (
      <div className='button' style={{ backgroundColor: color, flexGrow: wide ? 1 : 0 }} onClick={this.handleClick}>
        {name}
      </div>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
};
