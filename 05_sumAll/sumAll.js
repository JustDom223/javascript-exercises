const sumAll = function(start, finish) {
    let finalNumber = 0
    if(start < 0 || finish < 0 ){
        finalNumber = 'ERROR';
    }else if(typeof(start) !== 'number' || typeof(finish) !== 'number'){
        finalNumber = 'ERROR';
    }else if(start < finish){
        for(let i = start; i < finish+1; i++){
            finalNumber += i;
        }
    }else{    
        for(let i = finish; i < start+1; i++){  
            finalNumber += i;
        }
    }
    return finalNumber
};

// Do not edit below this line
module.exports = sumAll;
