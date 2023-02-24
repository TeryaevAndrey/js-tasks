let schedule = {};

const isEmpty = (obj) => {
    if(Object.keys(obj).length === 0) {
        return false;
    }

    return true;
}

alert(isEmpty(schedule));

schedule["8:30"] = "get up";

alert(isEmpty(schedule))