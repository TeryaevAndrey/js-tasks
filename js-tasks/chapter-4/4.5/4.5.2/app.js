function Calculator() {
  this.read = () => {
    this.a = +prompt("Значение 1");
    this.b = +prompt("Значение 2");
  };

  this.sum = () => {
    return this.a + this.b;
  };

  this.mul = () => {
    return this.a * this.b;
  };
}
