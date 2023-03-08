// setInterval

// const printNumbers = (from, to) => {
//     const currentValue = from;

//     let timer = setInterval(() => {
//         console.log(currentValue);

//         if(currentValue === to) {
//             clearInterval(timer);
//         }

//         currentValue++;
//     }, 1000);
// }

// setTimeout

const printNumbers = (from, to) => {
  let currentValue = from;

  setTimeout(function go() {
    console.log(currentValue);

    if (currentValue < to) {
      setTimeout(go, 1000);
    }

    currentValue++;
  }, 1000);
};

printNumbers(5, 10);
