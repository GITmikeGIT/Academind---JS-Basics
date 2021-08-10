var path = require('path');
console.log(path.basename(__filename));

/** Arrays basics */
/* A collection of items, like - [ 1, 2, 3 ] - 0 indexed, has length */

/** Basics & Managing elements */
var array = [1, 2, 3];
console.log(array.length);
console.log(array[1]);

array[1] = 100;
array[3] = 100;
array[5] = 100;
console.log(array);

console.log();
