import Big from 'big.js';

const operations = {
  '+': 'plus',
  '-': 'minus',
  '×': 'times',
  '÷': 'div',
};

const operate = (num1, num2, operation) => {
  try {
    return operations[operation]
      ? (new Big(num1))[operations[operation]](new Big(num2))
      : null;
  } catch (err) {
    return NaN;
  }
};

operate.isValid = (operation) => !!operations[operation];

export default operate;
