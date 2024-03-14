const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
	temp = 0
  for (let i = 0; i < arr.length; i++){
    temp += arr[i]
  }
  return temp
};

const multiply = function(arr) {
  temp = 1
  for (let i = 0; i < arr.length; i++){
    temp *= arr[i]
  }
  return temp
};

const power = function(a, b) {
	return Math.pow(a, b)
};

const factorial = function(n) {
	temp = 1
  for(let i = 1; i <= n; i++){
    temp *= i
  }
  return temp
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
