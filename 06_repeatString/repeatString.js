const repeatString = function(string, num) {
    if (num === 0) {
        let repetition = ""
        return repetition;
    } else if (num < 0) {
        let repetition = "ERROR";
        return repetition;        
    } 
    else {
    let repetition = string;
    for (let i = 1; i < num ; i++) {
        repetition += string;
    }
    return repetition;
}
};

// Do not edit below this line
module.exports = repeatString;
