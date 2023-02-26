let arr = [1, 2, 3];

const shuffle = (arr) => {
  arr.sort(() => Math.random() - 0.5);
};

shuffle(arr);
