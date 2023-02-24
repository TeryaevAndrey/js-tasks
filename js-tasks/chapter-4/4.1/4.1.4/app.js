let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

const getSum = (obj) => {
  let sum = 0;

  if (Object.keys(obj).length === 0) {
    sum = 0;
  } else {
    Object.entries(obj).forEach((item) => {
      sum += item[1];
    });
  }

  console.log(sum);
  return sum;
};

getSum(salaries);
