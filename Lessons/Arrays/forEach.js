var path = require('path');
console.log(path.basename(__filename));

/** forEach Method */
console.log('forEach');

var array = [1, 2, 3];

array.forEach(function(element) {
  console.log(element);
});
