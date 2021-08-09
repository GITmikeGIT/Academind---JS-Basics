var path = require('path');
console.log(path.basename(__filename));

function calc() {
  return 'Inside calc function';
}

var returned = calc();
console.log(returned);

function calc2() {
  var stringVar = 'Inside calc2 function';
  return stringVar;
}

var returned = calc2();
console.log(returned);

function calc3(num1, num2) {
  return num1 + num2;
}

var returned = calc3(1, 2);
console.log(returned);

var calculator = calc3;
console.log(calculator(10, 2));
