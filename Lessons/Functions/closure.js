var path = require('path');
console.log(path.basename(__filename));

/** Functions (Advanced) */
function generator(input) {
  var number = input ?? 0;
  return function() {
    return number * 2;
  };
}

var calc = generator(900);
var calcAnother = generator(100);
console.log(calc());
console.log(calcAnother());
