const sumInput = () => {
  let arr = [];
  let sum = 0;

  while (true) {
    const a = prompt("Введите значение");

    if (a === "" || a === null) {
      break;
    }

    arr.push(+a);
  }

  arr.forEach((num) => {
    sum += num;
  });

  return sum;
};

console.log(sumInput());
