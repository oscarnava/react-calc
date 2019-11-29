import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import operate from './logic/operate';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('calculates operations correctly', () => {
  expect(operate(100, 5, '×').toFixed()).toBe('500');
  expect(operate(100, 5, '÷').toFixed()).toBe('20');
  expect(operate(100, 5, '+').toFixed()).toBe('105');
  expect(operate(100, 5, '-').toFixed()).toBe('95');

  expect(operate(100, 1, '?')).toBeNull();
  expect(operate(100, 0, '÷')).toBeNaN();
});
