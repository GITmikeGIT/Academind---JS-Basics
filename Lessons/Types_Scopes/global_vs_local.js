var path = require('path');
console.log(path.basename(__filename));

/** Global vs Local Scope */
/** Global - Window */
/**
 * Local - inside Global
 * While creating function
 * Variables are not accessible outside
 * */

/** Excercise */
var test = 'Global Scope';

function localScope() {
  test = 'Local Scope'; // Automaticaly generates global scope variable - can't be used if strict mode is enabled
  console.log(test);
}
localScope();
console.log(test);
