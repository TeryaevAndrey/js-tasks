const readNumber = () => {
  let a;

  do {
    a = +prompt("Введите значение");
  } while (!isFinite(num));

  if (a === "" || num === null) {
    return null;
  }

  return +a;
};

readNumber();
