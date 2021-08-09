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
console.log('Concatenating');

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
console.log('Subtraction');

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

/** Multiplication & Floating point problems */
console.log('Multiplication & Floating point problems ');

a = 12;
b = 2;

a *= b;
console.log(a);

a = 1.3;
b = 2.2;

console.log(a * b);

if ((a * b).toFixed(2) == 2.86) console.log('true');
else console.log('false');

a = 2;
b = '2.2';

console.log(a * b);

a = 2;
b = null;

console.log(a * b);

a = 2;
b = Infinity;

console.log(a * b);

/** Division & Modulus */
console.log('Division & Modulus');

a = 12;
b = 2;

console.log(a / b);

a = 12;
b = '2';

console.log(a / b);

a = 3.3;
b = 2.2;

console.log((a / b).toFixed(2));

a = 10;
b = 3;

console.log(a % b);

a = 10;
b = 0;

console.log(a / b);

a = 10;
b = Infinity;

console.log(a / b);

/** Comparing values */
console.log('Comparing values');

console.log(1 == 1);
console.log(1 === 1);
console.log(1 == '1');
console.log(1 === '1');
console.log(1 != 2);
console.log(1 !== '1');
console.log(1 > 1);
console.log(1 > 0);
console.log(1 >= 0);

/** Important Rules */
console.log('Important Rules');

console.log(NaN == NaN);
console.log(NaN != NaN);
console.log(null == 0);
/** null cannot be compared: Exception below
 * undefined compared to anything returns false: Exception true below
 */
console.log(null == undefined);

console.log(0 == undefined);
