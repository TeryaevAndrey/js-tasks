function Calculator() {
  this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };

  this.calculate = (str) => {
    let strToArr = str.split(" ");
    let a = +split[0];
    let sign = split[1];
    let b = +split[2];

    return this.methods[sign](a, b);
  };

  this.addMethod = (name, func) => {
    this.methods[name] = func;
  };
}
