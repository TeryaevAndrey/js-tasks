Function.prototype.defer = (ms) => {
  let f = this;

  return (...args) => {
    setTimeout(() => f.apply(this, args), ms);
  };
};

const f = (a, b) => {
  console.log(a + b);
};

f.defer(1000)(1, 2);