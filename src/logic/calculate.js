import Big from 'big.js';
import operate from './operate';

const MAX_DISP = new Big('10000000000000000');

const formatNumber = (n) => {
  if (isNaN(n)) return n;
  return (n.gt(MAX_DISP) ? n.toExponential(15) : n.toFixed()).slice(0, 20);
};

const functions = {
  AC: () => ({ total: null, next: null, operation: null }),

  '±': (total, next) => (next ? ({ next: -next }) : ({ total: -total })),

  '=': (total, next, operation) => {
    if (operation) {
      const result = formatNumber(operate(total, next || total, operation));
      return ({ total: result, next: null, operation: null });
    }
    return ({});
  },

  '%': (total, next, operation) => {
    if (operation) {
      let result = operate(total, next || total, operation);
      if (result) {
        result = formatNumber(operate(result, '100', '÷'));
        return ({ total: result, next: null, operation: null });
      }
    }
    return ({});
  },
};

const addDigit = (next, digit) => {
  if (digit >= '0' && digit <= '9') return { next: next + digit };
  if (digit === '.') return next.includes('.') ? { next } : { next: next + digit };
  return null;
};

const setOperation = (total, next, operation, buttonName) => {
  if (operate.isValid(buttonName)) {
    if (operation) {
      next = functions['='](total, next, operation).total;
    }
    return { total: next, next: null, operation: buttonName };
  }
  return null;
};

const calculate = ({ total, next, operation }, buttonName) => addDigit(next || '', buttonName)
  || setOperation(total, next || total, operation, buttonName)
  || functions[buttonName](total, next, operation);

export default calculate;
