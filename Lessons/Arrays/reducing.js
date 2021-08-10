var path = require('path');
console.log(path.basename(__filename));

/** Reducing Arrays */
var array = [1, 2, 3, 4];

console.log(
  array.reduce(function(total, value) {
    console.log([total, value]);
    return total + value;
  })
);
console.log(array);
