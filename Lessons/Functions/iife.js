var path = require('path');
console.log(path.basename(__filename));

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
