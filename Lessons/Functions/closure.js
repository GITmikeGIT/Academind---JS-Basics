var path = require('path');
console.log(path.basename(__filename));

/** Functions (Advanced) */
function generator(input) {
  var number = input ?? 0;
  return function() {
    return number * 2;
  };
}

var calc = generator(900);
var calcAnother = generator(100);
console.log(calc());
console.log(calcAnother());

/** Immediately Invoked Function Executions (IIFEs) */
console.log('Immediately Invoked Function Executions (IIFEs)');
/**
 * To not pollute global variable values - creates local scope
 */
(function calc() {
  var number = 10;
  console.log(number);
})();

(function calcWithParam(input) {
  var number = input ?? 0;
  console.log(number);
})(100);

var obj = {};
/** Overwriting global variable inside IIFE function */
(function overwrite(input) {
  obj.name = 'Max';
})(obj);

console.log(obj);
