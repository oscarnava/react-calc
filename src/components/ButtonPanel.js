/* eslint-disable class-methods-use-this */
import React from 'react';
import Button from './Button';

export default class ButtonPanel extends React.Component {
  render() {
    return (
      <div className='button-panel'>
        <div className='row'>
          <Button name='AC' />
          <Button name='+/-' />
          <Button name='%' />
          <Button name='÷' color='orange' />
        </div>
        <div className='row'>
          <Button name='7' />
          <Button name='8' />
          <Button name='9' />
          <Button name='x' color='orange' />
        </div>
        <div className='row'>
          <Button name='4' />
          <Button name='5' />
          <Button name='6' />
          <Button name='-' color='orange' />
        </div>
        <div className='row'>
          <Button name='1' />
          <Button name='2' />
          <Button name='3' />
          <Button name='+' color='orange' />
        </div>
        <div className='row'>
          <Button name='0' wide={true}/>
          <Button name='.' />
          <Button name='=' color='orange' />
        </div>
      </div>
    );
  }
}
