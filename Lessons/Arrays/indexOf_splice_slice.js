var path = require('path');
console.log(path.basename(__filename));

/** IndexOf, Splice and Slice */

var array = [1, 2, 3, 4];
array.unshift('new');
console.log(array.indexOf('new'));

array[array.indexOf('new')] = 'old';
console.log(array);

var newArray1 = array.slice(2, 4);
console.log(array);
console.log(newArray1);

var newArray2 = array.splice(2, 2);
console.log(array);
console.log(newArray2);
