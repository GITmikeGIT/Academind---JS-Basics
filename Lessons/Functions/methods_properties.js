var path = require('path');
console.log(path.basename(__filename));

/** Built-in Methods & Properties */
/* arguments variable inside function */
function message(message) {
  message = message ?? 'empty';
  console.log(message);
  console.log(arguments);
  console.log(arguments[1]);
  console.log(arguments[2]);
  console.log(arguments.length);
}

message('Hi!');
message('Hi!', 10);

function message2(message, numbers) {
  console.log([message, numbers]);
}
var msg = message2;
console.log(msg.name);
console.log(msg.length); // how many arguments expects

var msg2 = function(message) {
  console.log(message);
};
console.log(msg2.name);

function message3(message) {
  this.name = message;
  console.log(this.name);
  console.log(message);
  console.log(this);
}
message3('Stackblitz - preview');
