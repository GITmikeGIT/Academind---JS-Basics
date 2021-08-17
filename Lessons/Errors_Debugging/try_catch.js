var path = require('path');
console.log(path.basename(__filename));

/** Handling Errors with try and catch */

/** Code with error */
try {
  test();
} catch (error) {
  console.log(error.message);
} finally {
  console.log('Always Executed - finally!');
}

/** Code without error */
var i = 0;
try {
  i++;
} catch (error) {
  console.log(error.message);
} finally {
  console.log('i = ' + i);
}
