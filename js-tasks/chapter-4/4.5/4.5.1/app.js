// Они могут вернуть внешний уже определенный объект

let testObject = {};

function A() {
  return testObject;
}

function B() {
  return testObject;
}

let a = new A();
let b = newB();
