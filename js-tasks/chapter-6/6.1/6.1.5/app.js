let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

// const printReverseList = (list) => {
//   let arr = [];

//   while (list) {
//     arr.push(list.value);
//     list = list.next;
//   }

//   for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
//   }
// };

const printReverseList = (list) => {
  if (list.next) {
    printReverseList(list.next);
  }

  console.log(list.value);
};

printReverseList(list);
