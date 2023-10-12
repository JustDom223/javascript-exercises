const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(a) {
  let sum = 0
  for (let i = 0; i < a.length; i++){
    sum += a[i]
  }
  return sum
  
};

const multiply = function(a) {
  let total = 1
  for (let i = 0; i < a.length; i++){
    total *= a[i]
  }
  return total
};

const power = function(a, b) {
  let sum = a
  for (let i = 0; i < b - 1; i++){
    sum *= a
  }
  return sum
};

const factorial = function(a) {
	let sum = 1
  for (let i = 0; i < a; i++){
    sum += sum * i
  }
  return sum
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
