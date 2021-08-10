var path = require('path');
console.log(path.basename(__filename));
/**
 * STRICT MODE - is enabled so can't create global variable without var keyword
 */
var gloVar = 6;
var var1 = 5;
console.log([gloVar, var1]);
