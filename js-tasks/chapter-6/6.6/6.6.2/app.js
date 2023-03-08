const sum = (a) => {
    let sum = 0;
    
    const f = (b) => {
        sum += b;
        return f;
    }

    f.toString = () => {
        return sum;
    }

    return f;
}