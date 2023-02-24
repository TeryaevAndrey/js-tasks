let n = 10;

start: for(let i = 2; i <= n; i++) {
    for(let j = 2; j < i; i++) {
        if(i % j === 0) {
            continue start;
        }
    }
    
    alert(i);
}