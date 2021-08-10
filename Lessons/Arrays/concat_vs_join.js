var path = require('path');
console.log(path.basename(__filename));

/** Concat vs Join */

var array = [1, 2, 3, 4];
array.unshift('new');
array[array.indexOf('new')] = 'old';

var newArray = ['join', 'me'];
console.log(array.concat(newArray));
console.log(array.join(newArray));
console.log(array);
console.log(newArray);
