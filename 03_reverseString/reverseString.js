const reverseString = function(word) {
    let splitString = word.split('')
    let revString = ''
    for (var l = splitString.length - 1; l >= 0; l--) {
        revString += splitString[l]
    };
    return revString.toString();
    
};

// const reverseString = function (string) {
//     return string.split("").reverse().join("");
//   };
  
//   module.exports = reverseString;
  

// Do not edit below this line
module.exports = reverseString;
