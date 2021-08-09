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

/** For loop */
console.log('Loops');
for (var i = 1; i <= 5; i++) {
  console.log(i);
}

/** Nested loop */
console.log('Nested');
for (var i = 1; i <= 5; i++) {
  for (var j = 1; j <= 3; j++) {
    console.log(i * j);
  }
}

/** Control loop with break & continue */
console.log('Loop - break & continue');
for (var i = 0; i < 5; i++) {
  if (i == 1) {
    break;
  }
  console.log(i);
}
console.log('Loop - break & continue');

for (var i = 0; i < 5; i++) {
  for (var j = 1; j <= 3; j++) {
    if (i == 1) {
      continue;
    }
  }
  console.log(i);
}
console.log('Loop - break & continue');

for (var i = 0; i < 5; i++) {
  for (var j = 1; j <= 3; j++) {
    if (i == 1) {
      break;
    }
  }
  console.log(i);
}

/** For loop variations */
console.log('Loop - variations');

for (var i = 2; i < 5; i = i + 3) {
  console.log(i);
}

for (var i = 2; i > 1; i--) {
  console.log(i);
}

/** Loop through arrays */
console.log('Loop - arrays');

var array = [1, 2, 3, 4, 5, 6, 7];
var arrayLen = array.length;

for (var i = 0; i < arrayLen; i++) {
  console.log(array[i]);
}

/** While loop */
console.log('While loop');
var number = 5;

while (number < 7) {
  console.log(number);
  number++;
}

var condition = true;
var i = 2;

while (condition) {
  if (i == 3) {
    condition = false;
  }
  console.log(i);
  i++;
}

var condition = false;
var i = 2;

do {
  console.log('Executed');
} while (condition);
