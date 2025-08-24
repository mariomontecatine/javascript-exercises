const sumAll = function (a, b) {
    let total = 0;
    let smallNum = (a < b) ? a : b;
    let bigNum = (a < b) ? b : a;
    

    if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b) ) {
        return "ERROR"
    }

    for (let i = smallNum; i <= bigNum; i++) {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
