var path = require('path');
console.log(path.basename(__filename));

/** Filtering, mapping & reversing */

var array = [1, 2, 3, 4];
array.unshift('new');
array[array.indexOf('new')] = 'old';

console.log(
  array.filter(function(value) {
    return value > 2;
  })
);

console.log(
  array.map(function(value) {
    return value * 2;
  })
);
console.log(array);

console.log(array.reverse());
console.log(array);
