var path = require('path');
console.log(path.basename(__filename));
/**
 * Dynamic typing
 */
var var1 = 5;
var Var1 = 10;
console.log([var1, Var1]);

/**
 * Re-assigning variable
 */
var var1 = 5;
console.log(var1);
var1 = 10;
console.log(var1);

/**
 * Changing value type during re-assigning
 */
var var1 = 5;
console.log(var1);
var var1 = '10';
console.log(var1);

/**
 *  !!! BEST PRACTICE !!!
 *  Do not change initial value type
 */
