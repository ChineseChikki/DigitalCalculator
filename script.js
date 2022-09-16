'use strict';

const result = document.getElementById('userInput');
console.log(result);

// function calculate(number) {
//   result.value = result.value + number;
// }

const calculate = number => {
  result.value += number;
};

const Result = () => {
  try {
    result.value = eval(result.value);
  } catch (err) {
    alert('Enter the valid Input');
  }
};

const clr = () => {
  result.value = ' ';
};

const del = () => {
  result.value = result.value.slice(0, -1);
};
