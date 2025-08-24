const removeFromArray = function (array, ...num) {
    let removed = array;
    for (let i = 0; i < num.length; i++) {
        removed = removed.filter(item => item !== num[i]);
        
    }
    return removed;
};

// Do not edit below this line
module.exports = removeFromArray;
