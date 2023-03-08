const delay = (f, ms) => {
    return () => {
        setTimeout(() => f.apply(this, arguments), ms);
    };
}

let f1000 = delay(alert, 1000);