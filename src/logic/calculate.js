import operate from './operate';

const operations = {
  '+/-': (total, next) => ({ total: -total, next: -next }),
  '%': (total, next) => ({ total: total / 100, next: next / 100 }),
  AC: () => 0,
};

const calculate = ({ total, next, operation }, btnName) => {
  const result = operate(total, next, btnName);
  return result
    ? { total: result, next, operation }
    : Object.assign(operations[btnName](total, next, btnName), { operation });
};

export default calculate;
