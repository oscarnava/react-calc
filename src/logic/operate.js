import Big from 'big.js';

const operations = {
  '+': 'plus',
  '-': 'minus',
  '×': 'times',
  '÷': 'div',
};

const operate = (num1, num2, operation) => (
  operations[operation]
    ? (new Big(num1))[operations[operation]](new Big(num2))
    : null
);

export default operate;
