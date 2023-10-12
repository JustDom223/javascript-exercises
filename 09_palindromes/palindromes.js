const palindromes = function (str) {
    const formattedString = str.toLowerCase().replace(/[^a-z0-9]/g, ''); // .replace(/[^a-z0-9]/g, ''); checkes for anything that isnt these letters or numbers and removes them
    // const lowerString = a.toLowerCase()
    // const strippedString = lowerString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    // const finalString = strippedString.replace(/\s+/g,"");
    return formattedString === formattedString.split('').reverse().join('');
    // const newArray = finalString.split('')
    // const reversedArray = newArray.reverse()
    // const reversedString = reversedArray.join('')
    // // return reversedString
    // if(reversedString === finalString){
    //     return true
    // } else {
    //     return false
    // };
   
};


// Do not edit below this line
module.exports = palindromes;
