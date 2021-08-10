var path = require('path');
console.log(path.basename(__filename));

/** Push, Pop, Unshift and Shift */
console.log('Push, Pop, Unshift and Shift');

var array = [1, 2, 3];
array.push(4);

console.log(array);

var array = [1, 2, 3, 4];

console.log(array.pop());
console.log(array);

var array = [1, 2, 3, 4];

console.log(array.shift());
console.log(array);

var array = [1, 2, 3, 4];

array.unshift(0);
console.log(array);
