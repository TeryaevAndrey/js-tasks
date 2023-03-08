const arr = [1, 2, 3, 4, 5, 6, 7];

const inBetween = (a, b) => {
  return (x) => {
    return x >= a && x <= b;
  };
};

console.log(arr.filter(inBetween(3, 6)));

const inArray = (arr) => {
  return (x) => {
    return arr.includes(x);
  };
};

console.log(arr.filter(inArray([1, 2, 10])));
