function Accumulator(str) {
  this.value = str;

  this.read = () => {
    this.value += +prompt("Введите значение");
  };
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

console.log(accumulator.value);
