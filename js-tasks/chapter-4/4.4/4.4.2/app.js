let calculator = {
    read() {
        this.a = +prompt("Значение 1"),
        this.b = +prompt("Значение 2")
    },

    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    }
}

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

console.log(calculator);