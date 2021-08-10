var path = require('path');
console.log(path.basename(__filename));

/** Primitive types */
var a = 5; /** Value of 5 in memory */
var b = a; /** Value also have value of 5 in memory in case of a changes b stays 5 */

/** Reference Types */
var a = {
  a: 5
}; /** Keeps pointer to value instead of value - every object type */
var b = a; /** Copies pointer not value - so changing a, changes b also */

/** Excercise */
var aNumber = 5;
console.log(aNumber);
var anotherNumber = aNumber;
console.log(anotherNumber);

aNumber = 12;
console.log(aNumber);
console.log(anotherNumber);

var array = [1, 2, 3];
console.log(typeof array);
var anotherArray = array;
console.log(array);
console.log(anotherArray);

array.push(4);

console.log(array);
console.log(anotherArray);

array = ['a', 'b'];

console.log(array);
console.log(anotherArray);
