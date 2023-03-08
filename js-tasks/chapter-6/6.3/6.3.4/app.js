const sum = (a) => {
    return (b) => {
        return a + b;
    }
}

console.log(sum(1)(2));