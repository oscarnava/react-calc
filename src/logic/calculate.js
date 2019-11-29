import operate from './operate';

const operations = {
  '+/-': (total, next) => ({ total: -total, next: -next }),
  '%': (total, next) => ({ total: total / 100, next: next / 100 }),
  AC: () => 0,
};

const addDigit = (next, digit) => {
  if (digit >= '0' && digit <= '9') return { next: next + digit };
  if (digit === '.') return next.includes('.') ? { next } : { next: next + digit };
  return null;
};

const execOperation = (total, next, buttonName) => {
  const result = operate(total, next, buttonName);
  if (result) return { total: result, next };
  return null;
};

const calculate = ({ total, next, operation }, buttonName) => addDigit(next || '', buttonName)
  || execOperation(total, next, buttonName)
  || Object.assign(operations[buttonName](total, next, buttonName), { operation });

export default calculate;
