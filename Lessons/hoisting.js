var path = require('path');
console.log(path.basename(__filename));
/**
 * Hoisting - variables declared later than assigning works too
 * Browser puts the declaration to the top of the script.
 */
var1 = 5;
console.log(var1);
var var1;
