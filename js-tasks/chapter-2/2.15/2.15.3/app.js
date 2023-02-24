function pow(x, n) {
  let num = x;

  if (n < 1) {
    return alert("Число не натуральное");
  }

  for (let i = 0; i < n; i++) {
    num *= x;
  }

  return num;
}

// С вводимыми значениями пользователем

let x = prompt("Введте x");
let y = prompt("Введите y");

if (n < 1) {
  alert("Число не натуральное");
} else {
  alert(pow(x, y));
}
