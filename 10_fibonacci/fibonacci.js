const fibonacci = function(num) {
    if(num == 0){
        return 0;
    }else if(num < 0){
        return 'OOPS';
    }
    let numArray = [0,1,1]
    for(i = 2; i<num; i++){
        numArray.push(numArray.at(-1)+numArray.at(-2));
    }return numArray.pop();

};

// Do not edit below this line
module.exports = fibonacci;
