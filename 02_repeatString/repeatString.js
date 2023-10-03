const repeatString = function(string, num) {
    let word = string
    let outcome = ''
    if (num < 0)
        return 'ERROR'

    while (num > 0){
        outcome += word
        num--;
    };
    return outcome
};

// Do not edit below this line
module.exports = repeatString;
