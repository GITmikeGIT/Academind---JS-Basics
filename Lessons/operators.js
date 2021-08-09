var path = require('path');
console.log(path.basename(__filename));

/** Basic operators */
var a = 5;
var b = 10;

console.log(a + b);

a += b;
console.log(a);

a = 5.2;
b = 4.5;
console.log(a + b);

/** Concatenating */
a = 'Join ';
b = 'Us!';
console.log(a + b);

a = 'Join ';
b = 3;
console.log(a + b);

a = 3;
b = ' join';
console.log(a + b);

a = true;
b = ' join';
console.log(a + b);

a = [1, 2];
b = ' join';
console.log(a + b);

a = 12;
b = '1';
console.log(a + b);

a = 12;
b = true;
console.log(a + b);

a = true;
b = true;
console.log(a + b);

a = 12;
b = null;
console.log(a + b);

a = 12;
b = undefined;
console.log(a + b);

a = '12 ';
b = undefined;
console.log(a + b);

a = 12;
b = NaN;
console.log(a + b);

/** Subtraction */

a = 12;
b = 1;
console.log(a - b);

a--;
console.log(a);

a = 'Split us';
b = 'us';
console.log(a - b);

a = 12;
b = '1';
console.log(a - b);

a = 12;
b = true;
console.log(a - b);

a = 12;
b = null;
console.log(a - b);

a = 12;
b = undefined;
console.log(a - b);

a = 12;
b = NaN;
console.log(a - b);
