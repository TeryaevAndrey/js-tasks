const makeCounter = () => {
  let count = 0;

  const counter = () => {
    return count++;
  };

  counter.set = (value) => (count = value);

  counter.decrease = () => count--;

  return counter;
};
