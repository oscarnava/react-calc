/* eslint-disable class-methods-use-this */
import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';

export default class ButtonPanel extends React.Component {
  handleClick = (buttonName) => this.props.onClick(buttonName)

  render() {
    return (
      <div className='button-panel'>
        <div className='row'>
          <Button name='AC' onClick={this.handleClick} />
          <Button name='±' onClick={this.handleClick} />
          <Button name='%' onClick={this.handleClick} />
          <Button name='÷' onClick={this.handleClick} color='orange' />
        </div>
        <div className='row'>
          <Button name='7' onClick={this.handleClick} />
          <Button name='8' onClick={this.handleClick} />
          <Button name='9' onClick={this.handleClick} />
          <Button name='×' onClick={this.handleClick} color='orange' />
        </div>
        <div className='row'>
          <Button name='4' onClick={this.handleClick} />
          <Button name='5' onClick={this.handleClick} />
          <Button name='6' onClick={this.handleClick} />
          <Button name='-' onClick={this.handleClick} color='orange' />
        </div>
        <div className='row'>
          <Button name='1' onClick={this.handleClick} />
          <Button name='2' onClick={this.handleClick} />
          <Button name='3' onClick={this.handleClick} />
          <Button name='+' onClick={this.handleClick} color='orange' />
        </div>
        <div className='row'>
          <Button name='0' onClick={this.handleClick} wide={true}/>
          <Button name='.' onClick={this.handleClick} />
          <Button name='=' onClick={this.handleClick} color='orange' />
        </div>
      </div>
    );
  }
}

ButtonPanel.propTypes = {
  onClick: PropTypes.func.isRequired,
};
