const camelize = (str) => {
  const strToArr = str.split("-");

  const resArr = strToArr.map((str, idx) => {
    return idx === 0 ? str : str[0].toUpperCase() + str.slice(1);
  });

  return resArr.join("");
};

console.log(camelize("background-color"));
