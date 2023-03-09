Function.prototype.defer = (ms) => {
  setTimeout(this, ms);
};

const f = () => {
  console.log("hello");
};

f.defer(1000);
