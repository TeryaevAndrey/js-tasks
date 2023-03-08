// Через цикл

// const sumTo = (n) => {
//   let sum = 0;

//   for (let i = 0; i <= n; i++) {
//     sum += i;
//   }

//   return sum;
// };

// Через рекурсию

// const sumTo = (n) => {
//   if (n === 1) {
//     return 1;
//   }

//   return n + sumTo(n - 1);
// };

// Арифм. прогрессия

const sumTo = (n) => {
    return n * (n + 1) / 2;
}
