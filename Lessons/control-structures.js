var path = require('path');
console.log(path.basename(__filename));

/** If statements */
var condition = true;

if (condition) {
  console.log('Executed!');
} else {
  console.log('Not Executed!');
}

var condition = false;

if (condition) {
  console.log('Executed!');
} else {
  console.log('Not Executed!');
}

var condition = false;
var anotherCondition = true;
if (condition) {
  console.log('Executed!');
} else if (anotherCondition) {
  console.log('Still Executed!');
} else {
  console.log('Not Executed!');
}

/** ADVANCED */

var condition = 1;
var anotherCondition = true;
if (condition) {
  console.log('Executed!');
} else if (anotherCondition) {
  console.log('Still Executed!');
} else {
  console.log('Not Executed!');
}

/** Everything but 0|null|NaN is treated truthy */
var condition = 2;
var anotherCondition = true;
if (condition) {
  console.log('Executed!');
} else if (anotherCondition) {
  console.log('Still Executed!');
} else {
  console.log('Not Executed!');
}

/** Switch */
var luckyNo = 8;

switch (luckyNo) {
  case 1:
    console.log('Is 1');
    break;
  case 8:
    console.log('Is 8');
    break;
  default:
    console.log('Default');
}

var luckyNo = 1;

switch (luckyNo) {
  case 1:
    console.log('Is 1');
  case 8:
    console.log('Is 8');
  default:
    console.log('Default');
}
